import {Item, ItemDetails} from './component/items'
import {Login} from './component/login'


function App() {
  return (
    <div className="full" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100vw'}}>
      <Login />
    </div>
  );
}

export default App;
