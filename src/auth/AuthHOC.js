import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'


export default function (RenderedComponent) {
  class AuthenticationCheck extends React.Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentDidMount() {
      if (!this.props.isLoggedIn) {
        console.log("Will redirect to /")
        // this.props.history.push('/')
      }
    }

    render() {
      return (
        <RenderedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    }
  }
  // return AuthenticationCheck
  return connect(mapStateToProps)(AuthenticationCheck)
}
