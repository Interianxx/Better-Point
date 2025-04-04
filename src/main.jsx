import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.jsx';
import { configureStore } from '@reduxjs/toolkit';

// Importar slices
import productsReducer, { productsFetch } from './slices/productsSlice';
import servicesReducer, { servicesFetch } from './slices/servicesSlice';
import cartReducer, { getTotals } from './slices/cartSlice.jsx';
import { productsApi } from './slices/productsApi';
import { servicesApi } from './slices/servicesApi'; // Make sure this import exists

// Configurar el store
const store = configureStore({
    reducer: {
        products: productsReducer,
        services: servicesReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [servicesApi.reducerPath]: servicesApi.reducer, // Add servicesApi reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            productsApi.middleware,
            servicesApi.middleware // Add servicesApi middleware
        ),
});

// Ejecutar las acciones iniciales
store.dispatch(productsFetch());
store.dispatch(servicesFetch());
store.dispatch(getTotals());

// Renderizar la aplicación
const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);