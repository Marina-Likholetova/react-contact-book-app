import axios from "axios";
import { API_URL } from "../constatnts/api";

export const instance = axios.create({
    baseURL: API_URL,
});
