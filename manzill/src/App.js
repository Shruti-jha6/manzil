import Pic1 from './comp/Pic1';
import Pic2 from './comp/Pic2';
import Pic3 from './comp/Pic3';
import Text from './comp/Textbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Foot from './comp/Footer';

function App() {
  return (
    <div className="App">
      <Pic1/>
      <Text/>
      <Pic2/>
      <Pic3/>
      <Foot/>
    </div>
  );
}

export default App;
