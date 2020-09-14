import React from 'react';
const Wheel=(props)=>{ 
        // console.log(props)
        return (
            <div className="Prop flexR">
                <div className="wheelBox flexR wheelBord">
                    <div className="wheelRotate flexR" id="Wrotate" onMouseEnter={()=>props.ZingClick()}>
                        <div style={styles.leftmargin}><img alt="Next" src="https://www.flaticon.com/svg/static/icons/svg/1250/1250947.svg" className="icon"/></div>
                        <div style={styles.right}><img alt="Previous" src="https://www.flaticon.com/svg/static/icons/svg/39/39712.svg" className="icon"/></div>
                        <div style={styles.bottom}><img alt="PlayPause" src="https://www.flaticon.com/svg/static/icons/svg/64/64595.svg" className="icon" /></div>
                        <div style={styles.top}><img alt="Home" src="https://www.flaticon.com/svg/static/icons/svg/69/69962.svg" className="icon" /></div>
                        <div className="wheelok"></div>
                    </div>
                </div>
            </div>
        );
    
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