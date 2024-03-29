import Pic1 from './comp/Pic1';
import Pic2 from './comp/Pic2';
import Pic3 from './comp/Pic3';
import Text from './comp/Textbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Foot from './comp/Footer';
import Nav from './comp/Navbar';
import Login from './comp/Login';
import Signup from './comp/Signup';
import Explore from './comp/Explore';
import Legal from './comp/Legal';
import Grow from './comp/Grow';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Pic1/>
      <Text/>
      <Pic2/>
      <Pic3/>
      <Foot/>
      <Login/>
      <hr/>
      <Signup/>
      <hr/>
      <Explore/>
      <hr/>
      <Legal/>
      <hr/>
      <Grow/>
    </div>
  );
}

export default App;
