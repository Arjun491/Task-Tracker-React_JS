import React from 'react'
import PropTypes from 'prop-types'

function Button({color,text, onClick}) {


    return (
        <div>
<button onClick={onClick} className='btn' style={{backgroundColor:color}}>
    {text}

    </button>

        </div>
    )
}
Button.defaultProps ={
    color: 'streetblue',
}

Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button