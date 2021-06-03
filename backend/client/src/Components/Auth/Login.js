import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../../JS/Actions/authActions';
import { useHistory } from 'react-router-dom';
//Style
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../Layouts/NavBar';
import Socail from '../Layouts/Socail';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function Login() {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = () => {
        const formData = {
            email, password
        }
        dispatch(loginUser(formData));
        history.push('/');
        setEmail("")
        setPassword("");
    }
    const state = useSelector(state => state.state)
    return (
        <div>
            <NavBar />
            <Socail />
            <div className='login'>
                <form className='formlogin' onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                    <div className='inputgroup'>
                        <img src='./pics/icones/mail.png' width='32px' height='32px ' />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='forminput' spacing={1} placeholder='Adresse Email' />
                    </div>
                    <div className='inputgroup'>
                        <img src='./pics/icones/lock.png' width='32px' height='32px ' />
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className='forminput' spacing={1} placeholder='Password' />
                    </div>
                    <div className='checkinput'>
                        <div>
                            <input type='checkbox' className='check' label='Remember me' />Remember me</div>
                        <a href='/'>Forget Password</a>
                    </div>
                    <button >login</button>
                    <div className='loginfooter'>
                        <p>Don't have an Account? <a href='/register'>SignUp</a></p>
                    </div>
                </form>

            </div>
        </div>
    );
}