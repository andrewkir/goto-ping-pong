import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './Modules/ball'
import Racket from './Modules/racket'

class Game extends Component {
  constructor(props){``
       super(props);
       this.state = {xBall:0,yBall:0,directionX:1,directionY:1,racketTop:20};
       setInterval(() => {
        this.tick()
       },1)

       document.addEventListener('keydown',(event) => {
            if(event.code === "ArrowDown"){
                if(this.state.racketTop + 100 <  window.innerHeight){
                    this.setState({racketTop:this.state.racketTop+20})
                }
            }
            if(event.code === "ArrowUp"){
                if(this.state.racketTop> 0){
                    this.setState({racketTop:this.state.racketTop-20})
                }
            }
       }, false);
  }

  tick = () => {
    if(this.state.xBall + 10 > window.innerWidth || this.state.xBall<0){
        this.setState({directionX: this.state.directionX*-1});
    }
    if(this.state.yBall + 10 > window.innerHeight || this.state.yBall<0){
        this.setState({directionY: this.state.directionY*-1});
    }

    if(this.state.xBall <= 20 && this.state.racketTop<=this.state.yBall
    && this.state.yBall<=this.state.racketTop+100){
        this.setState({directionX: this.state.directionX*-1})
    }
    this.setState({xBall: this.state.xBall+this.state.directionX,
    yBall:this.state.yBall+this.state.directionY})
  };

  render() {
    return (
        <div>
            <Ball x={this.state.xBall} y={this.state.yBall}/>
            <Racket top={this.state.racketTop}/>

        </div>
    );
  }
}

export default Game;
