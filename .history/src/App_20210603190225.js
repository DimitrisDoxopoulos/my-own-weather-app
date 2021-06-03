import './App.css';

/*--------------- Importing Components ------------------- */
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Tagline from './components/Tagline'
import Form from './components/Form'
import WeatherForecast from './components/WeatherForecast';
/*--------------- Importing Components ------------------- */

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Tagline />
        <Form />
        <WeatherForecast />
      </Wrapper>
    </div>
  );
}

export default App;
