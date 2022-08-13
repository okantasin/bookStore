import { useEffect, useState, createContext } from "react";
import axios from "axios";
import AuthorService from  "../services/AuthorService";
const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
    const authorService = new AuthorService();
    const [authors, setAuthors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        authorService.getAllAuthors().then(authors => setAuthors(authors.data));
    }, [])

    const values = {
        authors,
        isLoading,
        setIsLoading,
        setAuthors
    };

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContext;