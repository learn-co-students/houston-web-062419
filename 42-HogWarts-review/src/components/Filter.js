import React, {Component} from 'react'

export default class Filter extends Component{
    render(){
        return(<div>
            <button onClick={this.props.filterHogs}>Filter Greased</button>
            <button onClick={this.props.sortHogsNames}>Sort by Name</button>
            <button onClick={this.props.sortHogsWeight}>Sort by Weight</button>
            <button onClick={this.props.showAll}>Show All</button>



        </div>)
    }
} 