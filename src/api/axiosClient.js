import axios from "axios";
const axiosClient = axios.create({
	baseURL:'https://api.ezfrontend.com/',
	headers: {
		'Content-Type': 'application/json'
	} 
})

// interceptors
// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

  
  axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    const {config, status, data} = error.response;
    const URLs = ['auth/local/register', 'auth/local']
    if(URLs.includes(config.url) && status === 400){
      const errorList = data.data || [];
      const firstError = errorList.length > 0 ? errorList[0] : {};
      const messageList = firstError.messages || [];
      const firstMessage = messageList.length > 0 ? messageList[0] : {};
      throw new Error(firstMessage.message)
    }
    return Promise.reject(error);
  });

export default axiosClient