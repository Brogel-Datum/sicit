import React, { useState, useEffect } from 'react';

import UserTable from '../../components/userTable/UserTable';
import AddUser from '../../components/addUser/AddUser';
import EditUser from '../../components/editUser/EditUser';

export default function Maintenance() {

    // Data
    const usersData = [
        { id: 1, name: 'Impuesto 1', month: 'Febrero', year: '2020', day: '15', projection: 'L5644.50' },
        { id: 2, name: 'Impuesto 2', month: 'Marzo', year: '2019', day: '15', projection: 'L65.14' },
        { id: 3, name: 'Impuesto 3', month: 'Abril', year: '2018', day: '15', projection: 'L5454.54' },
    ]

    const initialFormState = { id: null, name: '', month: '', year: '', day: '', projection: '' }
    // Setting state
    const [users, setUsers] = useState(usersData)
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const [editing, setEditing] = useState(false)

    // CRUD operations
    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setEditing(false)
        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = user => {
        setEditing(true)
        setCurrentUser({
            id: user.id,
            name: user.name,
            month: user.month,
            year: user.year,
            day: user.day,
            projection: user.projection
        })
    }

    return (
        <>
            <div className="container">
                <section className='stats text-center mt-5'>
                    <h2 className="title">Panel de reportes del sicit</h2>
                    <h4 className="sub-title">Mantenimiento</h4>
                </section>
                <div className="d-grid">
                    <div className="ml-auto">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalAdd">
                            Agregar
                        </button>
                    </div>
                    <div className="flex-large text-center mt-5">
                        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
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
                                <EditUser
                                    editing={editing}
                                    setEditing={setEditing}
                                    currentUser={currentUser}
                                    updateUser={updateUser}
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
                                <AddUser addUser={addUser} />
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