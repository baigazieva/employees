import React, { Component } from 'react';

class Search extends Component{
    constructor(){

        super()

    } 
    
    
    render(){
    
            
        return (
            <div>
            <input className="search" value={this.props.value} onChange={this.props.getSearch} placeholder="Search"></input>
            <select className="select">
                <option>Firstname</option>
                <option>Email</option>
                <option>State</option>
                <option>City</option>
                </select>
            </div>
        )
    }
}
export default Search