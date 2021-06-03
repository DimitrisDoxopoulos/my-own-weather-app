import './App.css';

/*--------------- Importing Components ------------------- */
import Header from './components/Header'
import Tagline from './components/Tagline'
import Form from './components/Form'
/*--------------- Importing Components ------------------- */

function App() {
  return (
    <div className="App">
      <Header />
      <Tagline />
      <Form />
    </div>
  );
}

export default App;
