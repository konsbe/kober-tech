export interface IPostProjectInfo {
  title: string;
  description?: string;
  name?: string;
  creator?: string;
  tags: Array<string> | string;
  selectedFile?: string;
  likes?: Array<string>;
  likeList?: Array<string>;
  createdAt?: any;
}
export type IProject = {
  title: string;
  description: string;
  name: string;
  creator: string;
  tags: Array<string>;
  selectedFile: string;
  likes: Array<string>;
  likeList: Array<string>;
  createdAt: any;
  _id: string;
  likeCount: number;
  currentId: string;
};

export interface IProjectInfo extends IProject {
  _id: string;
  tags: Array<string>;
}

export interface IResponseData extends Response {
  data: IProjectInfo[];
}
