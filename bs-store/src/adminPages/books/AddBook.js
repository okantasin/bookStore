import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import AuthorService from "../../services/AuthorService";
import CategoryService from "../../services/CategoryService";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import BookService from "../../services/BookService";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postOneBook } from "../../store/actions/bookActions";
import { showSnackbar } from "../../store/actions/settingActions";
import SimpleFab from "../../components/fab/SimpleFab";
import validationSchema from "../books/AddBookValidation"

export default function AddBook() {
  const navigate = useNavigate();

  const selector = useSelector((state) => state.book);
  const bookDispatch = useDispatch();

  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  const authorService = new AuthorService();
  const categoryService = new CategoryService();
  const bookService = new BookService();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        authorIds: [],
        categoryId: "",
        title: "",
        unitPrice: 0,
        publisher: "",
      },
      onSubmit: async (values) => {
        console.log(values);
        bookDispatch(postOneBook(values));
        bookDispatch(showSnackbar({
          message: "Book has been added.",
          severity: "success"
        }));
        navigate("/admin/books/list");
      },
     validationSchema,

    });

  useEffect(() => {
    authorService.getAllAuthors().then((resp) => setAuthors(resp.data));
    categoryService.getAllCategories().then((resp) => setCategories(resp.data));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ m: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Stack direction='column' spacing={2}>
              <FormControl>
                <FormLabel id='categories'>Categories</FormLabel>
                <RadioGroup
                  aria-labelledby='categories'
                  defaultValue='4'
                  name='categoryId'
                >
                  {categories.map((category) => {
                    const { id, categoryName } = category
                    return (
                      <FormControlLabel
                        key={id}
                        value={id}
                        control={<Radio />}
                        label={categoryName}
                        onChange={handleChange}
                      />
                    )
                  })}
                </RadioGroup>
              </FormControl>

              <FormControl fullWidth sx={{ width: "100%" }}>
                <InputLabel id='authorIds'>Authors</InputLabel>
                <Select
                  name='authorIds'
                  value={values.authorIds}
                  onChange={handleChange}
                  label='Authors'
                  multiple
                >
                  {authors.map((author) => {
                    const {id,authorName,authorSurname} = author
                    return (
                    <MenuItem
                      value={id}
                      key={id}
                    >{`${authorName} ${authorSurname}`}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Stack>
          </Grid>

          <Grid item xs={9}>
            <Stack direction='column' spacing={2}>
              <FormControl fullWidth>
                <TextField
                  name='title'
                  required
                  label='Title'
                  variant='outlined'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                ></TextField>
                {errors.title && touched.title && (
                  <div className='error'> {errors.title}</div>
                )}
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  name='unitPrice'
                  required
                  label='unitPrice'
                  variant='outlined'
                  onChange={handleChange}
                  value={values.unitPrice}
                ></TextField>
                {errors.unitPrice && touched.unitPrice && (
                  <div className='error'> {errors.unitPrice}</div>
                )}
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  name='publisher'
                  required
                  label='Publisher'
                  variant='outlined'
                  onChange={handleChange}
                  value={values.publisher}
                ></TextField>

                {errors.publisher && touched.publisher && (
                  <div className='error'> {errors.publisher}</div>
                )}
              </FormControl>

              <ButtonGroup>
                <Button variant='contained' type='submit'>
                  Add
                </Button>

              </ButtonGroup>
            </Stack>
          </Grid>
        </Grid>
        <SimpleFab url="/admin/books/list" />
      </Box>
    </form>
  );
}
