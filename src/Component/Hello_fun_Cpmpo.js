import React, { useState } from 'react'

export default function Hello(props) {

    const [num, setNum] = useState(0);
    // let num = 0;

    const red = (arg, a) => {
        alert(`RED fun ON click, ${arg}${a}`);

    }

    let Hello = function (name) {
        return alert(`Hello ${name}`);
    }

    let Hello2 = (name) => {
        return alert(`Hello Taha ${name}`);
    }

    // ...args   (Rest OPerator)
    // sum("taha ali",20,30,10)
    // sum(20,30,10) is me phr Rest operator ki need nhn he 
    function sum_1(name, ...args) {
        let sum = 0;

        for (let i in args) {
            sum += args[i];
        }
        console.log(sum);
        console.log(name);
        console.log(args);
        console.log(typeof args);
    }

    function sum_2() {
        let sum = 0;

        for (let i in arguments) {
            sum += arguments[i];
        }
        console.log(sum);

    }
    return (
        <div>
            <h1 onClick={red}>{props.text} </h1>

            <h3 onClick={red}>{props.title.name} </h3>

            <h2>{num}</h2>

            <button onClick={() => setNum(num + 1)}> Increment</button>
            <button onClick={() => setNum(num - 1)}> Decrement</button>

            <button onClick={() => red('RONALDO', 'CR7')}>Two Argum</button>

            <button onClick={() => Hello("taha")}>Normal Function</button>

            <button onClick={() => Hello2(" Arrow Func")}>Arrow Function</button>

            <button onClick={() => sum_1("taha ali", 20, 30, 10)}>Rest Operator</button>

            <button onClick={() => sum_2(20, 30, 10)}>sum_2-function</button>





        </div >


    );
}