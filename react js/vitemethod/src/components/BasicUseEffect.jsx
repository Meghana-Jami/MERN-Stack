import React, { useEffect } from 'react'

const BasicUseEffect = () => {
    useEffect(()=>{
        console.log("hello useEffect")
    })
  return (
    <div>check console to see the change</div>
  )
}

export default BasicUseEffect