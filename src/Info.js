import React, { Component } from 'react'
import { loadDataRequest }  from './actions'
import { connect } from 'react-redux'

class Info extends Component {
    render() {
        return(
            <>
            <p>Info {this.props.data} </p>
            { !this.props.isFetching && <button onClick={() => this.props.loadData()}>Load Data</button> }
            { this.props.isFetching && <span>Loading....</span>}
            </>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadDataRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)

