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
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";


function App() {
  const { isLoading } = useContext(AppContext);
  const { message, showSnackbar } = useSelector(state => state.setting);

  return (
    <div>
      <AdminAppBar />

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="admin/books/list" element={<ListBooks />} />
        <Route path="admin/authors/list" element={<ListAuthors />} />
        <Route path="admin/categories/list" element={<ListCategories />} />

        <Route path="admin/categories/add" element={<AddCategory />} />
        <Route path="admin/categories/update/:id" element={<UpdateCategory />} />

        <Route path="admin/authors/add" element={<AddAuthor />} />
        <Route path="admin/authors/update/:id" element={<UpdateAuthor />} />
      </Routes>

      <SimpleSnackbar message={message} showSnackbar={showSnackbar} />


    </div>
  );
}

export default App;
