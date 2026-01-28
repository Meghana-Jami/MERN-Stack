import React, { useRef } from 'react'
import { useState } from 'react';
const UncontrolledForm = () => {
    const inputRef = useRef();
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert('value: ${inputRef.current.value}');
    };
  return (
    <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Enter value"/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default UncontrolledForm