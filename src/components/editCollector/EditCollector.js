import React, { useState, useEffect } from 'react';
import $ from "jquery";

const EditCollector = (props) => {
    const [collector, setCollector] = useState(props.currentCollector)

    useEffect(
        () => {
            setCollector(props.currentCollector)
        },
        [props]
    )
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    const handleInputChange = event => {
        const { name, value } = event.target

        setCollector({ ...collector, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                props.updateCollector(collector.id, collector)
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
            <button className="form-control w-auto mx-auto my-3">Actualizar</button>
            <button className="form-control w-auto mx-auto my-3" onClick={() => props.setEditing(false)}>
                Cancelar
            </button>
        </form>
    )
}

export default EditCollector