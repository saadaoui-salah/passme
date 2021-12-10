import axios from 'axios'
import { useState } from 'react'


export const Login = () => {
    const [password, setPassword] = useState()
    const onClick = async () => {
        const res = await axios.post("http://127.0.0.1:8000/api/auth", {'pwd':password})
        localStorage.setItem('token', res.data.token)
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