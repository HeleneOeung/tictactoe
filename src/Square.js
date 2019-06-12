import React from 'react';

class Square extends React.Component{

    constructor(props){
        super(props);
        this.state={
            valeur:null,
        }
    }

    render(){
        return (
            <button className="square" /*onClick={function(){alert('click');}}*/ onClick={() => this.props.onClick()}>
                {this.props.valeur}
            </button>
        );
    }
}



export default Square;