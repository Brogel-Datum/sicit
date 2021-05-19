import React from 'react';
import style from 'styled-components';

export default function TableData({ dataTable }) {

    const response = {
        nameTable: [
            {
                column: "Detalle",
            },
            {
                column: "Monto Proyectado",
            },
            {
                column: "Monto Recibido",
            }
        ],
        // dataTable: [
        //     {
        //         detalles: [
        //             {
        //                 detalle: "Total ingresos corrientes reales de TGR (Ingresos tributarios mas no tributarios) Feb-21",
        //             },
        //             {
        //                 detalle: "-",
        //             },
        //             {
        //                 detalle: "-",
        //             }
        //         ]
        //     },
        //     {
        //         detalles: [
        //             {
        //                 detalle: "Total ingresos en TGR Menos tasa de seguridad",
        //             },
        //             {
        //                 detalle: "-",
        //             },
        //             {
        //                 detalle: "-",
        //             }
        //         ]
        //     },
        //     {
        //         detalles: [
        //             {
        //                 detalle: "TOTAL IMPUESTOS TRIBUTARIOS",
        //             },
        //             {
        //                 detalle: "-",
        //             },
        //             {
        //                 detalle: "-",
        //             }
        //         ]
        //     },
        //     {
        //         detalles: [
        //             {
        //                 detalle: "TOTAL IMPUESTOS NO TRIBUTARIOS",
        //             },
        //             {
        //                 detalle: "-",
        //             },
        //             {
        //                 detalle: "-",
        //             }
        //         ]
        //     },
        //     {
        //         detalles: [
        //             {
        //                 detalle: "TOTAL INGRESOS",
        //             },
        //             {
        //                 detalle: "-",
        //             },
        //             {
        //                 detalle: "-",
        //             },

        //         ]
        //     },
        //     {
        //         detalles: [
        //             {
        //                 detalle: "CUANTO REPRESENTA A LOS INGRESOS TRIBUTARIOS",
        //             },
        //             {
        //                 detalle: "9,999,999.00",
        //             },
        //             {
        //                 detalle: "-",
        //             }
        //         ],
        //     },
        //     {
        //         detalles: [
        //             {
        //                 detalle: "CUANTO REPRESENTA A LOS INGRESOS NO TRIBUTARIOS",
        //             },
        //             {
        //                 detalle: "9,999.00",
        //             },
        //             {
        //                 detalle: "-",
        //             }
        //         ],
        //     },
        // ]
    }


    return (
        <Style>
            <div className="prueba">
                <table className="border-gray" data-toggle="table" id="table" data-detail-view="" data-pagination="true" data-pagination-pre-text="< Previous" data-pagination-next-text="Next >" data-classes="table table-hover table-condensed">
                    <thead>
                        <tr>
                            {response.nameTable && response.nameTable.map((item, index) => (
                                <th className="border-gray" key={'table' + index}>{item.column}</th>
                            ))}
                        </tr>
                    </thead>
                    {dataTable && dataTable.map((item, index) => (
                        <tbody key={'body' + index}>
                            <tr className="border-gray" data-toggle="collapse" id={'row' + index} data-target={'.row' + index}>
                                <td className="border-gray" key={'databody' + index}>
                                    <div className="d-flex">
                                        {item.categoria}
                                    </div>
                                </td>
                                <td className="border-gray" key={'databody' + index}>
                                    <div className="d-flex">
                                        {item.montoProyectado}
                                    </div>
                                </td>
                                <td className="border-gray" key={'databody' + index}>
                                    <div className="d-flex">
                                        {item.montoRecaudado}
                                    </div>
                                </td>
                                {/* {item.detalles && item.detalles.map((itemDetalle, i) => (
                                    <td className="border-gray" key={'databody'+i}>
                                        <div className="d-flex">
                                            {item.data && (item.detalles[0] === item.detalles[i]) &&
                                                <i className="fa fa-plus mr-3"></i>
                                            }
                                            {itemDetalle.detalle}
                                        </div>
                                    </td>
                                ))} */}
                            </tr>
                            {item.data &&
                                <tr className={'collapse row' + index}>
                                    <td className="border-gray" colSpan={item.detalles.length}>
                                        <table className="border-gray" data-detail-view="">
                                            <thead>
                                                <tr className="border-gray" data-toggle="collapse" id="" data-target={'.subrow' + index}>
                                                    <th colSpan={item.data.data.length} style={{ width: "99%" }}>
                                                        <i className="fa fa-plus mr-3"></i>
                                                        {item.data.name}
                                                    </th>
                                                </tr>
                                            </thead>
                                            {item.data.data && item.data.data.map((itemData, i) => (
                                                <tbody key={'subdata' + i}>
                                                    <tr className={'border-gray collapse subrow' + index} data-href="#">
                                                        {itemData.detalles && itemData.detalles.map((itemDetalle, indexData) => (
                                                            <td className="border-gray" key={'subbody' + indexData}>
                                                                <div className="d-flex">
                                                                    {itemData && (itemData.detalles[0] === itemData.detalles[indexData]) &&
                                                                        <span style={{ margin: "0 10px" }}></span>
                                                                    }
                                                                    {itemDetalle.detalle}
                                                                </div>
                                                            </td>
                                                        ))}
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </table>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    ))}
                </table>
            </div>
        </Style >
    );
}

const Style = style.div`
    table {
        background-color: var(--white);
        width: 100%;
        min-width: 500px;
        border-collapse: collapse;
    }
    .border-gray {
        border: 1px solid var(--border-gray);
    }
    table td { 
        padding: 15px 10px;
        background-color: var(--white);
    }
    td {
        opacity: 1;
        padding: 10px;
        line-height: 20px;
        transition: all 0.2s ease-in-out;
    } 
    .hide td {
        opacity: 0;
        line-height: 0px;
        padding: 0 10px;
    }
    th {
        padding: 15px 10px;
        width: 100%;
        text-transform: uppercase;
    }
    td {
        background-color: var(--white);
    }
    tr:nth-child(odd) td {
        background-color: var(--white);
    }
    tr .collapsed {
        opacity: 1;
        padding: 10px;
        line-height: 20px;
        transition: all 0.2s ease-in-out;
    }
    @media only screen and (max-width: 767.5px) {
        .prueba {
            overflow: auto;
        }
    }
`