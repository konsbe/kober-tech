import axios from "axios";
import { useQuery } from "react-query";
import { IPostInfo } from "../interface/IPosts";
import { requestData } from "../utils/axios-utils";
export interface IResponseData extends Response {
  data: IPostInfo[];
}

const url = "http://localhost:3000";

// axios.interceptors.request.use((req: any) => {
//   if (localStorage.getItem("userProfile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("userProfile")).token
//     }`;
//     return req;
//   }
// });

export const fetchPostData = () => {
  return requestData({ url: "/blog/api" });
};

export const usePostData = (
  onSuccess: (param: Response) => void,
  onError: (param: Error) => void
) => {
  return useQuery("postData", fetchPostData, {
    onSuccess,
    onError,
  });
};

// //this works
export const createPost = (newpost: any) =>
  axios.post(`${url}/blog/api/`, newpost);

// //this works
// export const deletepost = (id: string) => {
//   return axios.delete(`${url}/blog/api/${id}`);
// };
