import React from 'react';
import ZingTouch from 'zingtouch';
class Wheel extends React.Component{
    rotateEvent=(e)=>{
        const touchArea = document.getElementById('Wrotate');
        const myRegion = new ZingTouch.Region(touchArea);
        myRegion.bind(touchArea, 'rotate', function(e){
            // console.log(e.detail);
            if(e.detail.distanceFromOrigin>0){
                console.log('Move Down In the List');
                e.detail.distanceFromOrigin=0;
            }
            else {
                console.log('Move up')
                e.distanceFromOrigin=0;
            }
        });
    }
    selectThisItem=()=>{
        console.log('Clicked to open')
    }
  
    render(){
        return (
            <div className="Prop flexR" onClick={this.ClickedEvent}>
                <div className="wheelBox flexR wheelBord">
                    <div className="wheelRotate flexR" id="Wrotate" onMouseEnter={this.rotateEvent}>
                        <div style={styles.leftmargin}><img alt="Next" src="https://www.flaticon.com/svg/static/icons/svg/1250/1250947.svg" className="icon"/></div>
                        <div style={styles.right}><img alt="Previous" src="https://www.flaticon.com/svg/static/icons/svg/39/39712.svg" className="icon"/></div>
                        <div style={styles.bottom}><img alt="PlayPause" src="https://www.flaticon.com/svg/static/icons/svg/64/64595.svg" className="icon" /></div>
                        <div style={styles.top}><img alt="Home" src="https://www.flaticon.com/svg/static/icons/svg/69/69962.svg" className="icon" /></div>
                        <div className="wheelok" onClick={this.selectThisItem}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wheel;
const styles={
    leftmargin:{
        marginLeft:-90,
        position: 'absolute',
    },
    right:{
        marginRight:-90,
        position: 'absolute',
    },
    bottom:{
        position:'absolute',
        marginTop:100,
        marginLeft:5,
    },
    top:{
        position:'absolute',
        marginTop:-100,
        marginLeft:5, 
    }
}