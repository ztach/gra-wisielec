const serverUrl = 'http://localhost:3001';


export const typItemApiUrl = id => 
    id ? `${serverUrl}/type/${id}` : `${serverUrl}/type/`;

export const dictItemApiUrl = id =>
    id ? `${serverUrl}/dict/${id}` : `${serverUrl}/dict/`;

export const dictsItemApiUrl = id =>
    id ? `${serverUrl}/dicts/${id}` : `${serverUrl}/dicts/`;

export const userIdApiUrl = id =>
    id ? `${serverUrl}/user/${id}` : `${serverUrl}/user/`;

export const userRolaApiUrl = rola =>
    rola ? `${serverUrl}/user/rola/${rola}` : `${serverUrl}/user/`;

export const userLoginApiUrl = login => 
    login ? `${serverUrl}/login/${login}` : `${serverUrl}/login/`;

export const userPasswordApiUrl = password =>
    password ? `${serverUrl}/password/${password}` : `${serverUrl}/password/`;

export const userSessionApiUrl = id =>
    id ? `${serverUrl}/session/${id}`: `${serverUrl}/session/`

export const allSessionApiUrl = id =>
    id ? `${serverUrl}/sessionVw/${id}`: `${serverUrl}/sessionVw/`

export const gamePointsIdApiUrl = id =>
    id ? `${serverUrl}/gamePoints/user/${id}` : `${serverUrl}/gamePoints/`;
