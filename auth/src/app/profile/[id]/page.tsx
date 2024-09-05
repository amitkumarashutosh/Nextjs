import React from 'react'

const page = ({params}:any) => {
  return (
    <div>
        <h1 className='text-center'>This is my profile</h1>
      <p className='text-xl text-red-600 text-center'>{params.id}</p>
    </div>
  )
}

export default page
