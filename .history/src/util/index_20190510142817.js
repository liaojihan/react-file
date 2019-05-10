
export function usetInfoList() {
    const infoList = localStorage.getItem('userInfoList')
        ?
        JSON.parse(localStorage.getItem('userInfoList'))
        :
        []
    const total = infoList.length
    return {
        infoList: infoList.re,
        total: total
    }
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
            newList.push(record)
            continue
        }
        newList.push(list[index])
    }
    return newList
}


export function initUserList(data) {
    localStorage.setItem('userInfoList', JSON.stringify(data))
}