import React from 'react';
//Wheel UI styling 
const Wheel = (props) => {
    return (
        <div className="Prop flexR">
            <div className="wheelBox flexR wheelBord">
                <div className="wheelRotate flexR" id="Wrotate" onMouseEnter={() => props.ZingClick()}>
                    <div style={styles.leftmargin}><img alt="Next" src="https://www.flaticon.com/svg/static/icons/svg/1250/1250947.svg" className="icon" /></div>
                    <div style={styles.right}><img alt="Previous" src="https://www.flaticon.com/svg/static/icons/svg/39/39712.svg" className="icon" /></div>
                    {/* if handlePlay Click function comes from props then only we can play otherwise not possible */}
                    {props.handlePlayClick ? <div style={styles.bottom}><img alt="PlayPause" src="https://www.flaticon.com/svg/static/icons/svg/64/64595.svg" className="icon" onClick={() => props.handlePlayClick()} /></div>
                        : <div style={styles.bottom}><img alt="PlayPause" src="https://www.flaticon.com/svg/static/icons/svg/64/64595.svg" className="icon" /></div>
                    }
                    <div style={styles.top}><img alt="Home" src="https://www.flaticon.com/svg/static/icons/svg/69/69962.svg" className="icon" onClick={() => props.handleHomeClick()} /></div>
                    <div className="wheelok" onClick={() => props.handleOkClick()} ></div>
                </div>
            </div>
        </div>
    );

}

export default Wheel;
//Minor styling of wheel
const styles = {
    leftmargin: {
        marginLeft: -90,
        position: 'absolute',
    },
    right: {
        marginRight: -90,
        position: 'absolute',
    },
    bottom: {
        position: 'absolute',
        marginTop: 100,
        marginLeft: 5,
    },
    top: {
        position: 'absolute',
        marginTop: -100,
        marginLeft: 5,
    }
}