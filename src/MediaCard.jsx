import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './cards.css';
// import './index.css';
// import './index.css';

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 140,
//         link: "https://www.w3schools.com"
//     },
// });

export default function MediaCard(props) {
    console.log(props);
    // const classes = useStyles();

    return (

        <>
            {/* <h1 className="heading_style">This is Card List</h1> */}
            <div className="cards">
                <div className="card" >
                    <img className="card_img" src={props.imgsrc} alt="mYpic" />
                    <div className="card_info" >
                        <span className="card_catager" >{props.parag}</span>
                        <h3 className="card_title" >{props.title}</h3>
                        <a href={props.link} target="_blank">
                            <button className="button"> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>

        </>



    );
}