import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { InvoiceServiceImplement } from '../implements/InvoiceServiceImplement';

const Invoice = () => {
    const [invoiceDate, setInvoiceDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const history = useHistory();

    const handleSave = () => {
        // Save invoice logic here using InvoiceServiceImplement
        const invoice = {
            invoiceDate,
            dueDate
        };
        InvoiceServiceImplement.saveInvoice(invoice);
        // Redirect to next page after save
        history.push('/next-page');
    };

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    My Invoice
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Approve Invoice</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">All Invoice</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Button variant="primary">+</Button>{' '}
            <br />
            <input
                type="date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
            />
            <br />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <Button onClick={handleSave}>Save</Button>
            {/* Filter options */}
            <div>
                <label>Filter by Payment</label>
                {/* Add filter by payment logic */}
            </div>
            <div>
                <label>Filter by Workflow</label>
                {/* Add filter by workflow logic */}
            </div>
        </div>
    );
};
export default Invoice;