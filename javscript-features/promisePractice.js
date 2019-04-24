var my1SecDelayCallA = new Promise(function (resolve, fail) {
    setTimeout(function () {
        console.log('1 finished');
        resolve(3);
    }, 3000);
});

var my2SecDelayCallA = new Promise(function (resolve) {
    setTimeout(function () {
        console.log('2 finished');
        resolve(3);
    }, 3000);
});

var my3SecDelayCallA = new Promise(function (resolve) {
    setTimeout(function () {
        console.log('3 finished');
        resolve(3);
    }, 3000)
});

console.log('I will be called first');
my1SecDelayCallA.then(function (result1) {
    my2SecDelayCallA
        .then(function (result2) {
            my3SecDelayCallA
                .then(function (result3) {
                    console.log('Total delay was ' + result1 + result2 + result3);
                })
        })
});
console.log('I am defined after the asyc call. Since asyc calls takes some time. I will have ' +
        'my output ahead');

//Now lets solve similar problem with the async and await

async function addDelays() {
    const a = await my1SecDelayCallA;
    const b = await my2SecDelayCallA;
    const c = await my3SecDelayCallA;
    return a + b + c;
}
addDelays()
    .then(function (v) {
        console.log('this result is from async await call ' + v);
    });
