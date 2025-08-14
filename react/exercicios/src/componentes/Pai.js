import React from 'react';

export default function Pai(props) {
    return (
        <div>
            <h2>Pai: {props.nome} {props.sobrenome}</h2>
            {props.children}
        </div>
    );
}