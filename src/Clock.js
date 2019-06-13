import React from 'react';

class Clock extends React.Component{
    // 1ère fonction qui s'exécute pour CREER le composant --> c'est celle qui le construit 
    // Constuctor = constucteur
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }

// La fonction qui affiche l'HTML sur l'écran. To Render = Afficher en anglais
    render(){
        return(
        <div>
            <h1>Heure locale</h1>
            <h2>Il est actuellement {this.state.date.toLocaleTimeString()}</h2>
        </div>
        )
    }
    // Une fois que l'affichage (render) à lieu, la fonction suivante s'exécute directement.
    // ComponentDidMount = Le composant vient de s'afficher et de se mettre en place.
    componentDidMount(){
        this.timerID = setInterval(()=>this.tictac(),1000)

    }

    // Voici une fonction qui permet de mettre à jour la date dans l'état ( this.state.date)
    //ATTENTION: qui dit mise à jour de l'état dit: setState
    tictac(){
        this.setState({
            date: new Date()
        });
    }


// Juste avant de finir le lifecycle et de quitter le composant, nous effaçons le contenu de l'intervalle de temps

    componentWillUnmount(){
        clearInterval(this.timerID);

    }
}




export default Clock;