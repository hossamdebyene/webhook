import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import './Login.css';
import {
    Button, Form
} from 'react-bootstrap';
import {useDispatch} from 'react-redux';


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const dispatch = useDispatch();
    const login = (em, pass, rem) => { 
        // eslint-disable-next-line no-useless-escape
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (re.test(em)){
        props.history.push ('/home/user')
        
    }

    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            alert('Please put ur email');
        }
        else if (!password) {
            alert('Please enter your password');
        }
        else {
            login(email, password, remember);
            setEmail('');
            setPassword('');

        }

    }

    return (
        <div className='divi1'>
            <h1 className='head1'>Enter your world</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="Email" className='Form4'>
                    <Form.Label className='txt0'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" id='email'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="Password" className='Form2'>
                    <Form.Label className='txt0'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" id='password'
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me " id='Remem'
                        value={remember} onChange={(e) => setRemember(e.currentTarget.checked)} />
                </Form.Group>
                <Button variant="primary" type="submit" className='butn1' size='lg'>
                    Login
                    </Button>
            </Form>
        </div>
    );
}
export default withRouter(Login)