import { instance } from "./axiosInstance"; 

export const getContacts = async () => {
    const res = await instance.get();
    return res.data;
}

export const addNewContact = async (data) => {
    const res = await instance.post("", data);
    return res.data;
}

export const deleteContact = async (id) => {
    const res = await instance.delete(`${id}`);
    return res.data;
} 