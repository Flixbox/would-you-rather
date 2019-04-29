import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        console.log(this.props)
        return <div>Home</div>
    }
}

function mapStateToProps({ user }) {
    return {
        user,
    }
}

export default connect(mapStateToProps)(Home)
