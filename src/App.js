// import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Hello_fun_Cpmpo from './Component/Hello_fun_Cpmpo';
import Hello_class_Cpmpo from './Component/Hello_class_Cpmpo';
import State from './Component/State';
import TodoForm from './Component/TodoForm ';
import NumberList from './Component/NumberList';
import Info from './Component/Info/Info';
import Users from './Component/Info/Users ';

import axios from 'axios';
import Webserviceone from './Component/Webserviceone';
import Webservicetwo from './Component/Webservicetwo';


const number_data = [
  [1, "taha", 3, "waqas", 5],
  [2, "taha", 3, "waqas", 5],
  [3, "taha", 3, "waqas", 5]
];

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

const data = ["pakistan", 1947, "taha"];

function App() {

  const [country, year, name] = data;
  return (
    <div className="App">
      <header className="App-header">

        <div className="App">

          {data[1]}
          <br />
          {/* <State setTodos={{ text: "hello" }} /> */}
          {/* <State setFruit /> */}
          <br />
          {/* <State setTodos /> */}
          <br />
          {/* <NumberList numbers={number_data} /> */}
          <br />
          <NumberList postss={posts} />
          <br />
          <hr />


          Hello React


          {/* <TodoForm saveTodo={console.warn} /> */}

          {/* <Hello_fun_Cpmpo title={{ name: "taha Obj" }} text="React Functional Component" /> */}


          {/* <Hello_class_Cpmpo title={{ name: "taha Object" }} text="React Class Component" /> */}

          {/* <Webserviceone /> */}
          <br />
          {/* <Webservicetwo /> */}

          {/* <div style={{ margin: '40px' }} > */}
          <h1 style={{ color: 'green' }}> Geeks For Geeks </h1>


          <p> Mapping Data to component in React js. </p>


          {Users.map((e) => {
            return (
              <Info name={e.name} rollNo={e.rollNo} />
            );
          })}
          {/* <Info name={Users[0].name} rollNo={Users[0].rollNo} />
            <Info name={Users[1].name} rollNo={Users[1].rollNo} />
            <Info name={Users[2].name} rollNo={Users[2].rollNo} />
            <Info name={Users[3].name} rollNo={Users[3].rollNo} />
            <Info name={Users[4].name} rollNo={Users[4].rollNo} />
            <Info name={Users[5].name} rollNo={Users[5].rollNo} />
            <Info name={Users[6].name} rollNo={Users[6].rollNo} /> */}
          {/* </div> */}


        </div>
      </header>
    </div>
  );
}





// class App extends React.Component {
//   constructor(props) {

//     super(props);

//     this.state = {
//       // error: null,
//       // isLoaded: false,
//       // items: [],

//       flag: 0

//     };
//   }

//   static getDerivedStateFormProps() {

//   }


//   MySecondButton = () => {
//     alert('Second button Called');
//   }


//   render() {

//     return (


//       <div>

//         <h1>
//           Asalam o alikum {this.state.flag}
//         </h1>

//         <Webserviceone name='taha Ali' />

//         <Webservicetwo />

//         <button onClick={this.MyFirstButton}>
//           My Third Button
//         </button>

//       </div>
//     );

//   }


//   componentDidMount() {
//     console.log("console Checking");

//     this.setState({ flag: 9 })
//   }


// }


export default App;
