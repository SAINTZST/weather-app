var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b == 'number') {
                resolve(a + b)
            } else {
                reject('Arguments must be number')
            }
        }, 1500)
    })
}

asyncAdd(5, 0).then((ans) => {
    console.log(`Result: ${ans}`)
    return asyncAdd(ans, ans)
}).then((ans) => {
    console.log(`Result: ${ans}`)
}).catch((errorMessage) => {
    console.log(errorMessage)
})

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey, It worked')
//         reject('Unable to fulfill promise')
//     }, 2000)
// })

// somePromise.then((message) => {
//     console.log(`Success: ${message}`)
// }, (errorMessage) => {
//     console.log(`Error: ${errorMessage}`)
// })