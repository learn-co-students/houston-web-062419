import React, {Component} from 'react'

class Login extends Component{

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault()
    
        fetch('http://localhost:3000/api/v1/login', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        })
        .then(res => res.json())
        .then(data => {
            localStorage.token = data.token
            // localStorage.setItem("token",data.token)
        })
      }

    render(){
        return(
        <div>
             <h2>Login</h2>
            <form onSubmit={(e) => this.login(e)}>
            <label>UserName</label>
            <input onChange={this.handleChange} name="username" type="text" />
            <label>Password</label>
            <input onChange={this.handleChange} name="password" type="password" />
            <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default Login


