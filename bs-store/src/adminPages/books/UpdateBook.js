import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function UpdateBook() {
    const bookDispatch = useDispatch();
    const{book}=useSelector((state)=>state.book);

  return (
    <div>
      
    </div>
  )
}
