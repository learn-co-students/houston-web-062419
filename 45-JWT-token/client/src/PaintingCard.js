import React, {Component} from 'react'

class PaintingCard extends Component{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         votes: props.votes
    //     }
    // }

    // // state = {
    // //     votes: this.props.votes
    // // }

    // addVote = () => {
    //     this.setState({
    //         votes: this.state.votes + 1 
    //     })
    // }




    render(){
        let displayPainting

        if(this.props.painting){
            displayPainting = this.props.painting
        }else{
            displayPainting = this.props.paintings.find(p => p.id == this.props.match.params.id)
        }

       
        return(<div>
                <h2>{displayPainting.title}</h2>
                <img src={displayPainting.image} />
                <p>Artist Name: {displayPainting.artist.name}</p>
                {/* <span>Votes: {this.state.votes}</span> */}
                <div className="ui labeled button" tabIndex="0">
                    <button className="ui red button">
                        <i className="heart icon"></i>
                        Like
                    </button>
                    <a className="ui basic red left pointing label">
                        {displayPainting.votes}
                    </a>
                </div>
                </div>
        )
    }

}

export default PaintingCard