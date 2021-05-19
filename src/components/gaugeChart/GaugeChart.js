import React from 'react';
import Chart from 'react-apexcharts'

function gaugeChart({ chartData }) {

    const ingresos = chartData.sumProyeccion;
    const presupuesto = chartData.sumRecaudado;

    const result = (ingresos + presupuesto)/2;

    const radialBar = {
        series: [result],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '55%',
                    },
                    dataLabels: {
                        value: {
                            offsetY: -12,
                            fontSize: '12px',
                            color: undefined,
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                },
            },
            fill: {
                type: 'solid',
                colors: ['#FFC700'],
            },
            labels: [' '],
        },
    };

        return (
            <>
                {result > 0 ?
                        <Chart options={radialBar.options}
                            series={radialBar.series}
                            type="radialBar"/>
                    :
                    <h4 className="text-center">No hay datos disponibles</h4>
                }
            </>
        );
}

export default gaugeChart;