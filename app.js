const numbers = [41, 56 ,23 ,44, 36, 5, 31]

const numbers2 = new Array(23, 44, 56, 41, 36, 5)

let val
val = numbers2.length

val = numbers2[0]
val = numbers2.indexOf(36)

val = Array.isArray(numbers)
numbers.pop()
numbers.push(250)
numbers.unshift(250)
numbers.shift()

val = numbers.concat(numbers2)

// vastupid
val = numbers.sort(function (x, y) {
    return y - x

})

// väiksemast suuremale
val = numbers.sort(function (x, y) {
    return x - y

})

console.log(val)
