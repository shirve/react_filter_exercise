import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getList, getQuery } from '../redux/people/selectors'

function People({ list, query }) {
  const displayPeople = (list) =>
    useMemo(() => {
      const filteredList = list.filter(({ name }) =>
        name.toLowerCase().includes(query.toLowerCase())
      )
      return filteredList.map(({ id, name }) => (
        <div key={id} className='App-box'>
          {name}
        </div>
      ))
    }, [list, query])

  return displayPeople(list)
}

const mapStateToProps = (state) => ({
  list: getList(state),
  query: getQuery(state),
})

People.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  query: PropTypes.string,
}

export default connect(mapStateToProps)(People)
