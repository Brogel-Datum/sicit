import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Table from '../../components/table/Table';
// import Filter from '../../components/filter/Filter';
import BarChart from '../../components/barChart/BarChart';
import { getBankCollectors } from '../../store/actions/collectorsAction';
import { getBanksCollectors } from '../../store/actions/banksAction';

class BankClosure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingScreen: false,
            columns: [
                {
                    Header: 'Banco',
                    accessor: 'nombreBanco',
                },
                {
                    Header: 'Número de transacciones',
                    accessor: 'numeroTransacciones',
                },
                {
                    Header: 'Número conciliados',
                    accessor: 'numeroConciliadas',
                },
                {
                    Header: 'Número no conciliados',
                    accessor: 'numeroNoConciliadas',
                },
                {
                    Header: 'Monto conciliados',
                    accessor: 'montoConciliado',
                },
                {
                    Header: 'Monto no conciliados',
                    accessor: 'montoNoConciliado',
                },
                {
                    Header: 'Monto colectado',
                    accessor: 'montoColectado',
                }
            ]
        }
        this.props.getBankCollectors();
        this.props.getBanks();
    }

    componentDidUpdate(prevProps) {
        const {
            isSuccessBankCollectors,
        } = this.props;

        const {
            loadingStatus1,
        } = this.state;

        if (isSuccessBankCollectors !== prevProps.isSuccessBankCollectors && isSuccessBankCollectors) {
            this.setState({ loadingStatus1: true });
        }

        if (loadingStatus1) {
            this.setState({ loadingScreen: false, loadingStatus1: false })
        }
    }


    render() {

        const {
            dataBankCollectors,
            dataBanks
        } = this.props;

        const {
            loadingScreen,
            columns,
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
                                Cierre de bancos
                            </h4>
                            {/* <Filter changeData={onChange} dates={dataValues.dates} /> */}
                        </section>
                        <section className="charts">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <div className="card">
                                            <div className="card-body center-body">
                                                <div className="chart-body-width">
                                                    <h3 className="text-center my-3">Recaudación de los bancos</h3>
                                                    <BarChart data={dataBankCollectors} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mt-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <h3 className="text-center my-3">Recaudación de los bancos</h3>
                                                <Table columns={columns} data={dataBanks} />
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
    max-width: 680px;
}
.center-body {
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

const mapStateToProps = (state) => ({
    isLoadingBankCollectors: state.collectorsReducer.getBankCollectors.isLoading,
    isSuccessBankCollectors: state.collectorsReducer.getBankCollectors.isSuccess,
    isErrorBankCollectors: state.collectorsReducer.getBankCollectors.isError,
    dataBankCollectors: state.collectorsReducer.getBankCollectors.data,

    isLoadingBanks: state.banksReducer.getBanks.isLoading,
    isSuccessBanks: state.banksReducer.getBanks.isSuccess,
    isErrorBanks: state.banksReducer.getBanks.isError,
    dataBanks: state.banksReducer.getBanks.data,
})

const mapDispatchToProps = (dispatch) => ({
    getBankCollectors: () => dispatch(getBankCollectors()),
    getBanks: () => dispatch(getBanksCollectors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BankClosure)

