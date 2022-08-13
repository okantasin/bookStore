import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ListBooks from './adminPages/books/ListBooks';
import ListAuthors from './adminPages/authors/ListAuthors';
import ListCategories from './adminPages/categories/ListCategories';
import AdminAppBar from './components/adminAppBar/AdminAppBar';
import AddCategory from './adminPages/categories/AddCategory'
import UpdateCategory from './adminPages/categories/UpdateCategory';
import AddAuthor from './adminPages/authors/AddAuthor'
import UpdateAuthor from './adminPages/authors/UpdateAuthor'
import SimpleSnackbar from "./components/snackBar/SimpleSnackbar";
import AppContext from "./context/AppContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import AdminAppbar from './components/adminAppBar/AdminAppBar';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import AddBook from "./adminPages/books/AddBook"
import UpdateBook from "./adminPages/books/UpdateBook"

function App() {
  const { isLoading } = useContext(AppContext);
  const { showSnackbar } = useSelector(state => state.setting);
  const {snackbar} = useSelector((state)=>state.setting)

  return (
    <div>
        <AdminAppbar />
      {isLoading ? (
        <Box sx={{ 
          position:"absolute",
          display: "flex", 
          justifyContent: "center",
          width:"100vw",
          height:'100vh',
          alignItems:"center"
          }}>
          <CircularProgress />
        </Box>
      ) : (
        ""
      )}

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="admin/books/list" element={<ListBooks />} />
        <Route path="admin/authors/list" element={<ListAuthors />} />
        <Route path="admin/categories/list" element={<ListCategories />} />

        <Route path="admin/categories/add" element={<AddCategory />} />
        <Route path="admin/authors/add" element={<AddAuthor />} />
        <Route path="admin/books/add" element={<AddBook/>}/>

        <Route path="admin/categories/update/:id" element={<UpdateCategory />} />
        <Route path="admin/authors/update/:id" element={<UpdateAuthor />} />
        <Route path="admin/books/update/:id" element={<UpdateBook/>}/>}

      </Routes>

      <SimpleSnackbar snackbar={snackbar} />


    </div>
  );
}

export default App;
