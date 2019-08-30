import React, {Component} from 'react'
import HogDetail from './HogDetail'

export default class HogCard extends Component{

    state={
        display: false
    }

    handleClick = () => {
        this.setState({
            display: !this.state.display
        })
    }


    render(){
        let imgSrc = this.props.hog.name.replace(/\s+/g,"_").toLowerCase()
        return(<div>
            <h3>{this.props.hog.name}</h3>
            <img src={require(`../hog-imgs/${imgSrc}.jpg`)} onClick={this.handleClick} />

            {this.state.display
            ? <HogDetail hog={this.props.hog}  handleHogs={this.props.handleHogs}/> 
            : null
            }

        </div>)
    }
} 