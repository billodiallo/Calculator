import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
    render() {
        return (
            <div className="buton-list">
                <div className="btn-group">
                    {' '}
                    <Button number="AC" color="btn-dark btn" />
                    <Button number="+/-" color="btn-dark btn" />
                    <Button number="%" color="btn-dark btn" />
                    <Button number="÷" color="btn-yellow btn" />  
                </div>
            </div>

        );
    }
}