// Quetion 1 ------------------------------------------------------------>
// use a free api from internet and feed your app with live  data
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
        return v.json()
}).then((contests) => {
        console.log(contests)
        ihtml = ""
        for (item in contests) {
                console.log(contests[item])
                ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${contests[item].name}</h5>
                                        <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                                        <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
                                        <p>Starts at: ${contests[item].start_time}
                                        <p>Starts at: ${contests[item].end_time}
                                        <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
                `
        }
        cardContainer.innerHTML = ihtml
})


// Quetion 2 ------------------------------------------------------------>
//  Creae a nete saving app which stores your note to loacalstorage

// let a = prompt("Enter your note");
// localStorage.setItem("note",a);


// Quetion 3 ------------------------------------------------------------>
// repeat the quetion 2 and fetch the note which was saved

let n = localStorage.getItem("note");
alert("Your note is "+ n);
let a = prompt("If you want to update");

if(a){
    localStorage.setItem("note",a);
}

// Quetion 4 ------------------------------------------------------------>
// Delete the note  which was saved in quetion 2 and 3

let c = confirm("Do you want to delete your note?");
if (c){
    localStorage.removeItem("note");
    alert("Note deleted....")
}


