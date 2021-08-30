import React from 'react';
import '../cards.css';

export default function Goodmorning() {

    // let CurrentDate = new Date(2021, 8, 26, 7);
    let CurrentDate = new Date();
    CurrentDate = CurrentDate.getHours();
    let greeting = "";
    const cssStyle = {}

    if (CurrentDate >= 1 && CurrentDate < 12) {
        greeting = "Good Morning";
        cssStyle.color = "green";
        console.log(greeting);
    } else if (CurrentDate >= 12 && CurrentDate < 19) {
        greeting = "Good Afternoon";
        cssStyle.color = "orange";
        console.log(greeting);
    } else {
        greeting = "Good Night";
        cssStyle.color = "blue";
        console.log(greeting);
    }


    return (

        <div className="heading_style" >
            <h1>Hello Taha, <span style={cssStyle}> {greeting}</span>  current time is {CurrentDate}</h1>
        </div>
    );
}
