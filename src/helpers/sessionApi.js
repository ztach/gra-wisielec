import {userSessionApiUrl,allSessionApiUrl} from './routes';
import * as api from './apis';

export const getAllSesions = () => 
    api.get(allSessionApiUrl()); 

export const getSesionId = (id) =>
    api.get(userSessionApiUrl(id))

export const createSesion = params =>
    api.post(userSessionApiUrl(),{...params})

export const updateSesion = (id, params) =>
    api.put(userSessionApiUrl(id), {...params })

export const destroySesion = (id) =>
    api.destroy(userSessionApiUrl(id))
