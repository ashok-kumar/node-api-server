const credentials = {
    credentials: 'same-origin'
}
const API_URL = ''; //'http://127.0.0.1:9080/Hubzu';

async function checkStatus(response) {
    console.log('response ::::',response);
    if (response.status >= 200 && response.status < 300) return await response;

    let error = new Error(response.statusText)
    error.response = await response.json()

    return Promise.reject(error)
}

function getHeaders(url) {
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };
}

function getUrl(url) {

    return API_URL + url;
    //const timestamp = new Date().getTime()
}

/**
 * Base functionality for the server request communications (GET, POST, ...).
 * @type {{get: (function()), postPutDelete: (function()), post: (function()), put: (function()), delete: (function())}}
 */
const serviceBase = {

    get: async url => {
        credentials.headers = getHeaders(url)
        credentials.method = 'GET'
        let response = await fetch(getUrl(url), credentials)
        response = await checkStatus(response)

        return response.json()
    },

    postPutDelete: async (url, method, request) => {
        const options = {
            headers: getHeaders(url),
            method: method,
            body: JSON.stringify(request)
        }

        let response = await fetch(getUrl(url), Object.assign(options, credentials))
        response = await checkStatus(response)

        return response.json()
    },

    post: (url, request) => serviceBase.postPutDelete(url, 'POST', request),

    put: async (url, request) => serviceBase.postPutDelete(url, 'PUT', request),

    delete: (url, request) => serviceBase.postPutDelete(url, 'DELETE', request)
}

export default serviceBase