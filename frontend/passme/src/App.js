import {Item, ItemDetails, Home} from './component/items'
import {Login} from './component/login'
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom"

import { createContext, useReducer } from 'react'

export const AuthContext = createContext()
const reducer = (action) => {
  switch (action){
    case 'login':
      return true
    case 'logout':
      return false
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, false)
  return (
    <AuthContext.Provider value={{state: state, dispatch: dispatch}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;



/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100vw', backgroundColor:'#e0f2fe'}}>
    </div> */