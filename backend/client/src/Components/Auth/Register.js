import React, { useState } from 'react';
import NavBar from '../Layouts/NavBar';
import Socail from '../Layouts/Socail';
import { useDispatch } from "react-redux"
import { registerUser } from '../../JS/Actions/authActions';
import { useHistory } from 'react-router-dom'
import { Alert } from 'reactstrap';


export default function Register() {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [adresse, setAdresse] = useState('');
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [confirm, setConfirm] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory();

    const toggle = () => {
        setEmail('');
        setFirstName('');
        setLastName('');
        setAdresse('');
        setTel('');
        setPassword('');
        setPassword2('')
    }

    const handleSave = () => {
        const newUser = {
            email,
            firstName,
            lastName,
            adresse,
            tel,
            password
        };
        if (!email || !firstName || !lastName || (!password || (password !== password2))) {
            return alert("champ vide")
        }
        else {
            dispatch(registerUser(newUser));
            toggle();
            history.push('/login');
        }

    }

    return (
        <div>
            <NavBar />
            <Socail />
            <div className='login register'>
                <form className='formlogin' onSubmit={handleSave}>
                    <h2>Sign In</h2>
                    <div className='inputgroup-row'>

                        <input aria-required type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='forminput' spacing={1} placeholder='Prénom' />
                        <input aria-required type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='forminput' spacing={1} placeholder='Nom' />
                    </div>
                    <div className='inputgroup'>
                        <img src='./pics/icones/mail.png' width='32px' height='32px ' />
                        <input aria-required type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='forminput' spacing={1} placeholder='Adresse Email' />
                    </div>
                    <div className='inputgroup'>
                        <img src='./pics/icones/lock.png' width='32px' height='32px ' />
                        <input aria-required type="password" value={password} onChange={e => setPassword(e.target.value)} className='forminput' spacing={1} placeholder='Password' />
                    </div>
                    <div className='inputgroup'>
                        <img src='./pics/icones/lock.png' width='32px' height='32px ' />
                        <input aria-required type="password" value={password2} onChange={e => setPassword2(e.target.value)} className='forminput' spacing={1} placeholder='Confirm Password' />
                    </div>
                    <div className='checkinput'>
                        <div>
                            <input type='checkbox' className='check' checked={confirm} onChange={e => setConfirm(!confirm)} label='Remember me' /><p>I Agree with <span>privecy</span>  and <span>policy</span></p></div>
                    </div>
                    {(confirm) ? <button >Sign Up</button> : <button disabled >Sign Up</button>}

                    <div className='loginfooter'>
                        <p>Already have an Account ? <a href='/login'>Sign In</a></p>
                    </div>
                </form>

            </div>
        </div>
    );
}