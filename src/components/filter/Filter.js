import React, { useState } from 'react';
import style from 'styled-components';
import $ from 'jquery';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as locales from 'react-date-range/dist/locale';

import DateHour from '../../components/dateHour/DateHour';

export default function Filter({ changeData, dates }) {
    function resizeInput() {
        $(this).attr('size', $(this).val().length);
    }

    const [startDate, setStartDate] = useState(new Date());

    const [endDate, setEndDate] = useState(new Date());

    $('input[type="text"]')
        .keyup(resizeInput)
        .each(resizeInput);

    function handleSelect(ranges) {
        // console.log(ranges);
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        // console.log('%cFilter.js line:27 ranges.startDate', 'color: #007acc;', ranges.selection.startDate);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
    }

    const selectionRange = {
        startDate,
        endDate,
        key: 'selection',
    }

    return (
        <Style>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-5 my-1">
                        <div className="filter-container form-group d-flex align-items-center">
                            <label htmlFor="exampleFormControlSelect1">Filtro:</label>
                            <select className="form-control" id="exampleFormControlSelect1" onChange={changeData}>
                                <option key="1" value="diaria">Diaria</option>
                                <option key="2" value="perzonalizado">Personalizado</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-2 d-flex align-items-left mt-1">
                        {dates && dates.length > 1 &&
                            <i className="fa fa-calendar-check-o color-icon" aria-hidden="true" data-toggle="modal" data-target="#modalDate" />
                        }
                    </div>
                    <div className="col-12 col-sm-5 d-flex justify-content-sm-end my-2">
                        <DateHour dates={dates} />
                    </div>
                </div>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="modalDate" tabIndex="-1" role="dialog" aria-labelledby="modalDateLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h4>Selección de fechas</h4>
                            <div className="w-100 col-12">
                                <DateRangePicker
                                    ranges={[selectionRange]}
                                    onChange={handleSelect}
                                    locale={locales['es']}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary m-auto" data-dismiss="modal">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    );
}

const Style = style.div`
.rdrDefinedRangesWrapper{
    display: none !important;
}
.filter-container {
    max-width: 200px;
}
.date-container {
    max-width: 300px;
}
.modal-content {
    background-color: var(--body-gray) !important;
}
h4 {
    color: var(--black);
}
label {
    color: var(--black);
    text-align: start;
    margin: 0 10px 0 0;
    font-family: var(--poppins);
}
.form-control{
    border: none;
}
input {
    display: block;
    width: auto;
}
.color-icon {
    color: var(--black);
    font-size: 30px;
}
.color-icon:hover {
    cursor: pointer;
}
`