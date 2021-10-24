import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const header = ({title, onAdd, showAdd}) => {

  
    return (
      <header className='header'>
            <h1>{title}</h1>
            
            <Button color={showAdd?'crimson':'green'}
                    text={showAdd?'Close':'Add'} onClick={onAdd}/>
            {/* <Button color='red'
                    text='Namaste'/>
            <Button color='blue'
                    text='Hi'/> */}
               </header>
    )
}


// CSS in js
header.defaultProps = {
    title: 'Task Tracker',
  }
  
  header.propTypes = {
    title: PropTypes.string.isRequired,
  }

// default props

export default header

