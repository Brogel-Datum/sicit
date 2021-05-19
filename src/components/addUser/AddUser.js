import React, { useState } from 'react'
import $ from "jquery";
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as locales from 'react-date-range/dist/locale';

const AddUser = (props) => {
    const initialFormState = { id: null, name: '', month: '', year: '', day: '', projection: '' }
    const [user, setUser] = useState(initialFormState)
    const [startDate, setStartDate] = useState(new Date());

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    function handleSelect(date) {
        console.log('date', date); // native Date object
        setStartDate(date);
        setUser({ ...user, year: date.getDate(), month: date.getDate() })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.name || !user.year || !user.day || !user.projection) return
                props.addUser(user)
                setUser(initialFormState)
                $('.close').click();
            }}
        >
            <label className="my-1">Impuestos: </label>
            <div className="col-12">
                <input type="text" className="form-control w-auto m-auto" name="name" value={user.name} onChange={handleInputChange} />
            </div>
            <label className="my-1">Selección de fechas</label>
            <div className="col-12">
                <Calendar
                    date={startDate}
                    onChange={handleSelect}
                    locale={locales['es']}
                    name="year" 
                />
            </div>
            <label className="mr-1">Día Atípico:</label>
            <div className="col-12">
                <input type="text" className="form-control w-auto m-auto" name="day" value={user.day} onChange={handleInputChange} />
            </div>
            <label className="my-1">Proyección: </label>
            <div className="col-12">
                <input type="text" className="form-control w-auto m-auto" name="projection" value={user.projection} onChange={handleInputChange} />
            </div>
            <button className="form-control w-auto ml-auto mt-2">Agregar</button>
        </form>
    )
}

export default AddUser;