import React, {Component} from 'react'
import HogCard from './HogCard'

export default class HogContainer extends Component{
    render(){
        return(<div>
            {this.props.hogs.map(hog =>  {return <HogCard hog={hog} handleHogs={this.props.handleHogs}/>} )}
          
        </div>)
    }
} 