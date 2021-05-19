import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CardValues from '../../components/cardValues/CardValues';
// import Filter from '../../components/filter/Filter';
import TotalCard from '../../components/totalCard/TotalCard';
import { getAllCollectors, getAllCollectorsTotal } from '../../store/actions/collectorsAction';

class Treasury extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingScreen: false,
            loadingStatus1: false,
            loadingStatus2: false,
        }
        this.props.getCollectorsTotal();
        this.props.getCollectors();
    }

    componentDidUpdate(prevProps) {
        const {
            isSuccessCollectorsTotal,
            isSuccessAllCollectors
        } = this.props;

        const {
            loadingStatus1,
            loadingStatus2,
        } = this.state;

        if (isSuccessCollectorsTotal !== prevProps.isSuccessCollectorsTotal && isSuccessCollectorsTotal) {
            this.setState({ loadingStatus1: true });
        }

        if (isSuccessAllCollectors !== prevProps.isSuccessAllCollectors && isSuccessAllCollectors) {
            this.setState({ loadingStatus2: true });
        }

        if (loadingStatus1 && loadingStatus2) {
            this.setState({ loadingScreen: false, loadingStatus1: false, loadingStatus2: false })
        }
    }


    render() {

        const {
            // getCollectors,
            // getCollectorsTotal,
            // isLoadingAllCollectors,
            // isSuccessAllCollectors,
            // isErrorAllCollectors,
            dataAllCollectors,

            // isLoadingCollectorsTotal,
            // isSuccessCollectorsTotal,
            // isErrorCollectorsTotal,
            dataCollectorsTotal,
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
                        <section className='stats text-center mt-5'>
                            <h2 className="title">Panel de reportes del sicit</h2>
                            <h4 className="sub-title">Resumen de recaudaciones</h4>
                            {/* <Filter changeData={onChange} dates={dataValues.dates} /> */}
                        </section>
                        <section className='stats text-center'>
                            <div className="container">
                                <div className="row">
                                    {dataAllCollectors.detalleRecaudacion && dataAllCollectors.detalleRecaudacion.map((data, index) => (
                                        <div className="col-sm-6 col-lg-4 mx-auto" key={index} >
                                            <CardValues dataValue={data} />
                                        </div>
                                    ))}
                                    <div className="col-sm-6 col-lg-4 mx-auto" >
                                        {dataCollectorsTotal &&
                                            <TotalCard dataValue={dataCollectorsTotal} />
                                        }
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
.stats {
    color: var(--white);
    margin-top: 20px;
}
`;

const mapStateToProps = (state) => ({
    isLoadingAllCollectors: state.collectorsReducer.getAllCollectors.isLoading,
    isSuccessAllCollectors: state.collectorsReducer.getAllCollectors.isSuccess,
    isErrorAllCollectors: state.collectorsReducer.getAllCollectors.isError,
    dataAllCollectors: state.collectorsReducer.getAllCollectors.data,

    isLoadingCollectorsTotal: state.collectorsReducer.getAllCollectorsTotal.isLoading,
    isSuccessCollectorsTotal: state.collectorsReducer.getAllCollectorsTotal.isSuccess,
    isErrorCollectorsTotal: state.collectorsReducer.getAllCollectorsTotal.isError,
    dataCollectorsTotal: state.collectorsReducer.getAllCollectorsTotal.data,
})

const mapDispatchToProps = (dispatch) => ({
    getCollectors: () => dispatch(getAllCollectors()),
    getCollectorsTotal: () => dispatch(getAllCollectorsTotal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Treasury);