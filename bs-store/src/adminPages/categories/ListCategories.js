import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, deleteOneCategory } from '../../store/actions/categoryActions';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, ButtonGroup, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { setMessage } from '../../store/actions/settingActions';
import { showSnackbar } from '../../store/actions/settingActions';
import SimpleFab from '../../components/fab/SimpleFab';


export default function ListCategories() {
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.category);
  const { snackBar } = useSelector((state) => state.setting)
  const categoryDispatch = useDispatch();


  const handleEdit = (id) => {
    navigate(`/admin/categories/update/${id}`);
  }

  const handleDelete = (id) => {
    categoryDispatch(deleteOneCategory(id));
    categoryDispatch(showSnackbar({
      message: "Category deleted successfully",
      duration: 3000,
      severity: "warning",
    }));
    navigate("/admin/categories/list");

  }

  useEffect(() => {
    categoryDispatch(getAllCategories());
  }, []);


  return (
    <>
      <SimpleFab url="/admin/categories/add" />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category Id</TableCell>
              <TableCell>Category Name</TableCell>
              <TableCell>Category Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => {
              const { categoryId, categoryName, categoryDescription } = category;
              return (
                <TableRow
                  key={categoryId}
                >
                  <TableCell >{categoryId}</TableCell>
                  <TableCell >{categoryName}</TableCell>
                  <TableCell >{categoryDescription}</TableCell>
                  <TableCell component="th" scope="row">
                  </TableCell>
                  <ButtonGroup>
                    <Button variant="contained" color="primary" onClick={() => handleEdit(categoryId)}>Edit</Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(categoryId)}>Delete</Button>
                  </ButtonGroup>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  );
}