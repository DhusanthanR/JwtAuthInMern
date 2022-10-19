import { Route, Routes, Navigate} from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Main from './components/Main/Main';

function App() {

  const user = localStorage.getItem("token");
  
  return (
 
    <Routes>
      {user && <Route path='/' exact element={<Main/>}/>}
      <Route path='/signup' exact element={<Signup/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/' exact element={<Navigate replace to ="/login"/>}/>
    </Routes>
  );

}

export default App;
