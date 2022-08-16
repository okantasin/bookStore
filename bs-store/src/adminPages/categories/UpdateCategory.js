import React from 'react'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Box, Stack, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { setMessage, showSnackbar } from '../../store/actions/settingActions';
import { getOneCategory } from '../../store/actions/categoryActions';
import { putOneCategory } from "../../store/actions/categoryActions"
export default function UpdateCategory() {
    const categoryDispatch = useDispatch();
    const navigate = useNavigate();
    const { message } = useSelector((state) => state.setting);
    const { category } = useSelector((state) => state.category);
    const {snackbar} = useSelector((state)=>state.setting)
    const { id } = useParams();

    const [form, setForm] = useState({
        categoryName: "",
        description: "",
    });
    useEffect(() => {
        categoryDispatch(getOneCategory(id));
        setForm({
            categoryName: category.categoryName,
            description: category.description,
        });
    }, []);


    const handleClick = () => {
        categoryDispatch(putOneCategory(id, form));
        categoryDispatch(showSnackbar({
            message:"Category updated successfully",
            duration:3000,
            severity:"success",
        }));
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
        <Box sx={{ m: 3 }} maxWidth={"md"}>
            <Stack spacing={3}>
                <TextField
                    name='categoryName'
                    label='Category Name'
                    onChange={handleChange}
                    value={form.categoryName}
                ></TextField>

                <TextField
                    name='description'
                    label='Description'
                    value={form.description}
                    onChange={handleChange}
                ></TextField>

                <Button onClick={handleClick} variant='contained'>
                    Save
                </Button>
            </Stack>
        </Box>

    )
}
