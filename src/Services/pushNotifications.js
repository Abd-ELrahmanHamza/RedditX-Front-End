// Import axios
import axios from "API/axios";

/**
 * {Function} This function is responsible for get data to show trending Search when clicked on search input element
 * @return {{requestConfig: {headers: {"Content-Language": string}}, axiosInstance: AxiosInstance, method: string, url: string}}
 * @param {fetchData} - fetch data from back end server
 * @param {auth} - authorization to make user has an access
 */

const pushNotifications = async (fetchData, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
  fetchData({
    axiosInstance: axios,
    method: "GET",
    url: "/api/notification/history/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        Authorization: `Bearer ${auth.getToken()}`,
      },
    },
  });
};

export default pushNotifications;
