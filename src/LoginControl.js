import React from 'react';

// Saluer un utilisateur
function UserGreeting(props){
    return <h1>Bienvenue dans ce merveilleux site</h1>
}

// Saluer un visiteur
function GuestGreeting(props){
    return <h1>Bienvenue, merci de vous inscrire dans ce merveilleux site !!</h1>
}

// Dire bonjour en fonction du tatut de la personne : visiteur OU user
function Greeting(props){
    const isLoggedIn= props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

//Bouton de connexion, qui exécutera le onClick passé en paramètre par le père
function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

// Bouton de déconnexion qui qui exécutera le onClick passé en paramètre par le père
function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn: false
        }
        // bind permet de passer "le contexte" définit dans le père au fils, pour que ce soit toujours fonctionnel. ReactJS hérite cela de JavaScript... Faire des recherches en JS pour mieux comprendre.
        this.handleLoginClick=this.handleLoginClick.bind(this);
        this.handleLogoutClick=this.handleLogoutClick.bind(this);
    }
    handleLoginClick(){
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogoutClick(){
        this.setState({
            isLoggedIn: false
        })
    }

   render(){
       const isLoggedIn= this.state.isLoggedIn;
       let button;
       if(isLoggedIn){
           button = <LogoutButton onClick={this.handleLogoutClick}/>;

       }else{
           button = <LoginButton onClick={this.handleLoginClick}/>;
       }
       return(
           <div>
               <Greeting isLoggedIn={isLoggedIn}/>
               {button}
           </div>
       );
   }
}

export default LoginControl;