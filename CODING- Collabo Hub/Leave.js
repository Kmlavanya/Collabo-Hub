import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { LeaveServiceImplement } from '../implements/LeaveServiceImplement';

const Leave = () => {
    const [type, setType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const history = useHistory();

    const handleSave = () => {
        // Save leave logic here using LeaveServiceImplement
        const leave = {
            type,
            startDate,
            endDate
        };
        LeaveServiceImplement.saveLeave(leave);
        // Redirect to next page after save
        history.push('/apply-leave');
    };

    return (
        <div>
            <h1>Leave Flowchart Presentation</h1>
            {/* Flowchart presentation content */}
            <Button variant="primary">+</Button>{' '}
            <br />
            <input
                type="text"
                placeholder="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />
            <br />
            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <br />
            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <Button onClick={handleSave}>Apply Leave</Button>
        </div>
    );
};
export default Leave;