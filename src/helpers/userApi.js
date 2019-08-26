import {userIdApiUrl,userRolaApiUrl,userLoginApiUrl,userPasswordApiUrl} from './routes';
import * as api from './apis';

export const getRola = (id) =>
    api.get(userRolaApiUrl(id))

export const getAllUsers = () => 
    api.get(userIdApiUrl()); 
 
export const getUserId = (id) =>
    api.get(userIdApiUrl(id))

export const getUserLogin = login => {
    return api.get(userLoginApiUrl(login))
}

export const getUserPassword = password => {
    return api.get(userPasswordApiUrl(password))
}

export const createUser = params =>
    api.post(userIdApiUrl(),{...params})

export const updateUser = (id, params) =>
    api.put(userIdApiUrl(id), {...params })

export const destroyType = (id) =>
    api.destroy(userIdApiUrl(id))
