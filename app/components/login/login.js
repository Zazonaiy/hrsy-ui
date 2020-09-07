import React, {Component} from 'react';
import "./login.css";
import "../layout/my-layout.css";
import $ from 'jquery';
//import {Button, Form, FormGroup, Col, FormControl, Checkbox, ControlLabel} from 'react-bootstrap/dist/react-bootstrap.js';
//import Button from 'react-bootstrap/lib/Button';
//import Form from 'react-bootstrap/Form';
//import FormGroup from 'react-bootstrap/FormGroup';
//import Col from 'react-bootstrap/Col';
//import FormControl from 'react-bootstrap/FormControl';
//import Checkbox from 'react-bootstrap/Checkbox';
//import ControlLabel from 'react-bootstrap/Col';
//import  'react-bootstrap/dist/react-bootstrap.js';
//import 'react-bootstrap/dist/react-bootstrap.min.js'
//import '../../../node_modules/react-bootstrap'
//import Button from 'react-bootstrapButton';
import 'react-bootstrap';


class LoginPane extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        

        return (
            <div style={{background: "rgba(255, 255, 255, 0.3)", width: "100%", height: "100%", padding: "3% 3% 3% 3%"}}>
                <div style={{background: "white", width: "100%", height: "100%"}}>
                    <div style={{background: "rgba(255,255,255)", height: "100%", width: "100%", boxShadow: "0 0 5px 5px rgba(0, 0, 0, 0.4)",
                        boxSizing: "border-box", border: "3px solid"}}>
                            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>账号</Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="username" />
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
                        <Checkbox>记住密码</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">登录</Button>
                    </Col>
                </FormGroup>
            </Form>
                    </div>
                </div>
            </div>
        )
    }
}

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

