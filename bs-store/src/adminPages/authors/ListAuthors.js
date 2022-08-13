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
import { setMessage, showSnackbar } from '../../store/actions/settingActions'
import { deleteOneAuthor } from '../../store/actions/authorAction';
import { getAllAuthors } from '../../store/actions/authorAction';
import SimpleFab from '../../components/fab/SimpleFab';


export default function ListAuthors() {
    const navigate = useNavigate()
    const { authors } = useSelector((state) => state.author)
    const authorDispatch = useDispatch()

    const handleEdit = (id) => {
        navigate(`/admin/authors/update/${id}`)

    }
    const handleDelete = (id) => {
        authorDispatch(deleteOneAuthor(id));
        authorDispatch(showSnackbar({ message: "Author deleted", severity: "warning", duration: 6000 }));
        navigate("/admin/authors/list");

    }

    useEffect(() => {
        authorDispatch(getAllAuthors());
    } , []);

    return (
        <>
            <SimpleFab url="/admin/authors/add" />
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
