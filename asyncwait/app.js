// request promise
const requestPromise = (url) => {
    return new Promise((success, failed) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                failed(`Connection timeout ${url}`)
            } else {
                success(`Success ${url} ${delay}ms`)
            }
        }, delay)
    });
}

// // cara benar menggunakan promise
// requestPromise('https://www.google.com').then((result) => {
//     console.log('Page 1')
//     console.log(result)
// }).then(() => {
//     console.log('Page 2')
//     return requestPromise('https://www.google.com')
// }).then(() => {
//     console.log('Page 3')
//     return requestPromise('https://www.google.com')
// }).then(() => {
//     console.log('Page 4')
//     return requestPromise('https://www.google.com')
// })
//     .catch((err) => {
//         console.log(err)
//     })
//

// mengelola error dengan async await
async function requestHandler() {
    try {
        let result = await requestPromise('https://www.google.com')
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

requestHandler()
