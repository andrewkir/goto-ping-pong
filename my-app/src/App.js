import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './Modules/ball'
import Racket from './Modules/racket'
import RacketR from './Modules/racketR'

class Game extends Component {
  constructor(props){``
       super(props);
       this.state = {
       xBall:window.innerWidth/2,
       yBall:window.innerHeight/2,
       directionX:1,
       directionY:1,
       racketTop:20,
       racketTopR:20,
       sc1:0,
       sc2:0};
       setInterval(() => {
        this.tick()
       },1)

       document.addEventListener('keydown',(event) => {

            console.log(event)
            if(event.code === "KeyS"){
                if(this.state.racketTop + 100 <  window.innerHeight){
                    this.setState(prevState => {
                        return { racketTop: prevState.racketTop + 20 }
                    })
                }
                else {
                    this.setState({racketTop:window.innerHeight-100})
                }
            }
            if(event.code === "KeyW"){
                if(this.state.racketTop> 0){
                    this.setState(prevState => {
                        return { racketTop: prevState.racketTop - 20 }
                    })
                }
            }
            if(event.code === "ArrowDown"){
                if(this.state.racketTopR + 100  <  window.innerHeight){
                    this.setState(prevState => {
                        return { racketTopR: prevState.racketTopR + 20 }
                    })
                }
                else{
                    this.setState({racketTopR:window.innerHeight-100})
                }
            }
            if(event.code === "ArrowUp"){
                if(this.state.racketTopR> 0){
                    this.setState(prevState => {
                        return { racketTopR: prevState.racketTopR - 20 }
                    })
                }
            }
       }, true);

  }

  tick = () => {

    if(this.state.xBall<0){
       this.setState({xBall:window.innerWidth/2,
       yBall:window.innerHeight/2,
       directionX:this.state.directionX*-1,
       directionY: this.state.directionY,
       sc2:this.state.sc2+1})
    }
    if(this.state.xBall + 10 > window.innerWidth){
       this.setState({xBall:window.innerWidth/2,
       yBall:window.innerHeight/2,
       directionX:this.state.directionX*-1,
       directionY: this.state.directionY,
       sc1:this.state.sc1+1})
    }
    if(this.state.yBall + 10 > window.innerHeight || this.state.yBall<0){
        this.setState({directionY: this.state.directionY*-1});
    }



    if(this.state.xBall <= 20 && this.state.racketTop<=this.state.yBall
    && this.state.yBall<=this.state.racketTop+100){
        this.setState({directionX: this.state.directionX*-1})
    }

    else if(this.state.xBall >= window.innerWidth-30 && this.state.racketTopR<=this.state.yBall
    && this.state.yBall<=this.state.racketTopR+100){
        this.setState({directionX: this.state.directionX*-1})
    }



    this.setState({xBall: this.state.xBall+this.state.directionX,
    yBall:this.state.yBall+this.state.directionY})
  };

  render() {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{this.state.sc1} : {this.state.sc2}</h1>
            <Ball x={this.state.xBall} y={this.state.yBall}/>
            <Racket top={this.state.racketTop}/>
            <RacketR top={this.state.racketTopR}/>
            <button onClick={() => {
                this.setState({
                sc1:0,
                sc2:0,
                xBall:window.innerWidth/2,
                yBall:window.innerHeight/2,
                directionY: this.state.directionX*-1,
                directionX: this.state.directionY*-1
                })
                }}  style={{display: "block", margin: "0 auto"}}>Reset</button>

        </div>
    );
  }
}

export default Game;
