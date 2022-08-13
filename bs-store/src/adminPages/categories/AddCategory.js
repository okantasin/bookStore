import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {postOneCategory } from '../../store/actions/categoryActions'
import { TextField } from '@mui/material';
import { Button, Box, Stack } from '@mui/material';
import { setMessage, showSnackbar } from '../../store/actions/settingActions';
import {useSelector} from 'react-redux'
import SimpleFab from '../../components/fab/SimpleFab';

export default function AddCategory() {
    const navigate = useNavigate();
    const categoryDispatch = useDispatch();
    const{message} = useSelector((state) => state.setting);
    const{snackBar} = useSelector((state)=>state.setting)
    const [form, setForm] = useState({
        categoryName: "",
        categoryDescription: "",
    });

    const handleClick = () => {
        categoryDispatch(postOneCategory(form));
        categoryDispatch(showSnackbar({ message: "Category added", severity: "success", duration: 6000 }));
        navigate("/admin/categories/list");
    }
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value

        })
        console.log(e.target.value);
    }

    return (
        <Box
            sx={{ m: 3 }}>
            <Stack spacing={3} >
                <TextField
                    name='categoryName'
                    label='Category Name'
                    onChange={handleChange}
                ></TextField>

                <TextField
                    name='categoryDescription'
                    label='Category Description'
                    onChange={handleChange}
                ></TextField>

                <Button color="primary" onClick={handleClick} variant='contained'>
                    Add
                </Button>
            </Stack>
            <SimpleFab url="/admin/categories/list" />
        </Box>
    );
}
