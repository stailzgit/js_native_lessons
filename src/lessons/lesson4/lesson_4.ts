
//import {resolvePtr} from "dns";

//console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/




// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// let p = new Promise((resolve, reject) =>{
//     //resolve("")
//     console.log("Promise is created")
// })
//



// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let p = new Promise((resolve, reject) =>{
//     resolve("Promise Data")
// })
//
// p.then((res)=> {
//     console.log(res)
// })







// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль


// let p = new Promise((resolve, reject)=>{
//    reject("error")
// })
//
// p
//     .then(result=>{
//         console.log("Success")
//     })
//     .catch(err=>{
//     console.log("Error - " + err)
// })



// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Data")
//     }, 3000)
// })
//
// p.then(res=>{
//     console.log(res)
// })



// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// let handlePromise = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     onSuccess: (paramName: string)=>{
//         console.log(`Promise is resolved with data: ${paramName}`)
//     },
//     onError: (paramName: string)=>{
//         console.log(`Promise is rejected with error: ${paramName}`)
//     }
// }





// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.


// let p = new Promise<string>((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("My name is")
//     }, 1000)
// })
//
// const onSuccess = (value: string) => { return `${value} Stailz` }
//
// const print = (value: string) => {
//     console.log("Print func - " + value)
// }
//
// p
//     .then(res=>{
//         let re2 = onSuccess(res)
//         return onSuccess(res)
//     })
//     .then(res=>{
//         print(res)
//     })


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

import {strict} from "assert";
import {useEffect, useState} from "react";


// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({name: "Anna"})
//     }, 1000)
//
// })
// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({age: 16})
//     }, 2000)
// })
// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({city: 'Minsk'})
//     }, 3000)
// })
//
// Promise.all([p1, p2, p3])
//     .then((values)=>{
//         //@ts-ignore
//         console.log( values[0].name, values[1].age, values[2].city)
//     })

async function sleep(ms: number) {
        return new Promise((res, rej)=>
            setTimeout(()=>{
                res(console.log(ms))
        }, ms*100))
}


async function show() {
    await sleep(3)
    await sleep(2)
    await sleep(1)
}

show()






// just a plug
export default ()=>{};