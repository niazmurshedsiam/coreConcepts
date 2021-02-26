import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const nayoks = ['Anwar','Jafor','Alomgir','salman'];

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <Person name="Munna" job="Football"></Person>
        <Person name="Masum" job="Cricket"></Person>
      </header>
      
    </div>
  );
}
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(() =>{
     fetch(`https://jsonplaceholder.typicode.com/users`)
     .then(res => res.json())
     .then(data => setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      
       <ul>
         {
               users.map(user => <li>{user.name} {user.email} {user.phone}</li>)
              
         }
        
       </ul>
      
    </div>
  )
}
function Counter(){
  const [count,setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count -1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
     
    </div>
  )
}
function Person(props){
  const {name,job} = props;
  console.log(name,job);
  return(
    <div>
      <h3>My Name : {name}</h3>
      <p>My Profession : {job}</p>
    </div>
  )
}


export default App;
