// 分割代入(Destructing assignment)

// ①配列の場合

const users = [
    'ベップ', 
    'イシカワ',
    'サワキ'
]

const [a, b, c] = ['ベップ', 'イシカワ', 'サワキ']

// console.log(a)
// console.log(b)
// console.log(c)

// ②オブジェクトの場合

const obj = {
    name: 'Beppu',
    from: 'Japan'
}

const {name, from} = {
    content: '宿題をする',
    id: 1
}

console.log(name);

const test = ({content, id}) => {
    console.log(content)
}

test({content: '宿題をする', id: 1})