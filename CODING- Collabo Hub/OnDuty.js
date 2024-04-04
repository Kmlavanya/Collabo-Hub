import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { ondutyServiceImplement } from '../implements/ondutyServiceImplement';
const onduty = () => {
    const [type, setType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const history = useHistory();

    const handleSave = () => {
        // Save onduty logic here using ondutyServiceImplement
        const onduty = {
            type,
            startDate,
            endDate
        };
        ondutyServiceImplement.saveOnduty(onduty);
        // Redirect to next page after save
        history.push('/apply-onduty');
    };

    return (
        <div>
            <h1>onduty Flowchart Presentation</h1>
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
            <Button onClick={handleSave}>Apply onduty</Button>
        </div>
    );
};

export default onduty;