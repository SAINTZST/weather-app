console.log('Starting app..')

setTimeout(() => {
    console.log('Inside of callback')
}, 2000)

setTimeout(() => {
    console.log('Second timeout')
}, 2000)

console.log('Finishing up')