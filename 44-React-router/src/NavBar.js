import React from 'react'

function NavBar(){
    return(
        <div className="ui inverted red menu">
            <a className="item" href={"/"}>
            <h2 className="ui header">
            <i className="paint brush icon" />
            <div className="content">Painting App</div>
            </h2>
            </a>
        </div>
    )
}
// export function Test(){
//     return(<div>TESTING.....</div>)
// }

export default NavBar