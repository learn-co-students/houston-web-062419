import React, {Component} from 'react'

class PaintingCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            votes: props.votes
        }
    }

    // state = {
    //     votes: this.props.votes
    // }

    addVote = () => {
        this.setState({
            votes: this.state.votes + 1 
        })
    }


    render(){
        return(<div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image} />
                <p>Artist Name: {this.props.artist.name}</p>
                {/* <span>Votes: {this.state.votes}</span> */}
                <div className="ui labeled button" tabIndex="0">
                    <button className="ui red button" onClick={this.addVote}>
                        <i className="heart icon"></i>
                        Like
                    </button>
                    <a className="ui basic red left pointing label">
                        {this.state.votes}
                    </a>
                </div>
                </div>
        )
    }

}

export default PaintingCard