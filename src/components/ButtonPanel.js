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
                    {' '}  
                </div>
            
            <div className = "btn-group">
                <Button number="7" color="btn-white btn" />
               <Button number="8" color="btn-white btn" />
               <Button number="9" color="btn-white btn" />
               <Button number="X" color="btn-yellow btn" />
            </div>

            <div className = "btn-group">
                  <Button number="4" color="btn-white btn" />
                 <Button number="5" color="btn-white btn" />
                <Button number="6" color="btn-white btn" />
                <Button number="-" color="btn-yellow btn" />
            </div>
            <div className="btn-group">
                <Button number="1" color="btn-white btn" />
                <Button number="2" color="btn-white btn" />
                <Button number="3" color="btn-white btn" />
                <Button number="+" color="btn-yellow btn" />
                </div>
                
            <div className="last-group">
                <Button number="0" color=" zero-btn btn-last-color" />
                <Button number="." color=" last-btn btn-last-color" />
                <Button number="=" color=" last-btn btn-yellow " />
                </div>
           </div>


        );
    }
}