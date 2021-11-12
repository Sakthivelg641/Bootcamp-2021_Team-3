import './App.css';
import Start from './components/view/Start';
import { Route,Routes } from 'react-router-dom';
import Resume from './components/view/Resume';
import Personaldetails from './components/view/Personaldetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Start />} />
        <Route exact path='/resume' element={<Resume />} />
        <Route exact path='/personaldetails' element={<Personaldetails />} />
        
      </Routes>
    </div>
  );
};

export default App;
