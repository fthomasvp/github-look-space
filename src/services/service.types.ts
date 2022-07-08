export type BaseQueryParams = {
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
