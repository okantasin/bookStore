import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./store/configureStore";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from './context/AppContext';
import { Provider } from 'react-redux';
import CustomThemeProvider from './components/theme/CustomeThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>

        <AppContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AppContextProvider>
      </CustomThemeProvider>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
