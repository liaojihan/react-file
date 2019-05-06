
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
    console.log(list);
    console.log(index);
    for (let item of list) {
        if (item.key === index)
            return item
    }
}


export function initUserList(data) {
    localStorage.setItem('userInfoList', JSON.stringify(data))
}