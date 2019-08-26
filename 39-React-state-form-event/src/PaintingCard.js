import React, {Component} from 'react'

class PaintingCard extends Component{
    render(){
        debugger
        console.log(this.props)
        return(<div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image} />
                <p>Artist Name: {this.props.artist.name}</p>
                </div>
        )
    }

}

// function PaintingCard(props){
//     console.log(props)
//     return(<div>
//         <h2>{props.title}</h2>
//         <img src={props.image} />
//         <p>Artist Name: {props.artist.name}</p>
//     </div>)
// }

export default PaintingCard