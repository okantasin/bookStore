import React from 'react'
import { Link } from 'react-router-dom'

function TopLink() {
  return (
    <div>
        
        <Link to="/">Home</Link>
        <Link to="/admin/books/add">Add Book</Link>
        <Link to="/admin/authors/add">Add Author</Link>
        <Link to="/admin/categories/add">Add Category</Link>

        <Link to="/admin/books/list">List Books</Link>
        <Link to="/admin/authors/list">List Authors</Link>
        <Link to="/admin/categories/list">List Categories</Link>


      
    </div>
  )
}

export default TopLink
