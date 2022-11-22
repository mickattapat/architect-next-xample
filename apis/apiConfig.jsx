import axios from "axios"

const APICaller = (params) => {
  const api = axios.create({
    // baseURL: params?.baseURL||`${process.env.NEXT_PUBLIC_END_POINT}:${params.port}`,
    baseURL: params?.baseURL||`${process.env.NEXT_PUBLIC_END_POINT}`,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "application/json, text/plain, */*",
      Authorization: `Bearer ${sessionStorage.getItem("api_token")}`,
    },
  })

  const method = params.method ? params.method : "GET"
  const path = params.path ? params.path : ""
  const payload = params.payload ? params.payload : {}

  switch (method) {
    case "GET":
      return api
        .get(path, { params: payload })
        .then((response) => ({ ...response }))
        .catch((error) => error.response)

    case "POST":
      return api
        .post(path, payload)
        .then((response) => ({ ...response }))
        .catch((error) => error.response)

    case "PUT":
      return api
        .put(path, payload)
        .then((response) => ({ ...response }))
        .catch((error) => error.response)

    case "DELETE":
      return api
        .delete(path, { data: payload })
        .then((response) => ({ ...response }))
        .catch((error) => error.response)

    default:
      return "[API_CALLER]: Missing params."
  }
}

const methodAPI = {
  get: (path, params,port) => APICaller({ ...params, method: "GET", path,port }),
  post: (path, params,port) => APICaller({ ...params, method: "POST", path ,port}),
  put: (path, params,port) => APICaller({ ...params, method: "PUT", path,port }),
  delete: (path, params,port) => APICaller({ ...params, method: "DELETE", path,port }),

  getBaseURL: (path, params,baseURL) => APICaller({ ...params, method: "GET", path ,baseURL}),
  postBaseURL: (path, params,baseURL) => APICaller({ ...params, method: "POST", path ,baseURL}),
  putBaseURL: (path, params,baseURL) => APICaller({ ...params, method: "PUT", path,baseURL }),
  deleteBaseURL: (path, params,baseURL) => APICaller({ ...params, method: "DELETE", path,baseURL }),

}


export default methodAPI
