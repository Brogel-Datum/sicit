import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// import Filter from '../../components/filter/Filter';
import { getAllCollectorsTotal, getBankCollectors } from '../../store/actions/collectorsAction';
import { getBanksAverage } from '../../store/actions/banksAction';
import TotalCard from '../../components/totalCard/TotalCard';
import BarChart from '../../components/barChart/BarChart';
import GaugeAverageChart from '../../components/gaugeAverageChart/GaugeAverageChart';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingScreen: false,
            loadingStatus1: false,
            loadingStatus2: false,
        }
        this.props.getCollectorsTotal();
        this.props.getBankCollectors();
        this.props.getBanksAverageData();
    }

    componentDidUpdate(prevProps) {
        const {
            isSuccessCollectorsTotal,
            isSuccessBankCollectors,
            isSuccessAverage,
        } = this.props;

        const {
            loadingStatus1,
            loadingStatus2,
            loadingStatus3,
        } = this.state;

        if (isSuccessCollectorsTotal !== prevProps.isSuccessCollectorsTotal && isSuccessCollectorsTotal) {
            this.setState({ loadingStatus1: true });
        }

        if (isSuccessBankCollectors !== prevProps.isSuccessBankCollectors && isSuccessBankCollectors) {
            this.setState({ loadingStatus2: true });
        }

        if (isSuccessAverage !== prevProps.isSuccessAverage && isSuccessAverage) {
            this.setState({ loadingStatus3: true });
        }

        if (loadingStatus1 && loadingStatus2 && loadingStatus3) {
            this.setState({ loadingScreen: false, loadingStatus1: false, loadingStatus2: false, loadingStatus3: false })
        }
    }


    render() {

        const {
            dataCollectorsTotal,
            dataBankCollectors,
            dataAverage
        } = this.props;

        const {
            loadingScreen
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
                                Panel principal
                            </h4>
                            {/* <Filter changeData={() => this.onChange()} dates={dataValues.dates} /> */}
                        </section>
                        <section className="charts">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-4 mt-3">
                                        <div className="w-100">
                                            <div className="card align-items-center">
                                                <div className="card-body chart-body-width">
                                                    <h3 className="text-center mb-5">Total de recaudacion</h3>
                                                    {dataCollectorsTotal &&
                                                        <TotalCard dataValue={dataCollectorsTotal} />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="card align-items-center">
                                                <div className="card-body chart-body-width">
                                                    <h3 className="text-center mb-5">Promedio de proyección vs recaudación</h3>
                                                    <GaugeAverageChart chartData={dataAverage} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8 mt-3">
                                        <div className="card">
                                            <div className="card-body center-body">
                                                <div className="chart-body-width">
                                                    <h3 className="text-center my-3">Recaudación de los bancos</h3>
                                                    <BarChart data={dataBankCollectors} />
                                                </div>
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
        width: 100%;
    }
    .center-body {
        display: flex;
        align-items: center;
    }
`;

const mapStateToProps = (state) => ({
    isLoadingCollectorsTotal: state.collectorsReducer.getAllCollectorsTotal.isLoading,
    isSuccessCollectorsTotal: state.collectorsReducer.getAllCollectorsTotal.isSuccess,
    isErrorCollectorsTotal: state.collectorsReducer.getAllCollectorsTotal.isError,
    dataCollectorsTotal: state.collectorsReducer.getAllCollectorsTotal.data,

    isLoadingBankCollectors: state.collectorsReducer.getBankCollectors.isLoading,
    isSuccessBankCollectors: state.collectorsReducer.getBankCollectors.isSuccess,
    isErrorBankCollectors: state.collectorsReducer.getBankCollectors.isError,
    dataBankCollectors: state.collectorsReducer.getBankCollectors.data,

    isLoadingAverage: state.banksReducer.getBanksAverage.isLoading,
    isSuccessAverage: state.banksReducer.getBanksAverage.isSuccess,
    isErrorAverage: state.banksReducer.getBanksAverage.isError,
    dataAverage: state.banksReducer.getBanksAverage.data,
})

const mapDispatchToProps = (dispatch) => ({
    getCollectorsTotal: () => dispatch(getAllCollectorsTotal()),
    getBankCollectors: () => dispatch(getBankCollectors()),
    getBanksAverageData: () => dispatch(getBanksAverage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

