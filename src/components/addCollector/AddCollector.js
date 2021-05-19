import React, { useState } from 'react'
import $ from "jquery";

const AddCollector = (props) => {
    const initialFormState = { id: null, nombreContacto: '', correoContacto: '', codigoContacto: '',
    puestoContacto: '', estadoContacto: '', usuario: '' }
    const [collector, setCollector] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
        setCollector({ ...collector, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!collector.nombreContacto || !collector.correoContacto || !collector.codigoContacto || !collector.puestoContacto || 
                    !collector.estadoContacto || !collector.usuario) return
                props.addCollector(collector)
                setCollector(initialFormState)
                $('.close').click();
            }}
        >
            <label className="my-1">Nombre: </label>
            <div className="col-12">
                <input type="text" className="form-control w-auto m-auto" name="nombreContacto" value={collector.nombreContacto} onChange={handleInputChange} />
            </div>
            <label className="my-1">Correo: </label>
            <div className="col-12">
                <input type="text" className="form-control w-auto m-auto" name="correoContacto" value={collector.correoContacto} onChange={handleInputChange} />
            </div>
            <label className="my-1">Código: </label>
            <div className="col-12">
                <input type="text" className="form-control w-auto m-auto" name="codigoContacto" value={collector.codigoContacto} onChange={handleInputChange} />
            </div>
                <label className="mr-1">Puesto:</label>
            <div className="col-12">
                <input type="text" className="form-control w-auto m-auto" name="puestoContacto" value={collector.puestoContacto} onChange={handleInputChange} />
            </div>
            <label className="my-1">Estado: </label>
            <div className="col-12">
                <input type="text" className="form-control w-auto m-auto" name="estadoContacto" value={collector.estadoContacto} onChange={handleInputChange} />
            </div>
            <label className="my-1">Usuario: </label>
            <div className="col-12">
                <input type="text" className="form-control w-auto m-auto" name="usuario" value={collector.usuario} onChange={handleInputChange} />
            </div>
            <button className="form-control w-auto ml-auto mt-2">Agregar</button>
        </form>
    )
}

export default AddCollector;