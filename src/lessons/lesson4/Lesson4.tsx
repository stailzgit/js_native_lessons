import React, {useEffect, useState} from 'react'
import './lesson_4';

const Lesson4 = () => {
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
    // const onCreatePromise = () => {
    //     //@ts-ignore
    //     handlePromise.promise = new Promise((resolve, reject)=>{
    //         console.log("Created promise")
    //         //@ts-ignore
    //         handlePromise.resolve = resolve
    //         //@ts-ignore
    //         handlePromise.reject = reject
    //         //@ts-ignore
    //     })
    //
    //
    // }
    // const onResolvePromise = () => {
    //     handlePromise.resolve()
    // }
    // const onRejectPromise = () => {
    //     handlePromise.reject
    // }

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
    // const onCreatePromise = () => {
    //     //@ts-ignore
    //         let p = new Promise((resolve, reject)=>{})
    //
    //         console.log("Created promise")
    //         //@ts-ignore
    //         handlePromise.resolve = p.resolve
    //         handlePromise.reject = p.reject
    //         //@ts-ignore
    //
    //
    //
    // }
    // const onResolvePromise = () => {
    //     handlePromise.resolve()
    // }
    // const onRejectPromise = () => {
    //     handlePromise.reject
    // }
    //



    return (
        <div>


            {/*<button id='btn-create-promise' onClick={onCreatePromise}>Create Promise</button>*/}
            {/*<button id='btn-resolve-promise' onClick={onResolvePromise}>Resolve Promise</button>*/}
            {/*<button id='btn-reject-promise' onClick={onRejectPromise}>Reject Promise</button>*/}
        </div>
    );
}
// export const Test = () => {
//     const [text, setText] = useState("123");
//
//     console.log("Component rendered with")
//
//     useEffect(()=>{
//         const timeuptId = setTimeout(()=>{
//             console.log("TIMEOUT EXPIRED")
//             setText('3 second passed')
//
//         }, 1000)
//
//         return clearInterval(timeuptId)
//     }, [text])
//
//     return <>{text}</>
// }



// export default Lesson4;
export default Lesson4;