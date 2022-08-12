import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { useContext ,useEffect} from 'react';
import AppContext from '../../context/AppContext';
import AuthorService from '../../services/AuthorService';


export default function ListAuthors() {
  const {authors,setAuthors}= React.useContext(AppContext);
  const{setIsLoading}= React.useContext(AppContext);
  const authorService = new AuthorService();



  const removeAuthor = (authorId) => {
    setIsLoading(true);
    authorService.getALL(authorId)
  }
    return (
      <div>
        {authors.map((author, index) => {
          const { id,firstName,lastName} = author;
          return (
            <p key={index}>
             {`${id} ${author.firstName} ${author.lastName}`} 
             <button onClick={() => removeAuthor(id)}>Delete</button>
            </p>
          )})}
      </div>
    )
  }
  