import React from "react";
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {fetchAuthorization} from "../actions/authActions"

class AuthSwitch extends React.Component{

  componentWillMount(){
    const response = window.location.href.split("?")[1]
    const type = response.split("=")[0]
    const value = response.split("=")[1]
    if (type === "code"){
      this.props.fetchAuthorization(value)
      // once store has been updated, redirect user to /dashboard
      .then(this.props.history.push("/dashboard"))
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
    fetchAuthorization
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(AuthSwitch)
