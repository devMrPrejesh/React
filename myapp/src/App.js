import logo from './logo.svg';
import './App.css';
import G20,{Firstone} from './Components/first'
import F from './Components/firstclass'
import { Anotherclass } from './Components/firstclass';

function App() {
  return (
    <div className="App">
      <Firstone name="kinship" />
      <G20 />
      <F />
      <Anotherclass />
    </div>
  );
}

export default App;
