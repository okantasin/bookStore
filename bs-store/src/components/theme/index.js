import { createTheme } from "@mui/material";
import {blue,brown,amber,green,purple} from "@mui/material/colors";

const theme1 = createTheme({
    palette: {
      primary: purple,
      secondary: blue,
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