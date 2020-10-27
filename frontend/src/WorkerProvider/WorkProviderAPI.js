import {
    API
} from "../config";

export const createCategory = (userId, token, category) => {
    // console.log(name,email,password)
    return fetch(`${API}/category/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(category)
        })
        .then(response => {
            return response.json()

        })
        .catch(err => {
            console.log(err)
        })

};

export const createWork = (userId, token, work) => {
    // console.log(name,email,password)
    return fetch(`${API}/work/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: work
        })
        .then(response => {
            return response.json()

        })
        .catch(err => {
            console.log(err)
        })

};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
            method: 'GET'
        })
        .then(response => {
            return response.json()
        })
        .catch((err) => console.log(err))
}

export const getWorks = () => {
    return fetch(`${API}/works?limit=undefined`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteWork = (workId, userId, token) => {
    return fetch(`${API}/work/${workId}/${userId}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getWork = workId => {
    return fetch(`${API}/work/${workId}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateWork = (workId, userId, token, work) => {
    return fetch(`${API}/work/${workId}/${userId}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: work
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const list = (userId, token) => {
    return fetch(`${API}/acceptedWorks/list/${userId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const getStatusValues = (userId, token) => {
    return fetch(`${API}/work/status-values/${userId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateWorkStatus = (userId, token, acceptWorkId, status) => {
    return fetch(`${API}/work/${acceptWorkId}/status/${userId}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                status,
                acceptWorkId
            })
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
