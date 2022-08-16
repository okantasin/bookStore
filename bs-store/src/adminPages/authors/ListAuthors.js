import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Button, ButtonGroup, Fab, Avatar } from '@mui/material'
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
    }, []);

    return (
        <>
            <SimpleFab url="/admin/authors/add" />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Surname</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {authors.map((author) => {
                            const { id, authorName, authorSurname, email, authorDescription } = author;
                            return (

                                <TableRow key={id}>
                                    <TableCell align='left'>
                                        <Avatar src={`/authors/${author.id % 20}.jpg`}></Avatar>
                                    </TableCell>
                                    <TableCell>{authorName}</TableCell>
                                    <TableCell>{authorSurname}</TableCell>
                                    <TableCell>{email}</TableCell>
                                    <TableCell>{authorDescription}</TableCell>
                                    <TableCell>


                                        <ButtonGroup orientation='vertical'>
                                            <Button variant="contained" color="primary" onClick={() => handleEdit(id)}>Edit</Button>
                                            <Button variant="contained" color="secondary" onClick={() => handleDelete(id)}>Delete</Button>
                                        </ButtonGroup>

                                    </TableCell>


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
