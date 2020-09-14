import React from 'react';
const list=(props)=>{
        if(props.selected){
            return(
                <a href="/" style={{background:'#b1bbbb'}}>{props.name}<span><img alt=" open menu" src="https://www.flaticon.com/svg/static/icons/svg/43/43478.svg"  className="icon"/></span> </a> 
            );
        }
        else{
            return(
                <a href="/"> {props.name} <span><img alt=" open menu" src="https://www.flaticon.com/svg/static/icons/svg/43/43478.svg"  className="icon"/></span> </a> 
            );
        }
        
    
}
export default list;