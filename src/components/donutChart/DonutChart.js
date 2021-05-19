import React from 'react';
import Chart from 'react-apexcharts'

function DonutChart({ typeChart, chartData, valuesData }) {

    const pie = {
        series: [44, 55, 67, 83],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            colors: ['#f99600', '#F0142F', '#FFC700', '#21D59B'],
            labels: ['Impuesto 1', 'Impuesto 2', 'Impuesto 3', 'Impuesto 4'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        height: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    }

    return (
        <>
            {valuesData > 0 ?
                <Chart options={pie.options}
                    series={pie.series}
                    type={!typeChart ? "donut" : typeChart} />
                :
                <h4 className="text-center">No hay datos disponibles</h4>
            }
        </>
    );
}

export default DonutChart;