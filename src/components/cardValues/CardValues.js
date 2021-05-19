import React, { useState } from 'react';
import styled from 'styled-components';

export default function CardValues(props) {
    const [dataState] = useState(props);
    return (
        <Style>
            {dataState.dataValue &&
                <div className={`box inf text-center`}>
                    <i className={'fa fa-money'}></i>
                    <h3>{dataState.dataValue.totalRecaudacionCorta}</h3>
                    <h4>{dataState.dataValue.totalRecaudacionCompleta}</h4>
                    <p className="lead">{dataState.dataValue.nombreRecaudador}</p>
                </div>
            }
        </Style>
    );
}

const Style = styled.div`
.warning {background-color: var(--green)}
.danger {background-color: var(--red)}
.success {background-color: var(--green)}
.inf {background-color: var(--blue)}
.total {background-color: var(--orange)}

.lead, h3, h4 {
    color: var(--white);
    font-family: var(--poppins);
}
h4 {
    font-size: 1.2rem;
}
.box {
    position: relative;
    padding: 3vw 2px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 25px;
}
.box h4:after {
    content: "";
    height: 2px;
    width: 70%;
    margin: auto;
    background-color: var(--shadow);
    display: block;
    margin-top: 10px;
}
.box i {
    position: absolute;
    height: 70px;
    width: 70px;
    font-size: 22px;
    padding: 15px;
    top: -25px;
    left: -18px;
    background-color: var(--shadow);
    line-height: 60px;
    text-align: right;
    border-radius: 20%;
}
.fa {
    color: var(--white)
} 
`;