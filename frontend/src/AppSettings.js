
export const server =
process.env.REACT_APP_ENV === 'production'
  ? 'https://tractmapbe.azurewebsites.net'
  : process.env.REACT_APP_ENV === 'staging'
  ? 'https://tractmapbe.azurewebsites.net'
  : 'https://tractmapbe.azurewebsites.net';

export const webAPIUrl = `${server}`;