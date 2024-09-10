
async function akshat() {

let delhiweather =  new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('38deg in delhi');
    },2000)
})
let ayodhyaweather =  new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('28deg in ayodhya');
    },4000)
})
// delhiweather.then(alert);
// ayodhyaweather.then(alert);
console.log("Fetching Delhi's weather please wait" );
let delhiW = await  delhiweather;
console.log("Fetched Delhi's weather which is "+  delhiW );
console.log("Fetching Ayodhya's weather please wait" );
let  ayodhyaW = await ayodhyaweather; 
console.log("Fetched Ayodhya's weather which is "+  ayodhyaW );

return [delhiW,  ayodhyaW];

}

const bakshat = async ()=>{
console.log("I am special and i waited for akshat named function");
}

const main1 = async ()=>{
console.log("Welcome to whether control console");
let q = await akshat();
let w = await bakshat();

}

main1();