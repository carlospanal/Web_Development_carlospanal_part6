import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeReducer } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    props.changeReducer(event.target.value)
  }
  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter
      <input onChange={handleChange} />
    </div>
  )
}
Filter.propTypes = {
  changeReducer: PropTypes.func.isRequired,
}
const mapStateToProps = () => ({})

const mapDispatchToProps = {
  changeReducer,
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)
export default ConnectedFilter
