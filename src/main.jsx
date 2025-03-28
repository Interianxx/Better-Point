import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.jsx';
import { configureStore } from '@reduxjs/toolkit';

// Importar tus slices y la API
import productsReducer, { productsFetch } from './slices/productsSlice';
import cartReducer, { getTotals } from './slices/cartSlice.jsx';
import { productsApi } from './slices/productsApi';

// Configurar el store
const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

// Ejecutar las acciones
store.dispatch(productsFetch());
store.dispatch(getTotals());

// Renderizar la aplicación con StrictMode y Provider
const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
