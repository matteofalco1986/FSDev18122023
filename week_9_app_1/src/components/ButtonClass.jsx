import { Component } from 'react';

class ButtonClass extends Component {
    render(){
        return <button type='button' onClick={() => console.log(`Io sono un bottone dal nome ${this.props.name}`)}>{this.props.name}</button>
    }
}

export default ButtonClass;