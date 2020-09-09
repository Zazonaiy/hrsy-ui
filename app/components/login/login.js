import React, {Component} from 'react';
import "./login.css";
import "../layout/my-layout.css";
import $ from 'jquery';
//import { Form, FormGroup, FormControl, Col, Button, ControlLabel, Checkbox } from 'react-bootstrap';
//import {Button, Form, FormGroup, Col, FormControl, Checkbox} from 'react-bootstrap';
//const ReactDOM = require('react-dom');
import { FormControl, FormGroup, InputGroup, Button, Checkbox, Col, Form, ControlLabel, wellStyles, HelpBlock, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


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
                            <LoginInput></LoginInput>
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
            bsClass : 'inputButtonGroup',
            data : {
                loginParam : {
                    username : 'aaa',
                    password : '111',
                    errorTips : '',
                    errorHid : 'hidden'
                },
            },
            style : {
                sRow : {
                    style : {
                        marginLeft : '20px',
                        marginTop : '5%'
                    }
                    
                },
                sForm : {
                    style : {
                        marginTop: '7%',
                        marginBottom : '3%'
                    }
                },
                sButton : {
                    type:"button",
                    bsStyle:"info",
                    bsSize:"large",
                    width : '100%'
                }
            }
        }
        
    }

    doLogin(username, password){
        alert(username + " " + password);
        if (username=='' || password==''){
            //validationState="error"
            this.state.data.loginParam.errorTips = '账号或者密码为空';
            this.setState();
        }
        //this.setState();
    }
    
    render(){
        let {username, password, errorTips, errorHid} = this.state.data.loginParam;
        let {sRow, sForm, sCol, sButton} = this.state.style;
        
        return (

            <Form horizontal {...sForm}>
                <FormGroup controlId="formHorizontalEmail" style={{ marginBottom : '20px', marginTop : '20px'}}>
                    <Row {...sRow}>
                        <Col componentClass={ControlLabel} sm={1}>
                            <div style={{width:'50px', marginTop:"6px"}}>账号</div>
                        </Col>
                        <Col sm={9} smOffset={4}>
                            <ControlLabel hidden={errorHid}>{errorTips}</ControlLabel>
                            <FormControl type="text" placeholder="username" />
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Row {...sRow}>
                        <Col componentClass={ControlLabel} sm={1}>
                            <div style={{width:'50px', marginTop:"6px"}}>密码</div>
                        </Col>
                        <Col sm={9} smOffset={4}>
                            <ControlLabel hidden={errorHid} >{errorTips}</ControlLabel>
                            <FormControl type="password" placeholder="password" />
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Row {...sRow}>
                        <Col smOffset={2} sm={10}>
                            <Checkbox> 记住密码</Checkbox>
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup>
                    <Row {...sRow}>
                        <Col sm={6}> </Col>
                        <Col smOffset={2} sm={2} style={{textAlign:'right',}}>
                            <Button {...sButton} onClick={this.doLogin.bind(username, password)}>
                                登录
                            </Button>
                        </Col>
                        <Col smOffset={2} sm={2} style={{textAlign:'right',}}>
                            <Button {...sButton}>注册</Button>
                        </Col>
                        
                    </Row>
                </FormGroup>
            </Form>
            /*
            <div style={{width: '100%', height: '100%', padding: '12% 4% 1% 4%'}}>
                <div style={{display:'flex', flexDirection: 'row'}}>
                    
                    <div style={{width: '10%', height: '10px', paddingTop:'5px'}}><span>账号 </span></div>
                    <FormGroup validationState="null" controlId="username" bsClass="loginInput">
                        <Col componentClass={ControlLabel} sm={2}>
                            账号
                        </Col>
                        <ControlLabel>{errorTips}</ControlLabel>
                        <FormControl type="text" placeholder="请输入账号" value={username} />
                    </FormGroup>
                    
                </div>
                <div style={{marginTop:'5%', display:'flex', flexDirection: 'row'}}>
                    <div style={{width: '10%', paddingTop:'5px'}}><span>密码 </span></div>
                    <FormGroup bsClass="loginInput">
                        <ControlLabel>{errorTips}</ControlLabel>
                        <FormControl type="password" placeholder="请输入密码" value={password}/>
                    </FormGroup>
                    
                </div>

                <div style={{width:'100%', height:'100%', display:'flex', displayDirection:'column'}}>
                    <div style={{flex:1, marginButtom:"50px"}}>
                        <FormGroup style={{marginTop:'50px'}}>
                            <Col smOffset={2} sm={10}>
                                <Checkbox> 记住密码</Checkbox>
                            </Col>
                        </FormGroup>
                    </div>    
                    <div>
                        <FormGroup bsClass='inputButtonGroup'>
                            <Col >
                                <Button style={{marginRight:'20px'}} bsStyle="primary" onClick={this.doLogin.bind(username, password)}>登录</Button>
                                <Button bsStyle="primary">注册</Button>
                            </Col>
                        </FormGroup>
                    </div>
                </div>

            </div>
            */
            
        );
    }
}

export default class Login extends Component {
    constructor (props){
        super(props);
        this.state = {
            bgImg : "../../../public/images/bg/hrsy-gold.png"
        };
        
    }

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
                    <div style={{padding: "5% 30% 5% 30%", width: "100%", height: "600px"}} className="bgc">
                        <LoginPane>
                            
                        </LoginPane>
                    </div>
                </div>
            </div>
        );
    }
}

