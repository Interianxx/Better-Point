import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const servicesApi = createApi({
    reducerPath: "servicesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://vercel-api-interianxx-interianxxs-projects.vercel.app/services" }), // Cambia si usas otra URL
    endpoints: (builder) => ({
        getAllServices: builder.query({
            query: () => "/services",
        }),
    }),
});

export const { useGetAllServicesQuery } = servicesApi;
