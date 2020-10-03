import React from 'react';
//Helps to render the menu options and checks if selected or not and accordingly we style it
//selected is passed as props
const list = (props) => {
    if (props.selected) {
        return (
            <a href="/" style={{ background: '#b1bbbb' }}>{props.name}<span><img alt=" open menu" src="https://www.flaticon.com/svg/static/icons/svg/43/43478.svg" className="icon" /></span> </a>
        );
    }
    else {
        return (
            <a href="/"> {props.name} </a>
        );
    }



}
export default list;