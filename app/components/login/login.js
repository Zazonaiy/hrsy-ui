import React, {Component} from 'react';
import "./login.css"

export default class Login extends Component {
    constructor (props){
        super(props);
        this.state = {
            text: "hello world"
        };
        //this.handleChange = this.handleChange.bind(this);
        this.clickTest = this.clickTest.bind(this);
    }
    //handleChange(event){
    //    this.setState ({
    //        text: event.target.value
    //    });
    //}
    clickTest(param) {
        return (event)=>{
            alert("click!");
            this.state.text = "is changed !";
            this.setState(this.state);
        }
    }

    render(){
        let {text} = this.state;
        console.log(React);
        return (
            <div style={{width: "100%", height: "400px"}} class="bg">
                <div style={{display: "flex", flexDirection: "row", width: "100%", height: "475px"}}>
                    <div style={{flex:"1", height: "100%", padding: "0% 18% 0% 18%"}}>
                        <img src={"../../../public/images/bg/hrsy-gold.png"} width={"100%"} height={"100%"} />
                    </div>
                </div>
            </div>

        )
    }
}