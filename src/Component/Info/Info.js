import React from 'react';

function Info(props) {
    return (
        <div style={{
            border: '1px solid black',
            margin: '1px', width: '20%'
        }}>
            <p> {props.name} </p>
            <p> {props.rollNo}</p>
            <hr />
        </div>
    )
}
export default Info;