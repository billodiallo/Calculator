// import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
return (
    <div className="container">
        <div className="main-intro">
            <div className="results-card">
           <Display/>
           </div>
           <div className="button-field">
               <ButtonPanel/>
           </div>
        </div>
    </div>
)
}

export default App;