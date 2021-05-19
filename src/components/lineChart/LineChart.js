import React from "react";
import Chart from "react-apexcharts";

function LineChart({ typeChart, chartData }) {

    const dataProjections = [];
    const dataCollections = [];
    const dataGroup = [];

    chartData && chartData.map((data, index) => {
        dataProjections.push(data.promedioProyectado);
        dataCollections.push(data.montoRecaudado);
        dataGroup.push(data.agrupamiento);
        return dataProjections;
    })

    const lineChart = {
        series: [{
            name: "Proyección",
            data: dataProjections,
        },
        {
            name: "Recaudación",
            data: dataCollections,
        }
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
            },
            colors: ['#f99600', '#21D59B'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [5, 7],
                curve: 'straight',
                dashArray: [0, 8, 5, 10]
            },
            title: {
                text: ' ',
                align: 'left'
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: dataGroup
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    }
                ]
            },
            grid: {
                borderColor: '#f1f1f1',
            }
        },
    }

    return (
        <>
            {chartData ?
                <Chart
                    options={lineChart.options}
                    series={lineChart.series}
                    type={!typeChart ? "line" : typeChart}
                />
                :
                <h4 className="text-center">No hay datos disponibles</h4>
            }
        </>
    );
}

export default LineChart;