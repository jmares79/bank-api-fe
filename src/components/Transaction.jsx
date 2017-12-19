import React from 'react'

const Transaction = (props) => {
    return (
        <li className="list-group-item justify-content-between">
           {props.transaction.amount}
            <span className="badge badge-default badge-pill">{props.transaction.created_at}</span>
        </li>
    );
};

export default Transaction;
