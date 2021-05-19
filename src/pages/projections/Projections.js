import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import LineChart from '../../components/lineChart/LineChart';
import DonutChart from '../../components/donutChart/DonutChart';
import GaugeChart from '../../components/gaugeChart/GaugeChart';
import TableData from '../../components/tableData/TableData';
// import Filter from '../../components/filter/Filter';
import Select from 'react-select';
import {
    getAllProjections,
    getAllTaxesProjections,
    getAllTaxesList,
    getProjectionsCollectors,
    getTaxesList
} from '../../store/actions/projectionsAction';

class Projections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingScreen: false,
            loadingStatus1: false,
            loadingStatus2: false,
            loadingStatus3: false,
            loadingStatus4: false,
            loadingStatus5: false,
            rubroData: [],
        }
        this.props.getProjections();
        this.props.getTaxesProjections();
        this.props.getTaxesList();
        this.props.projectionsCollectors();
        this.props.getAllTaxes();
    }

    componentDidUpdate(prevProps) {
        const {
            isSuccessTaxesProjections,
            isSuccessAllProjections,
            isSuccessTaxesList,
            dataTaxesProjections,
            isSuccessProjectionsCollectors,
            isSuccessTaxes
        } = this.props;

        const {
            loadingStatus1,
            loadingStatus2,
            loadingStatus3,
            loadingStatus4,
            loadingStatus5
        } = this.state;

        if (isSuccessTaxesProjections !== prevProps.isSuccessTaxesProjections && isSuccessTaxesProjections) {
            this.setState({ loadingStatus1: true });
        }

        if (isSuccessAllProjections !== prevProps.isSuccessAllProjections && isSuccessAllProjections) {
            const dataRubro = [];
            dataTaxesProjections && dataTaxesProjections.map((data, index) => (
                dataRubro.push({ value: data.rubro, label: `${data.impuesto.toUpperCase()} (${data.rubro})` })
            ))
            this.setState({ rubroData: dataRubro, loadingStatus2: true })
        }

        if (isSuccessTaxesList !== prevProps.isSuccessTaxesList && isSuccessTaxesList) {
            this.setState({ loadingStatus3: true });
        }

        if (isSuccessProjectionsCollectors !== prevProps.isSuccessProjectionsCollectors && isSuccessProjectionsCollectors) {
            this.setState({ loadingStatus4: true })
        }

        if (isSuccessTaxes !== prevProps.isSuccessTaxes && isSuccessTaxes) {
            this.setState({ loadingStatus5: true })
        }

        if (loadingStatus1 && loadingStatus2 && loadingStatus3 && loadingStatus4 && loadingStatus5) {
            this.setState({
                loadingScreen: false, loadingStatus1: false, loadingStatus2: false, loadingStatus3: false,
                loadingStatus4: false, loadingStatus5: false
            })
        }
    }

    handleChangeCollectors = (selectedOption) => {
        console.log(`Option selected:`, selectedOption);
    };

    handleChangeProjections = (selectedOption) => {
        console.log(`Option selected:`, selectedOption);
    };


    render() {

        const {
            dataAllProjections,
            dataProjectionsCollectors,
            dataTaxes
        } = this.props;

        const {
            loadingScreen,
            rubroData,
            donut,
            pie,
        } = this.state;

        return (
            <Style>
                {loadingScreen ?
                    <h1>Cargando</h1>
                    :
                    <>
                        <section className='stats text-center container mt-5'>
                            <h2 className="title">Panel de reportes del sicit</h2>
                            <h4 className="sub-title">Proyección de la recaudación
                            </h4>
                            {/* <Filter changeData={onChange} dates={dataValues.dates} /> */}
                        </section>
                        <section className="charts mr-3 ml-3">
                            <div className="container">
                                <div className="row">
                                    {
                                        dataAllProjections.detallePresupuestado && dataAllProjections.detallePresupuestado.map((data, index) => (
                                            <div className="col-12 col-sm-6 col-lg-3 mt-3 mx-auto" key={index}>
                                                <div className="card">
                                                    <div className="card-body mb-1">
                                                        <h3 className="text-center mb-5">{data.nombreRecaudador}</h3>
                                                        <GaugeChart chartData={data} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6 mt-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <h3 className="text-center mb-5">Recaudacion por impuestos</h3>
                                                <DonutChart chartData={pie} valuesData={1} typeChart="donut" />
                                                <div>
                                                    {rubroData &&
                                                        <Select
                                                            isMulti
                                                            name="colors"
                                                            options={rubroData}
                                                            className="basic-multi-select"
                                                            classNamePrefix="select"
                                                            onChange={this.handleChangeCollectors}
                                                        />
                                                    }
                                                    <button className="custom-button my-3" onClick={() => this.sendSelect1()}>
                                                        Filtrar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6 mt-3">
                                        <div className="card">
                                            <div className="card-body pb-5">
                                                <h3 className="text-center mb-5">Proyección recaudacion por impuestos</h3>
                                                <DonutChart chartData={donut} valuesData={1} typeChart="pie" />
                                                {rubroData &&
                                                    <Select
                                                        isMulti
                                                        name="colors"
                                                        options={rubroData}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                        onChange={this.handleChangeProjections}
                                                    />
                                                }
                                                <button className="custom-button my-3">
                                                    Filtrar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mt-3">
                                        <div className="card align-items-center">
                                            <div className="card-body chart-body-width">
                                                <h3 className="text-center mb-5">Proyección de la recaudación </h3>
                                                {dataProjectionsCollectors &&
                                                    <LineChart chartData={dataProjectionsCollectors} typeChart="line" />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mt-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <h3 className="text-center upperText mt-5 mb-5">Resumen diario de recaudación bancaria</h3>
                                                <TableData dataTable={dataTaxes} />
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
.container{
    max-height: calc(100vh - 20px);
}
/* Start charts */
.charts {
    margin-top: 25px;
    color: #BBB
}
.charts .chart-container {
    padding: 15px;
}
.charts .chart-container h3 {
    margin: 0 0 10px;
    font-size: 17px;
}
.upperText {
    text-transform: uppercase;
}
.text-center, table {
    color: var(--black);
}
.chart-body-width {
    max-width: 680px;
    width: 100%;
}
`;

const mapStateToProps = (state) => ({
    isLoadingAllProjections: state.projectionsReducer.getAllProjections.isLoading,
    isSuccessAllProjections: state.projectionsReducer.getAllProjections.isSuccess,
    isErrorAllProjections: state.projectionsReducer.getAllProjections.isError,
    dataAllProjections: state.projectionsReducer.getAllProjections.data,

    isLoadingTaxesProjections: state.projectionsReducer.getAllTaxesProjections.isLoading,
    isSuccessTaxesProjections: state.projectionsReducer.getAllTaxesProjections.isSuccess,
    isErrorTaxesProjections: state.projectionsReducer.getAllTaxesProjections.isError,
    dataTaxesProjections: state.projectionsReducer.getAllTaxesProjections.data,

    isLoadingTaxesList: state.projectionsReducer.getAllTaxesList.isLoading,
    isSuccessTaxesList: state.projectionsReducer.getAllTaxesList.isSuccess,
    isErrorTaxesList: state.projectionsReducer.getAllTaxesList.isError,
    dataTaxesList: state.projectionsReducer.getAllTaxesList.data,

    isLoadingProjectionsCollectors: state.projectionsReducer.getProjectionsCollectors.isLoading,
    isSuccessProjectionsCollectors: state.projectionsReducer.getProjectionsCollectors.isSuccess,
    isErrorProjectionsCollectors: state.projectionsReducer.getProjectionsCollectors.isError,
    dataProjectionsCollectors: state.projectionsReducer.getProjectionsCollectors.data,

    isLoadingTaxes: state.projectionsReducer.getTaxesList.isLoading,
    isSuccessTaxes: state.projectionsReducer.getTaxesList.isSuccess,
    isErrorTaxes: state.projectionsReducer.getTaxesList.isError,
    dataTaxes: state.projectionsReducer.getTaxesList.data,
})

const mapDispatchToProps = (dispatch) => ({
    getProjections: () => dispatch(getAllProjections()),
    getTaxesProjections: () => dispatch(getAllTaxesProjections()),
    getTaxesList: () => dispatch(getAllTaxesList()),
    projectionsCollectors: () => dispatch(getProjectionsCollectors()),
    getAllTaxes: () => dispatch(getTaxesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Projections);


