import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Transaction from '../components/Transaction';

configure({ adapter: new Adapter() });

const transactionMock =
    {
        'amount': '8.45',
        'created_at': '2017-12-17'
    };

const transaction = () => {
    return mount(<Transaction transaction={transactionMock} />);
}

describe("Rendered `Transaction`", () => {
    it("always renders 1 <li>", () => {
        const li = transaction().find("li");
        expect(li.length).toEqual(1);
    });
});
