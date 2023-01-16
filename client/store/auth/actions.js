import client from '../../utils/axios.js'


export const POST_REGISTER ='POST_REGISTER';
export const SET_AUTH = 'SET_AUTH';
export const POST_LOGIN = 'POST_LOGIN';

export default {
    [POST_REGISTER]:(context,data) => client.post('auth/register',data),
    [POST_LOGIN]:(context,data) => client.post('auth/login',data)
}