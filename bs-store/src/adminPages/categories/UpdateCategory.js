import React from 'react'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Box, Stack, TextField } from "@mui/material";
import { useNavigate,useParams } from "react-router-dom";
import { getCategoryById, updateCategory } from "../../store/actions/categoryActions";
import { setMessage } from '../../store/actions/settingActions';
export default function UpdateCategory() {
    const categoryDispatch = useDispatch();
    const navigate = useNavigate();
    const { message } = useSelector((state) => state.setting);
    const { category } = useSelector((state) => state.category);
    const { id } = useParams();

    const [form, setForm] = useState({
        categoryName: "",
        categoryDescription: "",
    });
    useEffect(() => {
        categoryDispatch(getCategoryById(id));
        setForm({
            categoryName: category.categoryName,
            categoryDescription: category.categoryDescription,
        });
    } , []);


    const handleClick = () => {
        categoryDispatch(updateCategory(id,form));
        categoryDispatch(setMessage("Category updated successfully"));
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
                    name='categoryDescription'
                    label='Category Description'
                    value={form.categoryDescription}
                    onChange={handleChange}
                ></TextField>

                <Button onClick={handleClick} variant='contained'>
                    Save
                </Button>
            </Stack>
        </Box>

    )
}
