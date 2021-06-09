import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
          buttonGroups: [
            { buttons: ['AC', '-', '%', '/'] },
            { buttons: ['7', '8', '9', 'X'] },
            { buttons: ['4', '5', '6', '-'] },
            { buttons: ['1', '2', '3', '+'] },
            { buttons: ['0', '.', '='] },
          ],
        };
      }
}

export default ButtonPanel;