import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Repo } from "../features/github/github.types";
import type { BaseQueryParams } from "./service.types";

const DEFAULT_PARAMS: Partial<BaseQueryParams> = {
  page: 1,
  per_page: 5,
  type: "all",
};

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  tagTypes: ["Repos"],
  endpoints: ({ query }) => ({
    getRepos: query<Repo[], { owner: string; params?: BaseQueryParams }>({
      query: ({ owner, params = DEFAULT_PARAMS }) => ({
        url: `/users/${owner}/repos`,
        params,
      }),
      providesTags: ["Repos"],
    }),
  }),
});

export const { useGetReposQuery } = githubApi;
