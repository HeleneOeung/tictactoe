import React from 'react';
import Voiture from './Voiture';


class Garage extends React.Component{

    // Attributs




    //Methods
render(){
    const def="grise"; 
    const voit = {color:"grise", brand:"Peugeot", owner:"None", id:"WWWWWWW"};
    // On ouvre les parenthèses pour injecter de l'html via l'annotation JSX - JavaScript XML ET on exécute la logique du code dans les {} 
    return (

        //C'est ici que l'on définit le contenu HTML affichable à l'appel de la balise <Garage /> dans l'index.js
        <div>
            <h1>
                Quelles sont les voitures que j'ai dans mon garage?</h1>
                <Voiture color='verte' brand="Mustang" owner="Sylvain" id="NZY12M"/> <br/>
                <Voiture color='rouge' brand="Mercedes" owner="Jean" id="MLO32M"/> <br/>
                <Voiture color='bleue' brand="Ford" owner="Dalila" id="POLO2M"/> <br/>
                <Voiture color='jaune' brand="Citroen" owner="Lucile" id="AZER32"/> <br/>
                <Voiture color={voit.color}  brand={voit.brand} owner={voit.owner} id={voit.id}/> 
        </div>


    );
}



}


export default Garage;