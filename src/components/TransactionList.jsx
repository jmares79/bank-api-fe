import React from 'react'

import Transaction from './Transaction'

const TransactionList = (props) => {
    if (!props.transactions) { return "Loading.."; }

    const transactions = props.transactions.map((transaction, index) => {
        return <Transaction key={index} transaction={transaction} />
    });

    return (
        <div>
            <h1> Transaction list </h1>
            <div className="bd-example">
                <ul className="list-group">
                    {transactions}
                </ul>
            </div>
        </div>
    );
}

export default TransactionList;
