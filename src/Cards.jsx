
import React from 'react'
import MediaCard from './MediaCard';
import Sdata from './Sdata';
import './cards.css';



export default function Cards() {

    return (
        <div>
            <MediaCard
                imgsrc={Sdata[0].imgsrc}
                title={Sdata[0].title}
                link={Sdata[0].link}
                parag={Sdata[0].parag}
            />
            <br />
            <MediaCard
                imgsrc={Sdata[1].imgsrc}
                title={Sdata[1].title}
                link={Sdata[1].link}
                parag={Sdata[1].parag}
            />
            <br />
            <MediaCard
                imgsrc={Sdata[2].imgsrc}
                title={Sdata[2].title}
                link={Sdata[2].link}
                parag={Sdata[2].parag}
            />



        </div>
    );



}

