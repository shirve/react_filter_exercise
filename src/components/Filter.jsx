import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setQueryValue } from '../redux/people/actions'
import { getQuery } from '../redux/people/selectors'

function Filter({ query, setQuery }) {
  return (
    <div className='App-box'>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  query: getQuery(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { setQuery: (payload) => dispatch(setQueryValue(payload)) },
    dispatch
  )

Filter.propTypes = {
  query: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
