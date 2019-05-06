import * as type from './type/userType'
import { usetInfoList, InfoDelete, initUserList, infoAdd, infoGet } from "../util/index"

/**
 * 分发 user action
 */

 export const userInfoList = () => (dispatch) => {
    const infoList = usetInfoList()
    dispatch({
        type: type.USER_INFO_LIST,
        payload: infoList
    })
 }


 export const userInfoDelete = (index, list) => (dispatch) => {
     const infoList = InfoDelete(index, list)
     initUserList(infoList)
     dispatch({
         type: type.USER_INFO_DELETE,
         payload: infoList
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