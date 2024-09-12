// Fetch API 66 --------------------------------------------------------------

// let a = fetch("https://goweather.herokuapp.com/weather/Ny")
// a.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
//     console.log(response.headers);
//     return response.json();
//     // return response.text();
// }).then((response)=>{
//    console.log(response);
// })







// Sending post request with fethched api 67 --------------------------------------------------------------

const createToDo = async (todo)=>{

let options = {
    method: 'POST',
    headers: {
        "Content-type": "appliction/json"
    },
    body:  JSON.stringify(todo)

} 
let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
let response = await p.json()
return response;
}

const mainFUNC = async()=>{
    let todo = {
        title: 'Akshat',
        body: 'bhai',
        userID: 705285,
    }
  let todor =  await createToDo(todo);
  console.log(todor);
}

mainFUNC();