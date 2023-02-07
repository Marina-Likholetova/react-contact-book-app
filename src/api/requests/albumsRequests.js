import instance from "../axiosInstance";
import { ALBUMS_PATH } from "../../constants/api";

const getAlbums = async () => {
    const response = await instance.get(ALBUMS_PATH);
    return response.data;
}

const getAlbum = async (id) => {
    const response = await instance.get(`${ALBUMS_PATH}/${id}`);
    return response.data;
} 

const createAlbum = async (data) => {
    const response = await instance.post(ALBUMS_PATH, data);
    return response.data;
}

const deleteAlbum = async (id) => {
    const response = await instance.delete(`${ALBUMS_PATH}/${id}`);
    return response.data;
}

const updateAlbum = async (id, data) => {
    const response = await instance.put(`${ALBUMS_PATH}/${id}`, data);
    return response.data;
}

const albumsApi = { getAlbums, getAlbum, createAlbum, updateAlbum, deleteAlbum };
export default albumsApi;