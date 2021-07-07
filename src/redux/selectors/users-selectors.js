import { createSelector } from "reselect"

export const getUsersSelector=(state)=>{
return state.usersPage.users
}

export const getUsers=createSelector(getUsersSelector, (users)=>{
    return users.filter(u=>true)
})


export const getTotalCount=(state)=>{
    return state.usersPage.totalCount
}

export const getCurrentPage=(state)=>{
    return state.usersPage.currentPage
}

export const getCountUserOnPage=(state)=>{
    return state.usersPage.countUserOnPage
}

export const getIsFetching=(state)=>{
    return state.usersPage.isFetching
}

export const getFollowingInProgress=(state)=>{
    return state.usersPage.buttonBlockArray
}

