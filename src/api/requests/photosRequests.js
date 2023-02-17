import instance from "../axiosInstance";
import { PHOTOS_PATH } from "../../constants/api";

const getPhotos = async (params = {}) => {
    const response = await instance.get(PHOTOS_PATH, {params})
    return response.data;
}

const createPhoto = async (data) => {
    const response = await instance.delete(PHOTOS_PATH, data)
    return response.data;
}

const updatePhoto = async (id, data) => {
    const response = await instance.put(`${PHOTOS_PATH}/${id}`, data)
    return response.data;
}

const deletePhoto = async (id) => {
    const response = await instance.delete(`${PHOTOS_PATH}/${id}`)
    return response.data;
}

const photosApi = { getPhotos, createPhoto, updatePhoto, deletePhoto };
export default photosApi;