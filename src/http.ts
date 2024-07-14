import axios from "axios";

// Set base URL from env
axios.defaults.baseURL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";


// Auth Token
const auth_token = localStorage.getItem('authToken')
axios.defaults.headers.common['Authorization'] = `Bearer ${auth_token}`;

export default axios;