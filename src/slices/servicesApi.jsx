import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const servicesApi = createApi({
    reducerPath: "servicesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }), // Cambia si usas otra URL
    endpoints: (builder) => ({
        getAllServices: builder.query({
            query: () => "/services",
        }),
    }),
});

export const { useGetAllServicesQuery } = servicesApi;
