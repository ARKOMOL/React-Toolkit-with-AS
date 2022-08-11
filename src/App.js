import logo from './logo.svg';
import './App.css';
import CounterView from './Features/Counter/CounterView';

function App() {
  return (
    <div style={{"height":"100rem"}} className="App">
    <h1>  
      Counter App By Redux Toolkit
    </h1>
<CounterView/>

    </div>
  );
}

export default App;
