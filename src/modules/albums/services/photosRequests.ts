import { AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';
import instance from "modules/common/services/axiosInstance";
import { PHOTOS_PATH } from "modules/common/constants/api";
import { Photo } from 'entities/photo';

const getPhotos = async (params: AxiosRequestConfig) => {
    const response: AxiosResponse<Photo[]> = await instance.get(PHOTOS_PATH, params)
    return response.data;
}

// const createPhoto = async (data) => {
//     const response = await instance.delete(PHOTOS_PATH, data)
//     return response.data;
// }

// const updatePhoto = async (id, data) => {
//     const response = await instance.put(`${PHOTOS_PATH}/${id}`, data)
//     return response.data;
// }

// const deletePhoto = async (id) => {
//     const response = await instance.delete(`${PHOTOS_PATH}/${id}`)
//     return response.data;
// }

const photosApi = { getPhotos };
export default photosApi;