import React from 'react';
import Wheel from './wheelUI';
import List from './list';
import ZingTouch from 'zingtouch';
//This is the song menu 
class Songs extends React.Component {
    constructor() {
        super();
        this.state = {
            options: [
                {
                    name: 'Songs'
                },
                {
                    name: 'Current Fav'
                },
                {
                    name: 'Fav'
                }
            ],
            selected: 0,
            selectedState: false,
            play: false
        };
        this.url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; //define a audio url
        this.audio = new Audio(this.url); //create new audio
    }
    //rotate function using zing for our song 
    rotateEvent = () => {
        const touchArea = document.getElementById("Wrotate");
        const myRegion = new ZingTouch.Region(touchArea);
        let angleChanged = 0;
        myRegion.bind(touchArea, "rotate", (e) => {
            angleChanged = angleChanged + e.detail.distanceFromLast;
            let selected = this.state.selected
            if (angleChanged > 15) {
                if (selected === 2) this.setState({ selected: 0 }, () => { angleChanged = 0 });
                else this.setState({ selected: selected + 1 }, () => { angleChanged = 0 });
            } else if (angleChanged < -15) {
                if (selected === 0) this.setState({ selected: 2 }, () => { angleChanged = 0 });
                else this.setState({ selected: selected - 1 }, () => { angleChanged = 0 });
            }
        });
    }
    //same as ipod to handle all our ipod wheel click 
    //function
    handleOkClick = () => {
        this.setState({
            selectedState: true
        });

    }
    handlePlayClick = () => {
        //we will check if play from our state is true or false
        //and accordingly we will either play or pause
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : this.audio.pause();
        });
    }
    //to stop our song player
    playStop = () => {
        this.audio.pause()
    }
    //if home is clicked while palying so first we need to stop it then go back
    handleHomeClick = () => {
        this.playStop()
        this.props.handleHomeClick()
    }
    render() {
        const { options, selected } = this.state
        console.log(this)
        return (
            <div>
                <div className="Prop flexR ">
                    <div className="wheelBox flexC listBord">
                        <h5>Live Pod</h5>
                        <div className="applist">
                            <div>
                                <div className="list-content">
                                    {/* If we have not selected the selectedstate it will show some menu like all songs fav from our state else it will show our player */}
                                    {!this.state.selectedState && options.map((item, index) => {
                                        return <List
                                            name={item.name}
                                            selected={index === selected}
                                            key={`setting-${index}`}
                                        />
                                    })}
                                    {this.state.selectedState &&
                                        <div>
                                            <div className="flex-r">
                                                <div className="flex-c">
                                                    <img src="https://static1.squarespace.com/static/56454c01e4b0177ad4141742/56f3eeaa6e06f2df013dd6cd/56f3ef166e06f2df013de90c/1458827030375/Covers-Vol.-1-Cover.jpg?format=original" alt="coverpic" id="coverpic" />
                                                    <h5>Taylor Swift </h5>
                                                </div>
                                                <div className="flex-c">
                                                    some random texts
                                                    and information about
                                                    song and artist and release
                                                    date
                                            </div>
                                            </div>
                                            <hr />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Wheel ZingClick={this.rotateEvent} handleOkClick={this.handleOkClick} handlePlayClick={this.handlePlayClick} handleHomeClick={this.handleHomeClick} />
            </div>
        );
    }
}
export default Songs;
// handleOkClick={this.handleOkClick} handleHomeClick={this.handleHomeClick} Store={this}