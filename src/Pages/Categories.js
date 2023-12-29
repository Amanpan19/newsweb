import React from 'react'
import News from '../Component/News/News'

const Categories = (props) => {
  return (
    <div>
      <News type={props.type}/>
    </div>
  )
}

export default Categories
