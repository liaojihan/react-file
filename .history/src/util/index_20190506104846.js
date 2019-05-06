
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
    return list[index]
}

const data = [{
    key: '1',
    name: 'John',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
}, {
    key: '2',
    name: 'Jim',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '3',
    name: 'Joe',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
}];


export function initUserList(data) {
    localStorage.setItem('userInfoList', JSON.stringify(data))
}