
import './App.css';
import Endbar from './components/endbar';
import Grid1 from './components/grid1';
import Navbar from './components/navbar';



function App() {
  return (
    <>
   
        <div className="top">
        <Navbar></Navbar>
        </div>
        <div className="section">
                <div className="show1">
                           <h1>Join To Master Full Stack Development</h1><br></br><br></br><br></br><br></br>
                           <div view1>
                                   <Grid1></Grid1>
                           </div>
                </div>
                <div className = "video-container">
                           <video src="/video/video-1.mp4" autoPlay loop muted ></video>
                </div>
         </div>
         <div className="bottom">
         <Endbar ></Endbar>
         </div>
        
    </>
  );
}

export default App;
