import React, { useEffect } from 'react'
import { getAllBooks } from '../../store/actions/bookActions'
import { useDispatch, useSelector } from "react-redux"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Avatar, Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import AuthorList from '../../components/authorList/AuthorList'
import {deleteOneBook} from '../../store/actions/bookActions'
import {showSnackbar} from '../../store/actions/settingActions'
import { useNavigate } from 'react-router-dom'
import SimpleFab from '../../components/fab/SimpleFab';

function ListBooks() {
  const bookDispatch = useDispatch();
  const navigate =useNavigate();
  const { books } = useSelector((state) => state.book)

  useEffect(() => {
    bookDispatch(getAllBooks())
  }, [])

  const handleEdit = (id) => {
    navigate(`/admin/books/update/${id}`)
  }

  const handleDelete = (bookId) => {
    bookDispatch(deleteOneBook(bookId));
    bookDispatch(showSnackbar({
      message: "Book deleted successfully",
      duration: 3000,
      severity: "warning",
    }));
    navigate("/admin/books/list");
  }

  return (

    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Book Id</TableCell>
              <TableCell>İmage</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Publishers</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Category Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => {
              const { bookId, title, unitPrice, publisher, category, bookAuthors } = book;
              return (
                <TableRow>
                  <TableCell>{bookId}</TableCell>
                  <TableCell>
                    <Avatar src={`/books/${bookId % 121}.jpg`}></Avatar>
                  </TableCell>
                  <TableCell>{title}</TableCell>
                  <TableCell>{unitPrice}</TableCell>
                  <TableCell>{publisher}</TableCell>
                  <TableCell align="center">
                    <AuthorList authors={bookAuthors} />
                  </TableCell>
                  <TableCell>{category.categoryName}</TableCell>
                  <TableCell>
                    <ButtonGroup orientation='vertical'>
                      <Button variant="contained" color="primary" onClick={() => handleEdit(bookId)}>Edit</Button>
                      <Button variant="contained" color="secondary" onClick={() => handleDelete(bookId)}>Delete</Button>

                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <SimpleFab url="/admin/books/add" />
      </TableContainer>
    </>
  );
}


export default ListBooks
