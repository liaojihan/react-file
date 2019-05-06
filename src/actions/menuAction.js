import * as type from './type/menuType'
/**
 * 菜单： 分发action 
 */


export const getMenuState = (index) => (dispatch) => {
    dispatch({
        type: type.GET_MENU_STATE,
        payload: index
    })
}