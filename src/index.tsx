import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from "./GlobalStyle";
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { theme } from './theme';
import { store } from './store';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
