import React from 'react';
import Wheel from './wheelUI';
import Songs from './Songs'
import Ipod from './ipod'
//it helps to render this meny according to what we select 
//we use selected value and accordingly render a menu
//if selected is 3 then songs 
//if selected is 0 the  home 
class MenuOptions extends React.Component {
    render() {
        if (this.props.selected === 1) {
            return (
                <div>
                    <div className="Prop flexR ">
                        <div className="wheelBox flexC listBord">
                            <h5>Live Pod</h5>
                            <div className="applist">
                                <div>
                                    <div className="list-content">
                                        <div className="flex-c">
                                            <h1> Games</h1>
                                            <img src="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Games" id="coverpic" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Wheel ZingClick={this.props.ZingClick} handleHomeClick={this.props.handleHomeClick} />
                </div>
            );
        }
        else if (this.props.selected === 0) {
            return (
                <Ipod />
            )
        }
        else if (this.props.selected === 3) {
            return (
                <Songs handleHomeClick={this.props.handleHomeClick} />
            )
        }
        else {
            return (
                <div>
                    <div className="Prop flexR ">
                        <div className="wheelBox flexC listBord">
                            <h5>Live Pod</h5>
                            <div className="applist">
                                <div>
                                    <div className="list-content">
                                        <div className="flex-c">
                                            <img src="https://i.ytimg.com/vi/yp6yTkcvtT0/maxresdefault.jpg" alt="Games" style={{
                                                height: 160,
                                                width: 215,
                                                marginLeft: -7
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Wheel ZingClick={this.props.ZingClick} handleHomeClick={this.props.handleHomeClick} />
                </div>
            )
        }
    }
}
export default MenuOptions;