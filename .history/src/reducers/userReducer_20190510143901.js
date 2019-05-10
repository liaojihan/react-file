
import * as type from '../actions/type/userType'

const initialUser= {
    infoList: [], // 当前页数据
    info: {}, // user对象
    pageSize: 5, //每页容量
    total: 0
}

export default function (state = initialUser, action) {
    switch (action.type) {
        case type.USER_INFO_LIST:
            return {
                ...state,
                infoList: action.payload.infoList
            }
        case type.USER_INFO_DELETE:
            return {
                ...state,
                infoList: action.payload
            }
        case type.USER_INFO_ADD:
            return {
                ...state,
                infoList: action.payload
            }
        case type.USER_INFO_GET: 
            return {
                ...state,
                info: action.payload
            }
        case type.USER_INFO_UPDATE:
            return {
                ...state,
                infoList: action.payload
            }
        case type.USER_INFO_CLEAR: 
            return {
                ...state,
                info: action.payload
            }
        default:
            return state
    }
}

