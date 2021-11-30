import axios from 'axios'
import { useState } from 'react'

export const Login = () => {
    const [password, setPassword] = useState()
    const onClick = async () => {
        const res = await axios.post("http://127.0.0.1:8000/api/auth", {'pwd':password})
        console.log(res)
    }
    const onChange = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }
    return (
        <div style={{display:'block'}}>
            <h1>Welcome To PassMe</h1>
            <div style={{width:'100%'}}>
                <input 
                    style={{width:'70%', height:'30px', fontSize:'1.2rem'}}
                    onChange={onChange}
                    name="password" 
                    type="password" 
                    />
                <button 
                    onClick={onClick}
                    style={{width:'25%', height:'36px', fontSize:'1.2rem'}}
                >Login</button>
            </div>
        </div>
    )
} 