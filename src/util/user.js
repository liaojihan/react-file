
export const infoList = (pager) => {
    
    const start = pager.current * pager.pageSize - pager.pageSize
    const end = start + pager.pageSize
    const infoList = localStorage.getItem('userInfoList')
        ?
        JSON.parse(localStorage.getItem('userInfoList'))
        :
        []
    const total = infoList.length
    return {
        infoList: infoList.slice(start, end),
        total: total
    }
}

export const InfoDelete = (itemIndex) => {
    const list = getUserList()
    initUserList(
        list.filter( (value, index) => index !== itemIndex) 
    )
}

export const infoAdd = (record) => {
    const list = getUserList()
    list.unshift(record)
    initUserList(
        list
    )
} 

export const infoGet = (index, list) => {
    let record
    for (let item of list) {
        if (item.key === index) {
            record = item
            break
        }
    }
    return record
}

export const infoUpdate = (record) => {
    const list = getUserList()
    let newList = []
    for (let index in list) {
        if (list[index].key === record.key) {
            newList.push(record)
            continue
        }
        newList.push(list[index])
    }
    initUserList(newList)
}


export function initUserList(data) {
    localStorage.setItem('userInfoList', JSON.stringify(data))
}

export function getUserList(){
    return localStorage.getItem('userInfoList') ? 
    JSON.parse(localStorage.getItem('userInfoList')) : []
}