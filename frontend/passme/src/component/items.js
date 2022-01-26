import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { conf } from '../config'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const flex = {display:'flex', justifyContent:'center', alignItems:'center'}

const Item = ({img, appName, id}) => {
    
    const onMouseLeave = (e, id) => {
        if (e.target.nodeName === 'DIV') {
            e.target.style.border = '1px solid #f1f1f1'
        }
        const p = document.getElementById(`text-${id}`)
        p.style.color = '#7d7d7d'
        
    }
    
    const onMouseOver = (e, id) => {
        if (e.target.nodeName === 'DIV') {
            e.target.style.border = '1.8px solid #0af'
        }
        const p = document.getElementById(`text-${id}`)
        p.style.color = '#000'
    }
    
    const itemBarStyle = {
        height:'20px', padding:'10px', backgroundColor:"#fff",display:'flex', justifyContent:'start', alignItems:'center',
        borderRadius:'10px', width:'160px', cursor:'pointer', userSelect:'none'
    } 
    
    return (
        <div style={{height:'70px'}}>
            <div onMouseOver={(e, id) => onMouseOver(e, id)} onMouseLeave={onMouseLeave} style={itemBarStyle}>
                <img src={img} />
                <p id={`text-${id}`} style={{fontWeight:'bold', color:'#7d7d7d'}}>{appName}</p>
            </div>
            <div>
                
            </div>
        </div>
    )
}


const ItemDetails = ({password, email, appName, img}) => {
    const [edit, setEdit] = useState(false)
    const onClick = () => {}
    const onChange = () => {}
    const btnStyle = {
        position:'relative', left:'80%', border:'2px solid #00ff11', borderRadius:'2px',
        width:'60px', height:'30px',
        cursor:'pointer', backgroundColor:'#d8ffdba8', color:'#2fe900', fontWeight:'bold'
    }
    let res;
    useEffect(() => {
        res = axios.get(`${conf.url}/datail`)
    },[])
    return (
        <div style={{position:'absolute', top:'50%', bottom:'50%', transform:'translate(50%, -40%)', height:'500px'}}>
            <div style={{padding:'20px', borderRadius:'0px 0px 10px 10px', backgroundColor:'#fff', width:'300px'}}>
                <div style={{borderBottom:'2px solid #f1f1f1', height:'20px'}}>
                    <div>
                        <img src={img}/>
                        <p>{appName}</p>
                    </div>
                    <div style={{display:'flex'}}>
                        <EditIcon/>
                        <DeleteIcon/>
                    </div>
                </div>
                {
                edit ? 
                <>
                    <input name="email" onChange={onChange} type="text"/>
                    <input name="password" onChange={onChange} type="text"/>
                </>
                :
                <>
                    <div>
                        <p>Email :</p>
                        <p>{email}</p>
                    </div>
                    <div>
                        <p>Password :</p>
                        <p>{password}</p>
                    </div>
                </>
                }
                <button style={btnStyle} onClick={onClick}>Save</button>
            </div>
        </div>
    )
}



const Search = () => {
    const style = {
        border:'1px solid #f1f1f1', height:'25px', width:'160px', borderRadius:'0px 5px 5px 0px', ...flex,
    }
    const onChange = (e) => {
        const res = axios.post(conf.url, {data: {keyword: e.target.value}}, conf.headers)
    }
    return (
        <div style={{...flex, marginBottom: '30px'}}>
            <div style={{backgroundColor:'#fff', height:'25px', ...flex}}>S</div>
            <input onChange={onChange} style={style} type="text" />
        </div>
    )
}


export const Home = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    useEffect(() =>{
        if (token == null || token === 'null' ){
            navigate('/login')
        }   
    },[token])
    const items = axios.get(conf.url, conf.headers)
    return (
        <div style={flex}>
            <div style={{position:'absolute', left:'5%', top:'5%', height:'30px'}}>
                <Search />
                <Item icon={"#"} appName={"Facebook"} />
                <Item icon={"#"} appName={"LinkedIn"} />
                <Item icon={"#"} appName={"Email 1"} />
                <Item icon={"#"} appName={"github"} />
                <Item icon={"#"} appName={"github"} />
                <Item icon={"#"} appName={"github"} />
                {items?.data?.map(item => {
                    <Item icon={item.icon} appName={item.app} />
                })}
            </div>
            <div name="detail" style={flex}>
                <ItemDetails />
            </div>
        </div>
    )
}