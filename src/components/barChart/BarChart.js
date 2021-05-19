import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'

export default function BarChart({ data }) {

    const [dataBank, setDataBank] = useState([]);
    const [nameBank, setNameBank] = useState([]);

    useEffect(() => {
        const datavalue = [];
        const name = [];

        data && data.map(data => {
            datavalue.push(data.montoColectado);
            name.push(data.nombreColector);
            return (datavalue)
        })
        setDataBank(datavalue);
        setNameBank(name);
    }, [data]);

    const barChart = {
        series: [{
            data: dataBank
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function (chart, w, e) {
                        // console.log(chart, w, e)
                    }
                }
            },
            colors: ['#57B8FF'],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: nameBank,
                labels: {
                    style: {
                        fontSize: '12px',
                    }
                }
            }
        },
    }

    return (
        <>
            {/* {dataArray.length < 0 ? */}
            <Chart options={barChart.options}
                series={barChart.series}
                type="bar" />
            {/* :
                    <h4 className="text-center">No hay datos disponibles</h4>
                } */}
        </>
    );
}