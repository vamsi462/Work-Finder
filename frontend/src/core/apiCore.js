import {API} from '../config'
import  queryString from 'query-string'

export const getWorks = (sortBy) => {
  return fetch(`${API}/works?sortBy=${sortBy}&accepted=desc&limit=6`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
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

export const getFilteredWorks = (skip, limit, filters = {}) => {

  const data = {
    limit,
    skip,
    filters
  }

  return fetch(`${API}/works/by/search`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const list = params => {
  const query = queryString.stringify(params);
  console.log("query", query);
  return fetch(`${API}/works/search?${query}`, {
      method: "GET"
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const read = workId => {
  return fetch(`${API}/work/${workId}`, {
      method: "GET"
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}
export const listRelated = workId => {
  return fetch(`${API}/works/related/${workId}`, {
      method: "GET"
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};