import nameImage from './images/name.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <Name/>
    </div>
  );
}

function Name() {
  return(
    <div className="Name">
      <img src={nameImage} alt=""></img>
    </div>
  )
}


export default App;
