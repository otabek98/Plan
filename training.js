const { reject } = require("async");

console.log('Jack Ma maslahatlari');

const list = [
    'yaxshi talaba boling', // 20
    'togri boshliq tanlang va koproq xato qiling', // 20 <= 30
    'ozingizning biznesingiz xaqida oylang', // 30 <= 40
    'siz kuchliman deb xisoblagan ishlarni qiling', // 40 <= 50
    'Yoshlarga investitsiya qiling', // 50<=60
    'endi foydasi yoq, dam oling',
];

/////////// sync function ////////////

// function advice(a, callback) {
//     // get 2 params, a is 나이, and callback function
//     if (typeof a !== 'number')
//         callback('insert a number', null); // a 넘버 아니면 데이터를 숨긴다
//     else if (a <= 20) callback(null, list[0]);
//     else if (a < 20 && a <= 30) callback(null, list[1]);
//     else if (a < 30 && a <= 40) callback(null, list[2]);
//     else if (a < 40 && a <= 50) callback(null, list[3]);
//     else if (a < 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(() => {
//             callback(null, list[5]);
//         }, 3000);
//     }
// }
console.log('passed here 0');
// advice(70, (err, data) => {
//     // get 2 argument, first is 나이, second is calback, and callback gets 2 params
//     if (err) console.log('error', err);
//     console.log('Javob', data);
// });
// console.log('passed here 1');

/////////////////  async function  /////////

async function advice(a) {
    // get 2 params, a is 나이, and callback function
    if (typeof a !== 'number')
        throw new Error('insert a number'); // a 넘버 아니면 insert a number
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve( list[5])
            }, 3000)
        })
    }    
}      
    
console.log('passed here 0');
// advice(30)
//     .then((data) => {
//         console.log('Javob: ', data);
//     })
//     .catch((err) => {
//         console.log('ERROR', err);
//     });
console.log('passed here 1');

async function run() {
    let result = await advice(25);
    console.log(result);
    result = await advice(45);
    console.log(result);
}
run();
