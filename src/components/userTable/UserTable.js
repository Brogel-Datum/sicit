import React from 'react';
import styled from 'styled-components';

const UserTable = (props) => (
    <Style>
        <table>
            <thead>
                <tr>
                    <th className="border-gray">Impuestos</th>
                    <th className="border-gray">Mes</th>
                    <th className="border-gray">Año</th>
                    <th className="border-gray">Días</th>
                    <th className="border-gray">Proyección</th>
                    <th className="border-gray">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td className="border-gray">{user.name}</td>
                            <td className="border-gray">{user.month}</td>
                            <td className="border-gray">{user.year}</td>
                            <td className="border-gray">{user.day}</td>
                            <td className="border-gray">{user.projection}</td>
                            <td className="border-gray">
                                <div className="d-flex">
                                    <button
                                        className="form-control w-auto mr-2"
                                        onClick={() => {
                                            props.editRow(user)
                                        }}
                                        data-toggle="modal" data-target="#exampleModal"
                                    >
                                        <i className="fa fa-pencil mr-1" aria-hidden="true"/>Editar
                                    </button>
                                    <button
                                        onClick={() => props.deleteUser(user.id)}
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

export default UserTable;