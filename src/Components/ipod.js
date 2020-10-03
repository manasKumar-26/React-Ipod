import React from "react";
//Components required in the home page
import List from "./list";
import Wheel from "./wheelUI";
import ZingTouch from "zingtouch";
import MenuOption from "./MenuOption";
class Ipod extends React.Component {
  //state contains our menu option and selected which indiacates which menu is selected 
  //enter menu show whether we are at home or not
  constructor() {
    super();
    this.state = {
      Options: [
        {
          name: "Home",
        },
        {
          name: "Games",
        },
        {
          name: "Apps",
        },
        {
          name: "Itunes",
        },
        {
          name: "Settings",
        },
      ],
      selected: 0,
      enterMenu: false,
    };
  }
  //this event helps to apply gesture to our wheel 
  //when event is fired upour angle is 0 and we check if angle 
  //changed is greater than -15 or 15 from our last 
  //distance and thus accordingly change our selected state 
  rotateEvent = (e) => {
    const touchArea = document.getElementById("Wrotate");
    const myRegion = new ZingTouch.Region(touchArea);
    let angleChanged = 0;
    myRegion.bind(touchArea, "rotate", (e) => {
      angleChanged = angleChanged + e.detail.distanceFromLast;
      let selected = this.state.selected
      if (angleChanged > 15) {
        if (selected === 4) this.setState({ selected: 0 }, () => { angleChanged = 0 });
        else this.setState({ selected: selected + 1 }, () => { angleChanged = 0 });
      } else if (angleChanged < -15) {
        if (selected === 0) this.setState({ selected: 4 }, () => { angleChanged = 0 });
        else this.setState({ selected: selected - 1 }, () => { angleChanged = 0 });
      }
    });
  };
  //handles ok button of the wheel  
  handleOkClick = () => {
    this.setState({
      enterMenu: true,
    });
  };
  //handle home button of our wheel
  handleHomeClick = () => {
    this.setState({
      enterMenu: false,
      selected: 0
    });
  };
  render() {
    const { Options, selected } = this.state;
    return (
      <React.Fragment>
        {/* Check if we are at home or not if entermenu is false then home else inside out selected state */}
        {this.state.enterMenu ? (
          <MenuOption
            ZingClick={this.rotateEvent}
            handleHomeClick={this.handleHomeClick}
            selected={this.state.selected}
          />
        ) : (
            <div>
              <div className="Prop flexR ">
                <div className="wheelBox flexC listBord">
                  <h5>Live Pod</h5>
                  <div className="applist">
                    <div>
                      <div className="list-content">
                        {Options.map((item, index) => {
                          return (
                            <List
                              name={item.name}
                              selected={index === selected}
                              key={`ipod-${index}`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Wheel
                ZingClick={this.rotateEvent}
                handleOkClick={this.handleOkClick}
                handleHomeClick={this.handleHomeClick}
                Store={this}
              />
            </div>
          )}
      </React.Fragment>
    );
  }
}
export default Ipod;
