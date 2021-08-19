import React, {Component} from 'react'
class Webservicetwo extends Component{
    constructor(props){
        super(props);
    }

    mySecondButton=()=>{
        alert("Second Button Called");
    }

    render(){
        return(
            <button onClick={this.mySecondButton}>
                My Second Button            
            </button>

        );
    }
}

export default Webservicetwo;