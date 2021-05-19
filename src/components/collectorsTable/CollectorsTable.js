import React from 'react';
import styled from 'styled-components';

const CollectorsTable = (props) => (
    <Style>
        <table>
            <thead>
                <tr>
                    <th className="border-gray">Nombre</th>
                    <th className="border-gray">Correo</th>
                    <th className="border-gray">Código</th>
                    <th className="border-gray">Puesto</th>
                    <th className="border-gray">Estado</th>
                    <th className="border-gray">Usuario</th>
                    <th className="border-gray">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {props.collectors.length > 0 ? (
                    props.collectors.map(collector => (
                        <tr key={collector.id}>
                            <td className="border-gray">{collector.nombreContacto}</td>
                            <td className="border-gray">{collector.correoContacto}</td>
                            <td className="border-gray">{collector.codigoContacto}</td>
                            <td className="border-gray">{collector.puestoContacto}</td>
                            <td className="border-gray">{collector.estadoContacto}</td>
                            <td className="border-gray">{collector.usuario}</td>
                            <td className="border-gray">
                                <div className="d-flex">
                                    <button
                                        className="form-control w-auto mr-2"
                                        onClick={() => {
                                            props.editRow(collector)
                                        }}
                                        data-toggle="modal" data-target="#exampleModal"
                                    >
                                        <i className="fa fa-pencil mr-1" aria-hidden="true"/>Editar
                                    </button>
                                    <button
                                        onClick={() => props.deleteCollector(collector.id)}
                                        className="form-control w-auto"
                                        // data-toggle="modal" data-target=".bd-example-modal-sm"
                                    >
                                        <i className="fa fa-trash-o mr-1" aria-hidden="true"/>Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td className="text-center" colSpan={3}>No hay datos</td>
                    </tr>
                )}
            </tbody>
        </table>
    </Style>
)

const Style = styled.div`
table {
        background-color: var(--white);
        width: 100%;
        min-width: 750px;
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
        width: 300px;
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
`;

export default CollectorsTable;