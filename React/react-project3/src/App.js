
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Table from './components/table/table';
import Userform from './components/userform/userform';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        
          <Route path = "table" element={<Table></Table>}></Route>
          <Route path = "userform" element={<Userform ></Userform>}></Route>
        </Routes>
        </BrowserRouter>
    
      </header>
    </div>
  );
}

export default App;
