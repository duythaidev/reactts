import { AxiosResponse } from "axios";
// import { User } from "../types/types";
import axios from "./axiosCustom";

const getUsers = async () => {
    const res: AxiosResponse = await axios.get('/users');
    return res.data
}
const getUsersPaginate = async (itemPerPage: number, page: number) => {
    const res: AxiosResponse = await axios.get(`/users/${itemPerPage}/${page}`);
    return res.data
}

const login = async (userName: string, age: number) => {
    const res: AxiosResponse = await axios.post(`/login`, { userName, age });
    return res.data
}
export { getUsers, getUsersPaginate, login }