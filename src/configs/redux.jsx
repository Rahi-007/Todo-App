import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//R--------{Define base URL and expected endpoints}----------R//
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Tasks"],
  endpoints: (build) => ({
    getAllTasks: build.query({
      query: () => "tasks",
      providesTags: ["Tasks"],
      transformResponse: (response) =>
        response.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),
    }),
    addTask: build.mutation({
      query: (task) => ({
        url: "tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTask: build.mutation({
      query: (task) => ({
        url: `tasks/${task.id}`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: build.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = api;
