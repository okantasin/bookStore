import {Route,Routes,Link} from 'react-router-dom';
import TopLink from './components/Links/TopLink';
import Home from './pages/Home';
import ListBooks from './adminPages/books/ListBooks';
import ListAuthors from './adminPages/authors/ListAuthors';
import ListCategories from './adminPages/categories/ListCategories';


function App() {
  return (
    <div>
      <TopLink/>

        <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/books/list" element={<ListBooks />} />
        <Route path="/authors/list" element={<ListAuthors />} />
        <Route path="/authors/list" element={<ListCategories />} />
     
        </Routes>  

      

    </div>
  );
}

export default App;
