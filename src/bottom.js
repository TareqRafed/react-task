import React from 'react';
import './App.css';

class Bottom extends React.Component {



    render() {
        return (


            <div className="box-bottom">

                {this.props.name !== '' &&
                    <div>
                        <p className="current">
                            CURRENTLY PLAYING</p>
                        <p className="channelname">{this.props.name}</p>

                    </div>}

             </div>


        )
    }


}

export default Bottom;
