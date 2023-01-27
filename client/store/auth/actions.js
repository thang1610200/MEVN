import client from '../../utils/axios.js'


export const POST_REGISTER ='POST_REGISTER';
export const SET_AUTH = 'SET_AUTH';
export const UNSET_AUTH = 'UNSET_AUTH';
export const POST_LOGIN = 'POST_LOGIN';
export const POST_FORGOT_PASSWORD = 'POST_FORGOT_PASSWORD'

export default {
    [POST_REGISTER]:(context,data) => client.post('auth/register',data),
    [POST_LOGIN]:(context,data) => client.post('auth/login',data),
    [POST_FORGOT_PASSWORD]:(context,data) => client.post('auth/passwords/email',data)
}