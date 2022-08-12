import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
export default function AddBook() {
  const categoryDispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div>
         <Box 
    sx={{ m: 3 }}>
      <Stack spacing={3} >
        <TextField
          name='categoryName'
          label='Category Name'
          onChange={handleChange}
        ></TextField>

        <TextField
          name='description'
          label='Description'
          onChange={handleChange}
        ></TextField>

        <Button color="primary" onClick={handleClick} variant='contained'>
          Add
        </Button>
      </Stack>
    </Box>
      
    </div>
  )
}

