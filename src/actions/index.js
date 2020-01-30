import * as types from '../constants/ActionsTypes'
let nextMessageId = 0
let nextUserId = 0

export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author //just for save data which we are passing throuth action
})

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
})

export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECIEVED,
    id: nextMessageId++,
    message,
    author
})

export const populateUserList = users => ({
    type: types.USERS_LIST,
    users
})