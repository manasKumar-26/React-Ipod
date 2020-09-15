import React from 'react';
import List from './list';
import Wheel from './wheelUI';
import ZingTouch from 'zingtouch';
class Ipod extends React.Component{
    constructor(){
        super()
        this.state={
            Options:[
                {
                    name:'Home'
                },
                {
                    name:'Itunes'
                },
                {
                    name:'Apps'
                },
                {
                    name:'Games'
                },
                {
                    name:'Settings'
                }
             ],
            selected:0
        }
    }
    rotateEvent=(e)=>{
        const touchArea = document.getElementById('Wrotate');
        const myRegion = new ZingTouch.Region(touchArea);
        let initialAngle=0;
        myRegion.bind(touchArea,'rotate',(e)=>{
            initialAngle+=e.detail.distanceFromLast;
            if(initialAngle > 70 && this.state.selected !==4){
                this.setState((prevState)=>{
                    return{
                        selected:prevState.selected+1
                    }
                })
            }
            else{
                this.setState({
                    selected:0
                })
            }
            
        })
    }
    render(){
        const {Options,selected}=this.state;
        return (
            <React.Fragment>
                <div className="Prop flexR ">
                <div className="wheelBox flexC listBord">
                    <h5>Live Pod</h5>
                   <div className="applist">
                        <div>
                            <div className="list-content">
                                {Options.map((item,index)=>{
                                    return <List 
                                        name={item.name}
                                        selected={index===selected}
                                        key={`ipod-${index}`}
                                    />
                                })}
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <Wheel ZingClick={this.rotateEvent} Store={this}/>
            </React.Fragment>
        )
    }
}
export default Ipod;