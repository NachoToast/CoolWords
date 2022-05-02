import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import store from './redux/store';
import { Provider } from 'react-redux';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <CssBaseline />
                <App />
            </React.StrictMode>
        </ThemeProvider>
    </Provider>,
);
