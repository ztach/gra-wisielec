import {gamePointsAddApiUrl,gamePointsIdApiUrl} from './routes';
import * as api from './apis';

export const getAllgetGamePoints = () => 
    api.get(gamePointsIdApiUrl()); 

export const getGamePointsId = (id) =>
    api.get(gamePointsIdApiUrl(id))

export const createGamePoints = params =>
    api.post(gamePointsAddApiUrl(),{...params})
