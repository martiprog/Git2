var state = 1;

// let promice = new Promise((resolve, reject) => {
// if (state === 1) {
//     resolve("Yes");
// } else {
//     reject("No");
// }
// })

// promice.then((result) => {
//     console.log(result);
// }).catch((result) => {
//     console.log(result);
// }

async function Aw() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                console.log("Yes")
            );
        }, 2000)
    })

}

async function MyPromise() {
    console.log("A");
    console.log("B");
    console.log("C");
    await Aw();
    console.log("D");
    console.log("E");
}

MyPromise()
