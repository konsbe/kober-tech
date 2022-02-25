const projectTypes = {
  FETCH_ALL_PROJECTS: "FETCH_ALL_PROJECTS",
  CREATE_PROJECT: "CREATE_PROJECT",
  UPDATE_PROJECT: "UPDATE_PROJECT",
  LIKE_PROJECT: "LIKE_PROJECT",
  DELETE_PROJECT: "DELETE_PROJECT",
};
export default projectTypes;


export interface IProjectTypes  {
  type:
    | "FETCH_ALL_PROJECTS"
    | "CREATE_PROJECT"
    | "UPDATE_PROJECT"
    | "LIKE_PROJECT"
    | "DELETE_PROJECT";
  payload?: any;
};