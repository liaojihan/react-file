import * as type from './type/userType'
import {
    usetInfoList, InfoDelete, initUserList,
    infoAdd, infoGet, infoUpdate
} from "../util/index"

/**
 * 分发 user action
 */

export const userInfoList = (pager) => (dispatch) => {
    dispatch({
        type:type.USER
    })
    setTimeout(() => {
        const infoList = usetInfoList(pager)
        dispatch({
            type: type.USER_INFO_LIST,
            payload: infoList
        })
    }, 2000)

}

export const userInfoDelete = (index, list) => (dispatch) => {
    const infoList = InfoDelete(index, list)
    initUserList(infoList)
    dispatch({
        type: type.USER_INFO_DELETE,
        payload: infoList
    })
}

export const clearForm = () => (dispatch) => {
    dispatch({
        type: type.USER_INFO_CLEAR,
        payload: {}
    })
}

export const userInfoAdd = (record, list) => (dispatch) => {
    const infoList = infoAdd(record, list)
    initUserList(infoList)
    dispatch({
        type: type.USER_INFO_ADD,
        payload: infoList
    })
}


export const getUser = (index, list) => (dispatch) => {
    const info = infoGet(index, list)
    dispatch({
        type: type.USER_INFO_GET,
        payload: info
    })
}

export const userInfoUpdate = (record, list) => (dispatch) => {
    const infoList = infoUpdate(record, list)
    initUserList(infoList)
    dispatch({
        type: type.USER_INFO_UPDATE,
        payload: infoList
    })
}

export const userInfoLoad = () => dispatch => {
    dispatch({
        type: type.USER_INFO_LOAD,
        payload: infoList
    })
}