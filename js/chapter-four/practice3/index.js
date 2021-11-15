import fetch from "node-fetch";

let promise = new Promise(function (resolve, reject) {
    fetch('https://v1.jinrishici.com/all.json')
        .then(response => response.json())
        .then(data => resolve(data))
});
promise.then(data => console.log(`['${data.origin}', '${data.author}', '${data.content}']`))


async function getAsync() {
   const response = await fetch('https://v1.jinrishici.com/all.json')
   return response.json()
}
getAsync().then(data => console.log(`['${data.origin}', '${data.author}', '${data.content}']`))