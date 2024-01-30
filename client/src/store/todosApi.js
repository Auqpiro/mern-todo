import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: "todos",
  }),
  tagTypes: ['todo'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/',
      providesTags: (res) =>
        res
          ? [...res.map(({ id }) => ({ type: 'todo', id }))]
          : ['todo'],
    }),
    getTodoById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (_, _err, id) => [{ type: 'Users', id }],
    }),
    addTodo: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['todo'],
    }),
    editTodo: builder.mutation({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (_, _err, { id }) => ([{ type: 'todo', id }]),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todo'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
} = todosApi;

export default todosApi;
