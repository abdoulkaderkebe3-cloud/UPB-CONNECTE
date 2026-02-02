import React from 'react'

export default function Container({child}) {
  return (
    <div className='max-w-3xl mx-auto '>
     {child}
    </div>
  )
}
