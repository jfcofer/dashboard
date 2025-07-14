import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_OPENMETEO_API_BASE_URL,
  timeout: Number(import.meta.env.VITE_OPENMETEO_API_TIMEOUT) || 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/** Add a response interceptor to standardize error shape */
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.debug(
      `[Response] ${response.status} ${response.config.url}`,
      response.data,
    );
    return response;
  },
  (error: AxiosError) => {
    console.log(import.meta.env.VITE_OPENMETO_API_BASE_URL);
    console.error(
      "[Response Error]",
      error.response?.status,
      error.response?.data,
    );
    // You could unwrap error.response.data here into a custom error type
    return Promise.reject(error.response?.data || { message: error.message });
  },
);

export default apiClient;
