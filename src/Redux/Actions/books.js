import Axios from 'axios';
const STRING_URL = 'http://192.168.100.185:3001/api/v1/books/';
export const getAllBook = page => {
  return {
    type: 'GET_BOOK',
    payload: Axios.get(`${STRING_URL}?page=${page}`, {}),
  };
};

export const getBookById = id => {
  return {
    type: 'GET_BOOK_BY_ID',
    payload: Axios.get(`${STRING_URL}${id}`),
  };
};

export const borrowBook = (id, available) => {
  return {
    type: 'BORROW_BOOK',
    payload: Axios.patch(`${STRING_URL}/rent/${id}`, available),
  };
};

export const returnBook = (id, available) => {
  return {
    type: 'RETURN_BOOK',
    payload: Axios.patch(`${STRING_URL}/return/${id}`, available),
  };
};

export const searchBookTitle = title => {
  return {
    type: 'SEARCH_BOOK',
    payload: Axios.get(`${STRING_URL}?search=${title}`),
  };
};

export const booksByGenre = id => {
  return {
    type: 'BOOKS_BY_GENRE',
    payload: Axios.get(`${STRING_URL}/genre/${id}`),
  };
};
