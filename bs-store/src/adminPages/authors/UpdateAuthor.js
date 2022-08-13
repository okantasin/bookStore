import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { getOneAuthor } from '../../store/actions/authorAction';
import { putOneAuthor } from '../../store/actions/authorAction';
import { setMessage, showSnackbar } from '../../store/actions/settingActions';
import { TextField, Box, Stack, Button } from '@mui/material';

export default function UpdateAuthor() {
    const authorDispatch = useDispatch();
    const navigate = useNavigate();
    const { message } = useSelector((state) => state.setting);
    const { author } = useSelector((state) => state.author);
    const { id } = useParams();
    const [form, setForm] = useState({
        authorName: "",
        authorSurname: "",
        email: "",
        authorDescription: "",
    });
    useEffect(() => {
        authorDispatch(getOneAuthor(id));
        setForm({
            authorName: author.authorName,
            authorSurname: author.authorSurname,
            email: author.email,
            authorDescription: author.authorDescription,
        });
    }, [])
    const handleClick = () => {
        authorDispatch(putOneAuthor(id, form));
        authorDispatch(showSnackbar({ message: "Author updated", severity: "success", duration: 6000 }));
        navigate("/admin/authors/list");
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }
    return (

        <Box sx={{ m: 3 }} maxWidth={"md"}>
            <Stack spacing={3}>
                <TextField
                    name='authorName'
                    label='Author Name'
                    onChange={handleChange}
                    value={form.authorName}
                ></TextField>

                <TextField
                    name='authorSurname'
                    label='Author surname'
                    value={form.authorSurname}
                    onChange={handleChange}
                ></TextField>

                <TextField
                    name='email'
                    label='Author email'
                    value={form.email}
                    onChange={handleChange}
                ></TextField>


                <TextField
                    name='authorDescription'
                    label='Author description'
                    value={form.authorDescription}
                    onChange={handleChange}
                ></TextField>


                <Button onClick={handleClick} variant='contained'>
                    Save
                </Button>
            </Stack>
        </Box>
    )
}
