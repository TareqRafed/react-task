import React from 'react';
import './App.css';
import DragScrollProvider from 'drag-scroll-provider'

class Container extends React.Component {

    constructor(props) {
        super(props);
        // This binding is necessary
        this.renderElement = this.renderElement.bind(this);
      }


    renderElement(x){  // in this function is what your going to see after clicking on a channel 
        if(this.props.open === true && x === this.props.name)
           return <div className="trans">
           <img className="minus" src={process.env.PUBLIC_URL + '/minus.png'} />
           <img className="img" src={process.env.PUBLIC_URL + '/acdc.jpg'} />
           <img className="plus" src={process.env.PUBLIC_URL + '/plus.png'} />

       </div>;
        return null;
     }


    render() {      // here is all our channels 
        return (

            <DragScrollProvider vertical='true'>
                 {({ onMouseDown, ref, clickItem }) => (
            <div ref={ref}
            onMouseDown={onMouseDown} className="box-container">

                {this.renderElement('Putin FM')}

                <div className="Ch" ><span className="channel" onClick={this.props.toggel} >Putin FM</span> <span className="chN">101.2</span></div>

                {this.renderElement('Dribbble FM')}

                <div className="Ch"><span className="channel" onClick={this.props.toggel}>Dribbble FM</span> <span className="chN">99.4</span></div>

                {this.renderElement('Doge FM')}

                <div className="Ch"><span className="channel" onClick={this.props.toggel}>Doge FM</span> <span className="chN">99.4</span></div>

                {this.renderElement('Ballads FM')}
                   
                <div className="Ch"><span className="channel" onClick={this.props.toggel}>Ballads FM</span> <span className="chN">87.1</span></div>
                
                {this.renderElement('Maximum FM')}

                <div className="Ch"><span className="channel" onClick={this.props.toggel}>Maximum FM</span> <span className="chN">142.2</span></div>


            </div>
             )}
            </DragScrollProvider>
        )
    }


}

export default Container;
