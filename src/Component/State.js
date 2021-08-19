import { Button } from 'bootstrap';
import React, { useState } from 'react'




export default function State(props) {

    const [count, setCount] = useState(0);

    const [fruit, setFruit] = useState('banana');

    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    function handler_1() {

        return setCount(count + 1);

    }
    function handler_2() {

        return setCount(count - 1);

    }

    // $cars = array(
    //     array("Volvo", 22, 18),
    //     array("BMW", 15, 13),
    //     array("Saab", 5, 2),
    //     array("Land Rover", 17, 15)
    // );
    let car_array = [
        ["Volvo", 22, 18],
        ["BMW", 15, 13],
        ["Saab", 5, 2],
        ["Land Rover", 17, 15]
    ];

    for (let a = 0; a < car_array.length; a++) {

        console.log(car_array[a]);

    }


    let arry = [];

    // for (let g = 0; g < 3; g++) {
    //     arry[g] = prompt("Enter the value");
    // }

    // for (let a = 0; a < 3; a++) {
    //     console.log(arry[a])

    // }

    // let sum = 0;
    // for (let i in args) {
    //     sum += args[i];
    // }


    // function summ(name, ...args) {

    //     let sum = 0;

    //     for (let i in args) {
    //         sum += args[i];
    //     }
    //     console.log(sum)
    //     console.log(name)

    //     // return alert(`Hello  ${name} : ${sum}`);

    // }
    // return <h3>Hello, {this.props.name}: {this.props.args}</h3>;
    // let arr = [10, 20, 30];

    // let [num, setNum] = useState(0);
    return (

        <dive>
            <h2>
                {count}
                <br />
                {fruit}
                <br />
                {/* {todos = { todos }} */}

            </h2>

            <button onClick={() => handler_1()}>counter_inc</button>
            <button onClick={() => handler_2()}>counter_dec</button>
            <br />
            <button onClick={() => console.log((setCount(count + 1)))}>Increment</button>
            <button onClick={() => console.log((setCount(count - 1)))}>Increment</button>
            {/* <button onClick={() => (summ("tahaa ali", ...arr))}>SUM_func</button> */}

        </dive>
    )
}
