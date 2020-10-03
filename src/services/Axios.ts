import axios from 'axios';
import { URL_BACKEND_REMOTE } from '../config/urls';

const Axios = axios.create({
  baseURL: URL_BACKEND_REMOTE,
});

export default Axios;