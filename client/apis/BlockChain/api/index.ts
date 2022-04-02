import axios, { AxiosResponse } from "axios";

const url = "http://localhost:3000/blog/blockchain/api";

interface IResponseData {
  config: {};
  data: any[];
  headers: {};
  request: { XMLHttpRequest: {} };
  status: number;
  statusText: string;
}

export const fetchCryptos = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: url,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((snapshot: AxiosResponse<IResponseData, IResponseData>) => {
        resolve(snapshot);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// export const fetchCryptos = () => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url)
//       .then((snapshot) => {
//         console.log("resolve");
//         resolve(snapshot);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

export function getCryptoVal(value) {
  console.log(value, "vlaue");
  return value;
}