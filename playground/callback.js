var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Saint'
    }
    setTimeout(() => {
    callback(user)
    }, 3000)
}

getUser(86, (userObj) => {
    console.log(userObj)
})