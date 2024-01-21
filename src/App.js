import './App.css';
import Navbar from './components/Navbar';
import Orders from './components/Orders';
import SideBar from './components/SideBar';

function App() {
  return (
      <div className="App">
          <div className="nav_div">
              <Navbar />
          </div>
          <div className="body">
              <SideBar />
              <Orders/>
          </div>
    </div>
  );
}

export default App;
