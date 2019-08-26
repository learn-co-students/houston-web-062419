console.log("Are we here?")
{/* <div class="ui inverted red menu">
      <a class='item'>
        <h2 class="ui header">
          <i class="bug icon"></i>
          <div class="content">
            bugger
          </div>
        </h2>
      </a>
    </div> */}

// const Navbar = (props) => {
//     return React.createElement("div", {className:`ui inverted ${props.color} menu` }, 
//     React.createElement("a", {className: "item"}, 
//     React.createElement("h2",{className: "ui header"}, 
//     [
//         React.createElement("i",{className:`${props.icon} icon`}, null),
//         React.createElement("div", {className:"content" }, props.text)

//     ])))
// }

const Navbar = (props) => {
    return(<div className={`ui inverted ${props.color} menu`}>
    <a className='item' id="abc" >
      <h2 className="ui header">
        <i className={`${props.icon} icon`}></i>
        <div className="content">
          {props.text}
        </div>
      </h2>
    </a>
  </div>)
}

const Text = () => {
   return React.createElement("h1",{},"062419")
}

const App = () => {
    return (
        <div>
            <Navbar color="green" icon="paw" text="REACT Learning"/>
            <Text/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('container')
)

