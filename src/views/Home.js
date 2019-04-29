import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        console.log(this.props)
        return <div>Home</div>
    }
}

function mapStateToProps({ user, users }) {
    return {
        user,
        users,
    }
}

export default connect(mapStateToProps)(Home)
