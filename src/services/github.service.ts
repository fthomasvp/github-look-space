import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Repo } from "../features/github/github.types";

type BaseQueryParams = {
  /** Can be one of: `all`, `owner`, `member` */
  type: "all" | "owner" | "member";

  /** Default: 1 */
  page: number;

  /** Default: 30 */
  per_page: number;

  /** Can be one of: `created`, `updated`, `pushed`, `full_name`.
  Default: `full_name` */
  sort: "created " | "updated " | "pushed" | "full_name";
};

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
