import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import TrendChart from '../../components/trendChart/TrendChart';
import NestedTable from '../../components/nestedTable/NestedTable';
// import Filter from '../../components/filter/Filter';
import { getTrend } from '../../store/actions/collectorsAction';

class Income extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingScreen: false,
            loadingStatus1: false,
            columns: [
                {
                    // Build our expander column
                    id: 'expander', // Make sure it has an ID
                    Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
                        <span {...getToggleAllRowsExpandedProps()}>
                            {isAllRowsExpanded ? <i className="fa fa-minus" /> : <i className="fa fa-plus" />}
                        </span>
                    ),
                    Cell: ({ row }) =>
                        // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
                        // to build the toggle for expanding a row
                        row.canExpand ? (
                            <span
                                {...row.getToggleRowExpandedProps({
                                    style: {
                                        // We can even use the row.depth property
                                        // and paddingLeft to indicate the depth
                                        // of the row
                                        paddingLeft: `${row.depth * 2}rem`,
                                    },
                                })}
                            >
                                {row.isExpanded ? <i className="fa fa-minus" /> : <i className="fa fa-plus" />}
                            </span>
                        ) : null,
                },
                {
                    Header: 'Detalle',
                    accessor: 'detalle',
                },
                {
                    Header: '01/2021',
                    accessor: 'proyectado',
                },
                {
                    Header: '12/2020',
                    accessor: 'recibido',
                },
                {
                    Header: '11/2020',
                    accessor: 'recibido1',
                },
                {
                    Header: '10/2020',
                    accessor: 'recibido2',
                },
                {
                    Header: '09/2020',
                    accessor: 'recibido3',
                },
                {
                    Header: '08/2020',
                    accessor: 'recibido4',
                },
                {
                    Header: '07/2020',
                    accessor: 'recibido5',
                },
                {
                    Header: 'Total anual',
                    accessor: 'anual',
                },
                {
                    Header: 'Menos días atípicos',
                    accessor: 'day',
                },
                {
                    Header: 'Total',
                    accessor: 'total',
                },
                {
                    Header: 'Promedio días',
                    accessor: 'promedio',
                }
            ],
            data: [
                {
                    detalle: 'Total ingresos corrientes reales de TGR (Ingresos tributarios mas no tributarios) Feb-21',
                    proyectado: '-',
                    recibido: '-',
                    recibido1: '-',
                    recibido2: '-',
                    recibido3: '-',
                    recibido4: '-',
                    recibido5: '-',
                    anual: 0,
                    day: 0,
                    total: 0,
                    promedio: 0
                },
                {
                    detalle: 'Total ingresos en TGR Menos tasa de seguridad',
                    proyectado: '-',
                    recibido: '-',
                    recibido1: '-',
                    recibido2: '-',
                    recibido3: '-',
                    recibido4: '-',
                    recibido5: '-',
                    anual: 0,
                    day: 0,
                    total: 0,
                    promedio: 0
                },
                {
                    detalle: 'TOTAL IMPUESTOS TRIBUTARIOS',
                    proyectado: '-',
                    recibido: '-',
                    recibido1: '-',
                    recibido2: '-',
                    recibido3: '-',
                    recibido4: '-',
                    recibido5: '-',
                    anual: 0,
                    day: 0,
                    total: 0,
                    promedio: 0
                },
                {
                    detalle: 'TOTAL IMPUESTOS TRIBUTARIOS',
                    proyectado: '-',
                    recibido: '-',
                    recibido1: '-',
                    recibido2: '-',
                    recibido3: '-',
                    recibido4: '-',
                    recibido5: '-',
                    anual: 0,
                    day: 0,
                    total: 0,
                    promedio: 0,
                    subRows: [
                        {
                            detalle: 'IMPUESTO SOBRE LA RENTA (11100)',
                            proyectado: 'L71,982,726.21',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'PAGOS A CUENTA (11103)',
                            proyectado: 'L1,225,028,427.22',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'APORTE SOLIDARIO (11109)',
                            proyectado: 'L6,329,565.98',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'PAGOS A CUENTA APORTACION SOLIDARIA (11116)',
                            proyectado: 'L190,519,496.98',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'IMPUESTO SOBRE LA PROPIEDAD (11200-)',
                            proyectado: 'L8,810,280.81',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'ACTIVO NETO (11202)',
                            proyectado: 'L1,133,437.59',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'IMPUESTO SOBRE PRODUCCION CONSUMO Y VENTA (11300)',
                            proyectado: 'L347,148,096.94',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'SOBRE VENTAS 15% (11306) CONSUMO CB',
                            proyectado: 'L82,270.70',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'SOBRE VENTAS 18% (11307) BEBIDAS GASEOSAS RESTAURANTES',
                            proyectado: 'L9,674,480.62',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'SOBRE LA VENTA DE CIGARRILLOS (11308)',
                            proyectado: '-',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'BOLETOS TRANSPORTE (11314)',
                            proyectado: 'L82,270.70',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'IMPUESTO SOBRE SERVICIO Y ACTIVIDADES ESPECIFICAS (11400)',
                            proyectado: 'L122,224.14',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'APORTE ATE. PROG. SOCIALES Y Construcción PATRIMONIO VIAL (11407)',
                            proyectado: 'L759,061,741.92',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'Devolución GAS LPG (11408)',
                            proyectado: 'L8,234,036.33',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'TASA DE SEGURIDAD (11410-11415)',
                            proyectado: 'L70,875,034.57',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'ECOTASA (11416)',
                            proyectado: 'L2,889,000.00',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'CONTRIBUCION SOCIAL SECTOR COORPORATIVO ECONOMICO (11417)',
                            proyectado: 'L701,406.58',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'CONTRIBUCION SOCIAL DEL SECT.S (11418)',
                            proyectado: '-',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'IMPUESTO SOBRE LAS IMPORTACIONES (11500-)',
                            proyectado: 'L52,271,562.23',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'IMPUESTO BENEFICIOS EVENTOS JUEGOS DE AZAR (11600-)',
                            proyectado: 'L16,286.73',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        }
                    ]
                },
                {
                    detalle: 'TOTAL IMPUESTOS NO TRIBUTARIOS',
                    proyectado: '-',
                    recibido: '-',
                    recibido1: '-',
                    recibido2: '-',
                    recibido3: '-',
                    recibido4: '-',
                    recibido5: '-',
                    anual: 0,
                    day: 0,
                    total: 0,
                    promedio: 0,
                    subRows: [
                        {
                            detalle: 'TASAS (12100)',
                            proyectado: 'L7,16,893',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'PAPELES DE ADUANAS (12109)',
                            proyectado: '-',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'SERVICIO PROTECCION A VUELOS NACIONALES ( 12115)',
                            proyectado: 'L155,785.70',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'DERECHOS (12200-)',
                            proyectado: 'L9,811,775.08',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'CANONES Y REGALIAS (12300-12301-12305)',
                            proyectado: 'L6,36,747.53',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'MULTAS (12400)',
                            proyectado: 'L6,011,541.73',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'OTROS NO TRIBUTARIOS (12800)',
                            proyectado: 'L642,613.62',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'VENTA DE BIENES (15100)',
                            proyectado: 'L82,270.70',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'VENTA DE SERVICIOS (15200)',
                            proyectado: 'L3,106,207.17',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'INTERESE BENFICIOS ALQUILERES Y D (17000-)',
                            proyectado: '-',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        }
                    ]
                },
                {
                    detalle: 'TOTAL INGRESOS',
                    proyectado: '-',
                    detalle2: '-',
                    recibido: '-',
                    recibido1: '-',
                    recibido2: '-',
                    recibido3: '-',
                    recibido4: '-',
                    recibido5: '-',
                    anual: 0,
                    day: 0,
                    total: 0,
                    promedio: 0,
                    subRows: [
                        {
                            detalle: 'Total de lo recibido',
                            proyectado: 'L7,16,893',
                            detalle2: '-',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        },
                        {
                            detalle: 'Total de la proyección diaria',
                            proyectado: 'L5,16,893',
                            detalle2: 'L5,16,893',
                            recibido: '-',
                            recibido1: '-',
                            recibido2: '-',
                            recibido3: '-',
                            recibido4: '-',
                            recibido5: '-',
                            anual: 0,
                            day: 0,
                            total: 0,
                            promedio: 0
                        }
                    ]
                },
                {
                    detalle: 'CUANTO REPRESENTA A LOS INGRESOS TRIBUTARIOS',
                    proyectado: '9,999,999.00',
                    detalle2: '-',
                    recibido: '-',
                    recibido1: '-',
                    recibido2: '-',
                    recibido3: '-',
                    recibido4: '-',
                    recibido5: '-',
                    anual: 0,
                    day: 0,
                    total: 0,
                    promedio: 0
                },
                {
                    detalle: 'CUANTO REPRESENTA A LOS INGRESOS NO TRIBUTARIOS',
                    proyectado: '9,999,999.00',
                    detalle2: '-',
                    recibido: '-',
                    recibido1: '-',
                    recibido2: '-',
                    recibido3: '-',
                    recibido4: '-',
                    recibido5: '-',
                    anual: 0,
                    day: 0,
                    total: 0,
                    promedio: 0
                }
            ]
        }
        this.props.getTrends();
    }

    componentDidUpdate(prevProps) {
        const {
            isSuccessTrend,
        } = this.props;

        const {
            loadingStatus1,
        } = this.state;

        if (isSuccessTrend !== prevProps.isSuccessTrend && isSuccessTrend) {
            this.setState({ loadingStatus1: true });
        }

        if (loadingStatus1) {
            this.setState({ loadingScreen: false, loadingStatus1: false })
        }
    }


    render() {

        const {
            dataTrend,
        } = this.props;

        const {
            loadingScreen,
            columns,
            data
        } = this.state;

        return (
            <Style>
                {loadingScreen ?
                    <h1>Cargando</h1>
                    :
                    <>
                        <section className='stats text-center container mt-5'>
                            <h2 className="title">Panel de reportes del sicit</h2>
                            <h4 className="sub-title">
                                Tendencia de ingresos
                            </h4>
                            {/* <Filter changeData={onChange} dates={dataValues.dates} /> */}
                        </section>
                        <section className="charts mr-3 ml-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 mt-3">
                                        <div className="card align-items-center">
                                            <div className="card-body chart-body-width">
                                                <h3 className="text-center mb-5">Total de proyecciones</h3>
                                                {dataTrend &&
                                                    <TrendChart chartData={dataTrend} typeChart="line" />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mt-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <h3 className="text-center upperText mt-5 mb-5">Tendencia de ingresos</h3>
                                                <NestedTable columns={columns} data={data} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                }
            </Style>
        )
    }
}

const Style = styled.div`
.chart-body-width {
    max-width: 680px;
    width: 100%;
}
`;

const mapStateToProps = (state) => ({
    isLoadingTrend: state.collectorsReducer.getTrend.isLoading,
    isSuccessTrend: state.collectorsReducer.getTrend.isSuccess,
    isErrorTrend: state.collectorsReducer.getTrend.isError,
    dataTrend: state.collectorsReducer.getTrend.data,
})

const mapDispatchToProps = (dispatch) => ({
    getTrends: () => dispatch(getTrend()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Income)