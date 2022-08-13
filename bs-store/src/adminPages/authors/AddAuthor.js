import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { Button, Stack } from "@mui/material";
import { setMessage } from '../../store/actions/settingActions';
import { useSelector } from 'react-redux'
import {postOneAuthor} from '../../store/actions/authorAction'


export default function AddAuthor() {
  const navigate = useNavigate();
  const authorDispatch = useDispatch();
  const { message } = useSelector((state) => state.setting);
  const [form, setForm] = useState({
    authorName: "",
    authorSurname: "",
    email: "",
    authorDescription: "",
  });

  const handleClick = () => {
    authorDispatch(postOneAuthor(form));
    authorDispatch(setMessage("Author added successfully"));
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
    <>
    <Stack
      sx={{ m: 3 }}>
      <Stack spacing={3} >
        <TextField
          color='primary'
          name='authorName'
          label='Author Name'
          placeholder='firstname'
          onChange={handleChange}
        ></TextField>

        <TextField
          name='auhorSurname'
          label='Author Surname'
          placeholder='lastname'
          onChange={handleChange}
        ></TextField>

        <TextField
          name='email'
          label='Email'
          placeholder='email'
          onChange={handleChange}
        ></TextField>
        <TextField
          name='authorDescription'
          label='Author Description'
          onChange={handleChange}
        ></TextField>

        <Button color="primary" onClick={handleClick} variant='contained'>
          Add
        </Button>
      </Stack>
    </Stack>
    </>


  );
}
