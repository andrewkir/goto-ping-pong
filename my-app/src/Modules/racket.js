import React,{Component} from "react";

class Racket extends Component {
    constructor(props){
        super(props)
        this.state = {
            top:props.top
        }
    }

    componentWillReceiveProps(Props){
    this.setState({
        top:Props.top
        })
    }

    render(){
        return <div style={{
            position: "absolute",
            top:`${this.state.top}px`,
            left:"10px",
            width: "10px",
            height: "100px",
            background: "blue",
        }}/>
    }
}

export default Racket