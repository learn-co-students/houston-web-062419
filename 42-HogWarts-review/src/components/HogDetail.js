import React, {Component} from 'react'

export default class HogDetail extends Component{
    render(){
        return(<div>
            <h4>Weight:{this.props.hog.weight}</h4>
            <h4>Specialty: {this.props.hog.specialty}</h4>
            <h4>Medal: {this.props.hog["highest medal achieved"]}</h4>
            <h4>
                {this.props.hog.greased
                ? "Greased"
                : "Not Greased"
                }
            </h4>
            <button onClick={() => this.props.handleHogs(this.props.hog)}>Hide the Hog</button>

        </div>)
    }
} 