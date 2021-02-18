import React from 'react';

class Cell extends React.Component {

    constructor(props) {
        // console.log("Cell", props.value)
        super(props);
        this.state = {color: props.value}
    }

    render() {
        // console.log(this.state.color)
        return (
            <div className="cell" 
            style={{backgroundColor: `${this.state.color}`}} 
            onClick={() => this.setState({color: '#333'})}>

            </div>
        )
    }
}

export default Cell 