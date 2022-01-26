import axios from 'axios'
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

export const Login = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (token !== null && token !== 'null'){
            navigate("/")
            console.log(token)
        }

    }, [token])
    const [password, setPassword] = useState()
    const { dispatch} = useContext(AuthContext)
    const onClick = async () => {
        const res = await axios.post("http://127.0.0.1:8000/api/auth", {'pwd':password})
        if (res.data.success){
            document.getElementsByName('password').value = ""
            localStorage.setItem('token', res.data.token)
            dispatch('login')
            navigate('/');
        }
    }
    const onChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <h1 style={{color:'#0af'}}>Welcome To PassMe</h1>
            <div>
                <input 
                    style={{width:'70%', height:'30px', fontSize:'1.2rem'}}
                    onChange={onChange}
                    name="password" 
                    type="password" 
                    />
                <button 
                    onClick={onClick}
                    className="bg-green bg-focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                    style={{width:'25%', height:'36px', fontSize:'1.2rem'}}
                >Login</button>
            </div>
        </div>
    )
} 