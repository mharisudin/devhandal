// const promiseExample = () => {
//     return new Promise((success, failed) => {
//         // success(() => {
//         // })
//         // failed(() => {})
//         success(() => {
//             console.log('Success')
//         })
//     })
// }
//
// promiseExample()

const changeBackgroundColor = (color, delay) => {
    return new Promise((success, failed) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            success()
        }, delay)
    })
}

// changeBackgroundColor('red', 1000)
//     .then(() => changeBackgroundColor('yellow', 1000))
//     .then(() => changeBackgroundColor('green', 1000))
//     .then(() => changeBackgroundColor('blue', 1000))
//     .then(() => changeBackgroundColor('cyan', 1000))
//     .then(() => changeBackgroundColor('orange', 1000))
//     .then(() => changeBackgroundColor('black', 1000))

async function changeColor() {
    await changeBackgroundColor('red', 1000)
    await changeBackgroundColor('yellow', 1000)
    await changeBackgroundColor('green', 1000)
    await changeBackgroundColor('blue', 1000)
    await changeBackgroundColor('cyan', 1000)
    await changeBackgroundColor('orange', 1000)
    await changeBackgroundColor('black', 1000)
}

changeColor()