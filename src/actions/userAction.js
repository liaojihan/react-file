import * as type from './type/userType'
import {
    infoList, InfoDelete,
    infoAdd, infoGet, infoUpdate
} from "../util/user"

/**
 * 分发 user action
 */

export const userInfoList = (pager) => (dispatch) => {
    dispatch({
        type:type.USER_INFO_LOAD
    })
    setTimeout(() => {
        const list = infoList(pager)
        dispatch({
            type: type.USER_INFO_LIST,
            payload: list
        })
    }, 2000)

}

export const userInfoDelete = (index, pager) => (dispatch) => {
    dispatch({
        type:type.USER_INFO_LOAD
    })
    setTimeout( () => {
        InfoDelete(index)
        const list = infoList(pager)
        dispatch({
            type: type.USER_INFO_DELETE,
            payload: list
        })
    }, 2000)
}

export const clearForm = () => (dispatch) => {
    dispatch({
        type: type.USER_INFO_CLEAR,
        payload: {}
    })
}

export const userInfoAdd = (record, pager) => (dispatch) => {
    dispatch({
        type:type.USER_INFO_LOAD
    })
    setTimeout(() => {
        infoAdd(record)
        const list = infoList(pager)
        dispatch({
            type: type.USER_INFO_ADD,
            payload: list
        }) 
    }, 2000);
}


export const getUser = (index, list) => (dispatch) => {
    const info = infoGet(index, list)
    dispatch({
        type: type.USER_INFO_GET,
        payload: info
    })
}

export const userInfoUpdate = (record, pager) => (dispatch) => {
    dispatch({
        type: type.USER_INFO_LOAD
    })  
    setTimeout(() => {
        infoUpdate(record)
        const list = infoList(pager)
        dispatch({
            type: type.USER_INFO_UPDATE,
            payload: list
        })
    }, 2000);
}

export const userInfoLoad = () => dispatch => {
    dispatch({
        type: type.USER_INFO_LOAD,
        payload: true
    })
}