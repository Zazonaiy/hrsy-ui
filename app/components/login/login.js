import React, {Component} from 'react';
import "./login.css";
import "../layout/my-layout.css";
import $ from 'jquery';
import 'react-bootstrap';
//import { Form, FormGroup, FormControl, Col, Button, ControlLabel, Checkbox } from 'react-bootstrap';
import {Button, Form, FormGroup, Col, FormControl, Checkbox, ControlLabel, componentClass} from 'react-bootstrap';
//const ReactDOM = require('react-dom');


class LoginPane extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    formInstance(){
        const forminstancec = (
            <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              邮件
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>
      
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              密码
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>
      
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>记住我</Checkbox>
            </Col>
          </FormGroup>
      
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                登录
              </Button>
            </Col>
          </FormGroup>
        </Form>
        )
        return forminstancec
    }

    loginPane(){
        const loginpane = (
            <div style={{background: "rgba(255, 255, 255, 0.3)", width: "100%", height: "100%", padding: "3% 3% 3% 3%"}}>
                <div style={{background: "white", width: "100%", height: "100%"}}>
                    <div style={{background: "rgba(255,255,255)", height: "100%", width: "100%", boxShadow: "0 0 5px 5px rgba(0, 0, 0, 0.4)",
                        boxSizing: "border-box", border: "3px solid"}}>
                            
                    </div>
                </div>
            </div>
        )
        return loginpane;
    }

    render(){
        return (this.formInstance(), this.loginPane())
        /*
        return (
            <div style={{background: "rgba(255, 255, 255, 0.3)", width: "100%", height: "100%", padding: "3% 3% 3% 3%"}}>
                <div style={{background: "white", width: "100%", height: "100%"}}>
                    <div style={{background: "rgba(255,255,255)", height: "100%", width: "100%", boxShadow: "0 0 5px 5px rgba(0, 0, 0, 0.4)",
                        boxSizing: "border-box", border: "3px solid"}}>
                            <Button>test</Button>
                    </div>
                </div>
            </div>
        )*/
    }
}
//ReactDOM.render()

class LoginInput extends Component {
    constructor (props){
        super(props);
        this.state = {

        }
    }

    render(){
        let loginForm = (
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>账号</Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="username" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>密码</Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                    <   Checkbox>记住密码</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">登录</Button>
                    </Col>
                </FormGroup>
            </Form>)

        
        return (
            <div>{loginForm}</div>
        )
    }
}

export default class Login extends Component {
    constructor (props){
        super(props);
        this.state = {
            bgImg : "../../../public/images/bg/hrsy-gold.png"
        };
        
        //this.clickTest = this.clickTest.bind(this);
    }

    /*
    clickTest(param) {
        return (event)=>{
            alert("click!");
            this.state.text = "is changed !";
            this.setState(this.state);
        }
    }
    */

    render(){
        let {text, bgImg} = this.state;
        console.log(React);

        return (
            <div>
                <div style={{width: "100%", height: "400px"}} className="bgc">
                    <div style={{width: "100%", height: "475px"}} className="flex-row">
                        <div style={{flex:"1", height: "100%", padding: "0% 18% 0% 18%"}}>
                            <img src={bgImg} width={"100%"} height={"100%"} />
                        </div>
                    </div>
                </div>
                <div style={{width: "100%", height: "600px"}} className="bgc flex-row">
                    <div style={{padding: "5% 30% 5% 30%", width: "100%", height: "400px"}} className="bgc">
                        <LoginPane></LoginPane>
                    </div>
                </div>
            </div>
        );
    }
}

