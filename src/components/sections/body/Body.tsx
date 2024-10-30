import React from 'react'
import PropTypes from 'prop-types'
import './Body.css';
import Counter from '../../common/counter/Counter';

const Body = (props:any) => {
  return (
    <div className='Body'>
        <div className='section'>
            <Counter initialCount={5}/>
        </div>
    </div>
  )
}

Body.propTypes = {}

export default Body