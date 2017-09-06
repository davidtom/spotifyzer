import React from "react";
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {fetchAuthorization} from "../actions/authActions"

class AuthSwitch extends React.Component{

  componentWillMount(){
    // save url queryString and check if it contains a code or not
    // if so, send to api and redirect to dashboard; if not show error
    const queryString = this.props.location.search
    if (queryString.includes("code")){
      const code = queryString.split("=")[1]
      this.props.fetchAuthorization(code)
      .then(this.props.history.push("/dashboard"))
    } else {
      // NOTE: Eventually just push back to /, but with an alert (from store)
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
