import React from 'react';

export default function DateHour({ dates }) {
    return (
        <div className="date-container form-group d-flex align-items- ">
            <div className="d-block">
                {dates && dates.map((data, index) => (
                    <div key={index}>
                        <label>
                            {data.date}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}


