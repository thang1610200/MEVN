import client from '../../utils/axios.js'


export const POST_REGISTER ='POST_REGISTER';
export const SET_AUTH = 'SET_AUTH';


export default {
    [POST_REGISTER]:(context,data) => client.post('auth/register',data)
}