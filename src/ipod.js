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
       
        console.log(this)
        myRegion.bind(touchArea, 'rotate', function(e){
           console.log(e.detail)

        //   console.log(e.detail.distanceFromLast)
        });
    }
    render(){
        const {Options,selected}=this.state;
        console.log(Options);
        return (
            <React.Fragment>
                <div className="Prop flexR ">
                <div className="wheelBox flexC listBord">
                    <h5>Live Pod</h5>
                   <div className="applist">
                        <div>
                            <div className="list-content">
                                {Options.map((item)=>{
                                    return <List 
                                        name={item.name}
                                        selected={Options.indexOf(item)===selected}
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