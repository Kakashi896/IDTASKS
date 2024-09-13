let a = ()=>{return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(666)
    },2000)
})
}

//  let f = async()=>{
//     let b = await a();
//     console.log(b);
//     let c = await a();   //-------------------- Lengthy way
//     console.log(c);
//     let d = await a();
//     console.log(d);
//  }

//  f();



(async () =>   {
    let b = await a();
    console.log(b);
    let c = await a();      // ----------------- Smarter way
    console.log(c);
    let d = await a();
    console.log(d);
 })();