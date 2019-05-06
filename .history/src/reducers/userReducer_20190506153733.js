
import * as type from '../actions/type/userType'

const initialUser= {
    infoList: [],
    info: {}
}

export default function (state = initialUser, action) {
    switch (action.type) {
        case type.USER_INFO_LIST:
            return {
                ...state,
                infoList: action.payload
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
        case TYPE
        default:
            return state
    }
}

