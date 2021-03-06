import React from "react";
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {fetchAuthorization} from "../actions/authActions"

class AuthSwitch extends React.Component{

  componentWillMount(){
    // save url queryString and check if it contains a code or not
    // if so, send to api. If not, simply redirect to home page
    const queryString = this.props.location.search
    if (queryString.includes("code")){
      const code = queryString.split("=")[1]
      this.props.fetchAuthorization(code)
      .then(this.props.history.push("/"))
    } else {
      this.props.history.push("/")
    }
  }
  render(){
    return (
      <div></div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchAuthorization
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(AuthSwitch)
