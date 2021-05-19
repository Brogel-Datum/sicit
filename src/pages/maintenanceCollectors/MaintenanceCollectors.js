import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CollectorsTable from '../../components/collectorsTable/CollectorsTable';
import AddCollector from '../../components/addCollector/AddCollector';
import EditCollector from '../../components/editCollector/EditCollector';
import {
    getAllCollectors,
    addCollector,
    updateCollector,
    deleteCollector
} from '../../store/actions/maintenanceCollectorsActions';

function MaintenanceCollectors({
    getCollectors,
    addC,
    updateC,
    deleteC,
    isLoadingGet,
    isSuccessGet,
    isErrorGet,
    dataGet
}) {
    // Data
    const collectorsData = [
        {
            id: 1,
            nombreContacto: "some text",
            correoContacto: "some text",
            codigoContacto: 92,
            puestoContacto: "some text",
            estadoContacto: 16,
            usuario: "some text",
        },
        {
            id: 2,
            nombreContacto: "some text",
            correoContacto: "some text",
            codigoContacto: 28,
            puestoContacto: "some text",
            estadoContacto: 7,
            usuario: "some text",
        }
    ]

    useEffect(() => {
        getCollectors();
    }, []);

    console.log('prueba ', isLoadingGet,
        isSuccessGet,
        isErrorGet,
        dataGet)

    const initialFormState = {
        id: null, nombreContacto: '', correoContacto: '', codigoContacto: '',
        puestoContacto: '', estadoContacto: '', usuario: ''
    }
    // Setting state
    const [collectors, setCollectors] = useState([])
    const [currentCollector, setCurrentCollector] = useState(initialFormState)
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if (isSuccessGet){
            setCollectors(dataGet.detalleRecaudador.contactosRecaudador)
            console.log('%cMaintenanceCollectors.js line:66 entre', 'color: #007acc;', dataGet.detalleRecaudador.contactosRecaudador);
        }
    }, [isSuccessGet]);

    // CRUD operations
    const addCollector = collector => {
        collector.id = collectors.length + 1
        setCollectors([...collectors, collector])
    }

    const deleteCollector = id => {
        setEditing(false)
        setCollectors(collectors.filter(collector => collector.id !== id))
    }

    const updateCollector = (id, updatedCollector) => {
        setEditing(false)
        setCollectors(collectors.map(collector => (collector.id === id ? updatedCollector : collector)))
    }

    const editRow = collector => {
        setEditing(true)
        setCurrentCollector({
            id: collector.id,
            nombreContacto: collector.nombreContacto,
            correoContacto: collector.correoContacto,
            codigoContacto: collector.codigoContacto,
            puestoContacto: collector.puestoContacto,
            estadoContacto: collector.estadoContacto,
            usuario: collector.usuario
        })
    }

    return (
        <>
            <div className="container">
                <section className='stats text-center mt-5'>
                    <h2 className="title">Panel de reportes del sicit</h2>
                    <h4 className="sub-title">Mantenimiento de recaudadores</h4>
                </section>
                <div className="d-grid">
                    <div className="ml-auto">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalAdd">
                            Agregar
                        </button>
                    </div>
                    <div className="flex-large text-center mt-5">
                        <CollectorsTable collectors={collectors} editRow={editRow} deleteCollector={deleteCollector} />
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="flex-large text-center">
                                <h2>Editar</h2>
                                <EditCollector
                                    editing={editing}
                                    setEditing={setEditing}
                                    currentCollector={currentCollector}
                                    updateCollector={updateCollector}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modalAdd" tabIndex="-1" role="dialog" aria-labelledby="modalAddLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="modalAddLabel">Modal title</h5> */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="flex-large text-center">
                                <h2>Agregar</h2>
                                <AddCollector addCollector={addCollector} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="modalAddLabel">Modal title</h5> */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="flex-large text-center">
                                <h4>Se eliminará el registro</h4>
                                <button type="button" className="btn btn-primary mx-1">Confirmar</button>
                                <button type="button" className="btn btn-danger mx-1">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    isLoadingGet: state.maintenanceCollectorsReducer.getAllCollectors.isLoading,
    isSuccessGet: state.maintenanceCollectorsReducer.getAllCollectors.isSuccess,
    isErrorGet: state.maintenanceCollectorsReducer.getAllCollectors.isError,
    dataGet: state.maintenanceCollectorsReducer.getAllCollectors.data,

    isLoadingAdd: state.maintenanceCollectorsReducer.addCollector.isLoading,
    isSuccessAdd: state.maintenanceCollectorsReducer.addCollector.isSuccess,
    isErrorAdd: state.maintenanceCollectorsReducer.addCollector.isError,
    dataAdd: state.maintenanceCollectorsReducer.addCollector.data,

    isLoadingUpdate: state.maintenanceCollectorsReducer.updateCollector.isLoading,
    isSuccessUpdate: state.maintenanceCollectorsReducer.updateCollector.isSuccess,
    isErrorUpdate: state.maintenanceCollectorsReducer.updateCollector.isError,
    dataUpdate: state.maintenanceCollectorsReducer.updateCollector.data,

    isLoadingDelete: state.maintenanceCollectorsReducer.deleteCollector.isLoading,
    isSuccessDelete: state.maintenanceCollectorsReducer.deleteCollector.isSuccess,
    isErrorDelete: state.maintenanceCollectorsReducer.deleteCollector.isError,
    dataDelete: state.maintenanceCollectorsReducer.deleteCollector.data,
})

const mapDispatchToProps = (dispatch) => ({
    getCollectors: () => dispatch(getAllCollectors()),
    addC: () => dispatch(addCollector()),
    updateC: () => dispatch(updateCollector()),
    deleteC: () => dispatch(deleteCollector()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MaintenanceCollectors);