import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TransactionList from '../components/TransactionList';

configure({ adapter: new Adapter() });

const transactionListMock = [
    {
        'amount': '8.45',
        'created_at': '2017-12-17'
    },
    {
        'amount': '9.45',
        'created_at': '2017-12-17'
    },
    {
        'amount': '10.45',
        'created_at': '2017-12-17'
    }
];

const transactionList = () => {
    return mount(<TransactionList transactions={transactionListMock}/>);
}

describe("Rendered `Transaction List`", () => {
    it("always renders 1 <ul>", () => {
        const ul = transactionList().find("ul");
        expect(ul.length).toEqual(1);
    });

    it("always renders N <li>", () => {
        const li = transactionList().find("li");
        expect(li.length).toEqual(transactionListMock.length);
    });
});
