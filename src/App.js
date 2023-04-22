import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';

import './App.css';
import Upload from './Pages/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Verification from './Pages/Register/Verification';
import View from './View';
import ForgotPassword from './Pages/Retrive_Password/PasswordValidator';
import SendPassword from './Pages/Retrive_Password/PasswordSender';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Upload/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Verification' element={<Verification/>}/>
          <Route path='/View' element={<View/>}/>
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          <Route path="/SendPassword" element={<SendPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;