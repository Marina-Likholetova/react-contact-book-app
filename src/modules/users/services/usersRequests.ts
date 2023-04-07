import { AxiosResponse } from "axios";
import instance from "modules/common/services/axiosInstance";
import { USERS_PATH } from "modules/common/constants/api";
import { Id, User, UserForm } from "entities/user";

const getUsers = async () => {
    const response: AxiosResponse<User[]> = await instance.get(USERS_PATH);
    return response.data;
}

const getSingleUser = async (id: Id) => {
    const response: AxiosResponse<User> = await instance.get(`${USERS_PATH}/${id}`);
    return response.data;
} 

const createUser = async (data: UserForm) => {
    const response: AxiosResponse<User> = await instance.post(USERS_PATH, data);
    return response.data;
}

const deleteUser = async (id: Id) => {
    const response: AxiosResponse = await instance.delete(`${USERS_PATH}/${id}`);
    return response.data;
}

const updateUser = async (id: Id, data: User) => {
    const response: AxiosResponse<User> = await instance.put(`${USERS_PATH}/${id}`, data);
    return response.data;
}

const userApi = { getUsers, getSingleUser, createUser, updateUser, deleteUser };
export default userApi;