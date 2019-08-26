import {gamePointsIdApiUrl} from './routes';
import * as api from './apis';

export const getAllgetGamePoints = () => 
    api.get(gamePointsIdApiUrl()); 

export const getGamePointsId = (id) =>
    api.get(gamePointsIdApiUrl(id))

