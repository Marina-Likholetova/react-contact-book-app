import instance from "modules/common/services/axiosInstance";
import { USERS_PATH } from "modules/common/constants/api";

const getUsers = async () => {
    const response = await instance.get(USERS_PATH);
    return response.data;
}

const getSingleUser = async (id) => {
    const response = await instance.get(`${USERS_PATH}/${id}`);
    return response.data;
} 

const createUser = async (data) => {
    const response = await instance.post(USERS_PATH, data);
    return response.data;
}

const deleteUser = async (id) => {
    const response = await instance.delete(`${USERS_PATH}/${id}`);
    return response.data;
}

const updateUser = async (id, data) => {
    const response = await instance.put(`${USERS_PATH}/${id}`, data);
    return response.data;
}

const userApi = { getUsers, getSingleUser, createUser, updateUser, deleteUser };
export default userApi;