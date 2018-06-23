import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
}

class Game extends Component {
  constructor(props){``
       super(props);
       this.state = {xBall:0,yBall:0,directionX:1,directionY:1};
       setInterval(() => {
        this.tick()
       },1)
  }

  tick = () => {
    if(this.state.xBall + 10 > window.innerWidth || this.state.xBall<0){
        this.setState({directionX: this.state.directionX*-1});
        console.log('1')
    }
    if(this.state.yBall + 10 > window.innerHeight || this.state.yBall<0){
        this.setState({directionY: this.state.directionY*-1});
    }

    this.setState({xBall: this.state.xBall+this.state.directionX,
    yBall:this.state.yBall+this.state.directionY})
  };

  render() {
    return (
        <div>
            <Ball x={this.state.xBall} y={this.state.yBall}/>
        </div>
    );
  }
}

export default Game;
