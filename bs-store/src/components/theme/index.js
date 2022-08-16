import { createTheme } from "@mui/material";
import {blue,brown,amber,green,teal,blueGrey} from "@mui/material/colors";

const theme1 = createTheme({
    palette: {
      primary: teal,
      secondary: blueGrey
    },
    typography: {
        fontSize: 16,
    },
  });
  
  const theme2 = createTheme({
    palette: {
      primary: blue,
      secondary: amber,
    },
  });
  
  const theme3 = createTheme({
    palette: {
      primary: green,
      secondary: brown,
    },
  });
  
  
  export {theme1, theme2, theme3} 