const RED = () => {
    return new Promise((resolve, reject) => {
        console.log('RED')
        setTimeout(() => {
            resolve(YELLOW())
        }, 1000)
    })
}

const YELLOW = () => {
    return new Promise((resolve, reject) => {
        console.log('YELLOW')
        setTimeout(() => {
            resolve(GREEN())
        }, 1000)
    })
}

const GREEN = () => {
    return new Promise((resolve, reject) => {
        console.log('GREEN')
        setTimeout(() => {
            resolve(RED())
        }, 1000)
    })
}

RED()