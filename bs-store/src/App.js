import {Route,Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import ListBooks from './adminPages/books/ListBooks';
import ListAuthors from './adminPages/authors/ListAuthors';
import ListCategories from './adminPages/categories/ListCategories';
import AdminAppBar from './components/adminAppBar/AdminAppBar';
import AddCategory from './adminPages/categories/AddCategory'
import UpdateCategory from './adminPages/categories/UpdateCategory';


function App() {
  return (
    <div>
      <AdminAppBar/>

        <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="admin/books/list" element={<ListBooks />} />
        <Route path="admin/authors/list" element={<ListAuthors />} />
        <Route path="admin/categories/list" element={<ListCategories />} />
        <Route path="admin/categories/add" element={<AddCategory />} />
        <Route path="admin/categories/update/:id" element={<UpdateCategory />} />
        </Routes>  

      

    </div>
  );
}

export default App;
