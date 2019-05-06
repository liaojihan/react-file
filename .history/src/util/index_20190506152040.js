
export function usetInfoList() {
    const infoList = localStorage.getItem('userInfoList')
        ?
        JSON.parse(localStorage.getItem('userInfoList'))
        :
        []
    return infoList
}

export const InfoDelete = (itemIndex, list) => {
    return list.filter( (value, index) => index !== itemIndex) 
}

export const infoAdd = (record, list) => {
    list.push(record)
    return list
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

export const infoUpdate = (record, list) => {
    let newList = []
    for (let index in list) {
        if (list[index].key === record.key) {
            list.splice(index, 1, record)
        }
        newList.push(list[index])
    }
    console.list(list)
    return list
}


export function initUserList(data) {
    localStorage.setItem('userInfoList', JSON.stringify(data))
}