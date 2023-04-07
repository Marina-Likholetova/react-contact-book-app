import { AxiosResponse } from "axios";
import instance from "modules/common/services/axiosInstance";
import { ALBUMS_PATH } from "modules/common/constants/api";
import { Id } from 'entities/user/index';
import { Album } from "entities/album";

const getAlbums = async (params = {}) => {
    const response: AxiosResponse<Album[]> = await instance.get(ALBUMS_PATH, {params});
    return response.data;
}

const getAlbum = async (id: Id) => {
    const response: AxiosResponse<Album> = await instance.get(`${ALBUMS_PATH}/${id}`);
    return response.data;
} 


const deleteAlbum = async (id: Id) => {
    const response:AxiosResponse<object> = await instance.delete(`${ALBUMS_PATH}/${id}`);
    return response.data;
}


const albumsApi = { getAlbums, getAlbum, deleteAlbum };
export default albumsApi;