import { instance } from "./axiosInstance"; 

const getContacts = async () => {
    const res = await instance.get();
    return res.data;
}

const addNewContact = async (data) => {
    const res = await instance.post("", data);
    return res.data;
}

const deleteContact = async (id) => {
    const res = await instance.delete(`${id}`);
    return res.data;
} 

const api = { getContacts, addNewContact, deleteContact };
export default api;
