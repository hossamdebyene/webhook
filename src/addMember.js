import React, {useState} from 'react';
import './Signup.css';
import {Button,Form,Col} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import {useDispatch} from 'react-redux';
import {createMember} from './actions/members';


function AddMem (props){
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');
    
    const dispatch = useDispatch();


    const onSubmit = (e) => {
        e.preventDefault();
        if (!first && !last && !username && !email && !value && !date && !country && !city && !password && !confPass ){
            alert('Please fill up the Add Member form to proceed');
        }
        else if (!first || !username || !email || !value || !password || !date || !confPass ||!country || !city ){
            alert('Please complete the Add Member form to proceed');
        }
        else if (!last || !first || !email || !value || !password || !date || !confPass ||!country || !city ){
            alert('Please complete the Add Member form to proceed');
        }
        else if (!last || !username || !first || !value || !password || !date || !confPass ||!country || !city ){
            alert('Please complete the Add Member form to proceed');
        }
        else if (!last || !username || !email || !first || !password || !date || !confPass ||!country || !city ){
            alert('Please complete the Add Member form to proceed');
        }
        else if (!last || !username || !email || !value || !first || !date || !confPass ||!country || !city ){
            alert('Please complete the Add Member form to proceed');
        }
        else if (!last || !username || !email || !value || !password || !first || !confPass ||!country || !city ){
            alert('Please complete the Add Member form to proceed');
        }
        else if (!last || !username || !email || !value || !password || !date || !first ||!country || !city ){
            alert('Please complete the Add Member form to proceed');
        }
        else if (!last || !username || !email || !value || !password || !date || !confPass || !first || !city ){
            alert('Please complete the Add Member form to proceed');
        }
        else if (!last || !username || !email || !value || !password || !date || !confPass ||!country || !first ){
            alert('Please complete the Add Member form to proceed');
        }
        else{
            SignUp(first, last, username, email, value, password, confPass, date, country, city);
        }
    }
    
    const SignUp = (frst, lst, usr, emil, fone, pass, conpass, dat, countr, cit, remem ) => {
        // eslint-disable-next-line no-useless-escape
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(emil)){
            //debugger
            const member = {Username:username,Password:password,Email:email,Firstname:first,Lastname:last,Phone:value, country,city,age:date};
            if(pass === conpass){
                dispatch(createMember(member));
                setFirst('');
                setLast('');
                setUsername('');
                setEmail('');
                setValue('');
                setPassword('');
                setConfPass('');
                setDate('');
                setCountry('');
                setCity('');
            }
            else {
                setPassword('');
                setConfPass('');
                alert('Please Enter a matching password');
            }
        
        }
    }

    return(
        <div className='divi0'>
            <h1 className='head0'>Sign Up!!</h1>
            <Form className='Form1' onSubmit={onSubmit} >
                <Form.Group className='Form3'>
                    <Form.Row>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="Text" placeholder="First Name" id='First'
                            value={first} onChange={(e) => setFirst(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="Text" placeholder="Last Name" id='Last'
                            value={last} onChange={(e) => setLast(e.target.value)}/>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group controlId="Username" className='Form2'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter your desired username" id='user'
                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="Age" className='Form2'>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="Date" id='date1'
                    value={date} onChange={(e) => setDate(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="Email" className='Form2'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" id='email'
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="Password" className='Form2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" id='pasword'
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="Confirmpass" className='Form2'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" id='confirm'
                    value={confPass} onChange={(e) => setConfPass(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="Country" className='Form2'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Specify your country" id='country'
                    value={country} onChange={(e) => setCountry(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="City" className='Form2'>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Choose your city" id='city'
                    value={city} onChange={(e) => setCity(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="Phone" className='Form2'>
                    <Form.Label>Phone Number</Form.Label>
                    <PhoneInput
                        className= "phoneNumber"
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}/>
                </Form.Group>
                <Button variant="primary" type="submit" className='butn0' size='lg'>
                    Add Member 
                </Button>
            </Form>     
        </div>
    );
}
export default withRouter(AddMem);