import React from 'react';
import './App.css';



class Head extends React.Component {


    render() {
        return (


                 // basic html 
            
                <div className="box-head">
                    <div className="box-head-div">
                        <img className="leftimg" src={process.env.PUBLIC_URL + '/back-arrow.png'} />
                        STATIONS
                        <img className="rightimg" src={process.env.PUBLIC_URL + '/switch.png'} />
                    </div>
                </div>
            


        )
    }


}

export default Head;
