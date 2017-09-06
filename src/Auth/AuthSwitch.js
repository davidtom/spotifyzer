import React from "react";
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {fetchUser} from "../actions/userActions"

class AuthSwitch extends React.Component{

  componentWillMount(){
    const response = window.location.href.split("?")[1]
    const type = response.split("=")[0]
    const value = response.split("=")[1]
    if (type === "code"){
      this.props.fetchUser(value, this.props.history.push("/dashboard"))
      // fetch(`http://localhost:3000/api/v1/login_callback?code=${value}`)
      // .then(resp => resp.json())
      // .then(json => console.log(json))
      // .then(this.props.history.push("/dashboard"))
    } else {
      // Eventually just push back to /, but with an alert (from store)
      this.props.history.push("/login/failure")
    }
  }

  render(){
    return (<p>You shouldnt see this!</p>)
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchUser
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(AuthSwitch)
