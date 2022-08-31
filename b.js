// let MyPromise = new Promise((resolve, reject) => {
//     let status = 0;


// })

// MyPromise.then((data) => {
//     console.log(data);
// }).catch((data) => {
//     console.log(data)
// })


function a(status) {
    return new Promise((resolve, reject) => {
        if (status == true) {
            resolve("ddd")
        } else {
            reject("aaa")
        }
    })
}


async function MyPromise() {

    try {
        console.log("Start");
        let o = await a(true);
        console.log(o);
        console.log("End");
    } catch (err) {
        console.log("Error");
    }

}

MyPromise()