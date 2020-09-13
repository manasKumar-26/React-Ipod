import React from 'react';
class list extends React.Component{
    render(){
        return(
            <div className="Prop flexR ">
                <div className="wheelBox flexC listBord">
                    <h5>Live Pod</h5>
                   <div className="applist">
                        <div>
                            <div className="list-content">
                                <a data-number="1"> Home<span><img alt=" open menu" src="https://www.flaticon.com/svg/static/icons/svg/43/43478.svg"  className="icon"/></span> </a>
                                <a> ITunes <span><img alt=" open menu" src="https://www.flaticon.com/svg/static/icons/svg/43/43478.svg"  className="icon"/></span> </a>
                                <a> Apps <span><img alt=" open menu" src="https://www.flaticon.com/svg/static/icons/svg/43/43478.svg"  className="icon"/></span> </a>
                                <a> Games <span><img alt=" open menu" src="https://www.flaticon.com/svg/static/icons/svg/43/43478.svg"  className="icon"/></span> </a>
                                <a> Settings<span><img alt=" open menu" src="https://www.flaticon.com/svg/static/icons/svg/43/43478.svg"  className="icon"/></span>  </a>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        );
    }
}
export default list;