import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Button, ButtonGroup, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { setMessage } from '../../store/actions/settingActions'
import { deleteOneAuthor } from '../../store/actions/authorAction';
import { getAllAuthors } from '../../store/actions/authorAction';

export default function ListAuthors() {
    const navigate = useNavigate()
    const { authors } = useSelector((state) => state.author)
    const authorDispatch = useDispatch()

    const handleEdit = (id) => {
        navigate(`/admin/authors/update/${id}`)

    }
    const handleDelete = (id) => {
        authorDispatch(deleteOneAuthor(id));
        authorDispatch(setMessage("Author deleted successfully"));
        navigate("/admin/authors/list");

    }

    useEffect(() => {
        authorDispatch(getAllAuthors());
    } , []);

    return (
        <>
            <Fab
                sx={{ position: "fixed", bottom: 16, right: 16 }}
                aria-label="Add"
                onClick={() => navigate("/admin/authors/add")}
                color="secondary"
            >
                <AddIcon />
            </Fab>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>AuthorId</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Surname</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {authors.map((author) => {
                            const { authorId, authorName, authorSurname, email, authorDescription } = author;
                            return (
                                <TableRow key={authorId}>
                                    <TableCell>{authorId}</TableCell>
                                    <TableCell>{authorName}</TableCell>
                                    <TableCell>{authorSurname}</TableCell>
                                    <TableCell>{email}</TableCell>
                                    <TableCell>{authorDescription}</TableCell>

                                        <ButtonGroup>
                                            <Button variant="contained" color="primary"  onClick={() => handleEdit(authorId)}>Edit</Button>
                                            <Button variant="contained" color="secondary" onClick={() => handleDelete(authorId)}>Delete</Button>
                                        </ButtonGroup>
                                  
                                </TableRow>
                            )
                        }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
