let p1 = new Promise((resolve)=>{
    resolve('💜')
})
const call = async() => {
    return await p1.then((val)=>{
        setTimeout(()=>{
            console.log('Response Value ::',val)
        },1000)
    })
}

call() // Function Calling