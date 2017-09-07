import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

// NOTE: This component is not used! It was not able to redirect correctly with my auth flow
// because it would mount and redirect before the state was updated to say that a user was logged in
// Ended up just using a ternary on the base route "/", and having the API block requests from other pages
// TODO: repurpose this HOC to do something like trello: if a user is logged in, it shows the data on a route
// if not, the page should say you arent logged in and give you a link to log in

export default function (RenderedComponent) {
  class AuthenticationCheck extends React.Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentDidMount() {
      if (!this.props.auth.isLoggedIn) {
        console.log(this.props.auth)
        console.log("Will redirect to /")
        // this.props.history.push('/')
      }
    }

    componentWillReceiveProps(nextProps){
      console.log('hi')
    }

    render() {
      console.log(this.props.auth)
      return (
        <RenderedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }
  // return AuthenticationCheck
  return connect(mapStateToProps)(AuthenticationCheck)
}
