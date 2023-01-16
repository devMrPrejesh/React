import logo from './logo.svg';
import './App.css';
import G20,{Firstone} from './Components/first'
import F from './Components/firstclass'
import { Anotherclass } from './Components/firstclass';
import Car from './Components/car'
import Timer from './Components/timer'
import Counter from './Components/counter';

const messages={title:'Message 1',
aman:'chu'};

function App() {
  return (
    <div className="App">
      <Firstone name="happy" />
      <G20 fame="nothing"/>
      <F />
      <Anotherclass name = {messages}/>
      <Car owner='Prejesh' model='Brezza'>
        <p>This car is in white color</p>
      </Car>
      <Car owner='Sooraj' model='Nano' />
      <Car owner='Aman' model='Khatara' />
      <Timer />
      <Counter addValue={2}/>

    </div>
  );
}

export default App;
