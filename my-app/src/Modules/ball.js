import React, { Component } from 'react';

class Ball extends Component {

    constructor(props){
        super(props);
        this.state = {left:props.x,top:props.y}
    }

    componentWillReceiveProps(nextProps){
        this.setState({
        left:nextProps.x,
        top:nextProps.y
        })
    }

    render(){
        return <div style={{
            position: "absolute",
            top:`${this.state.top}px`,
            left:`${this.state.left}px`,
            width: "10px",
            height: "10px",
            background: "red",
            borderRadius:'5px',
        }}/>
    }
} export default Ball