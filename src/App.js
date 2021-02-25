import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name:'Karim',
    age : 23
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>My Name {person.name} {person.age}</h1>
        <h1>My Age {person.age}</h1>
        <p>My first React Paragraph</p>
        <Person name="Sakib al Hasan"></Person>
        <Person name="Mustafizur"></Person>
        <Person name="Ruble"></Person>
        <Person name="Taskin"></Person>
       
      </header>
    </div>
  );
}
function Person(props){
  console.log(props)
  return (
  <div style={{color:'yellow',background:'gray',border:'2px solid red',margin:'5px',padding:'5px'}}>
    <h1>Name : {props.name}</h1>
    <h3>Hero of the Year</h3>
  </div>
  )

}

export default App;
