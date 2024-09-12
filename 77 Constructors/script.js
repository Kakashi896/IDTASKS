// class RailwayForm {
//     constructor(givenname, trainno) {
//         this.name = givenname;
//         this.trainno = trainno ;
//         console.log("Constructoe called with value "+ givenname+" "+trainno);
//     }
//     submit() {
//         alert(this.name + " your form submitted with train no. " + this.trainno);

//     }

//     cancel() {
//         alert(this.name + " your form cancelled with train no. " + this.trainno);
//     }

    
// }

// let akshatForm = new RailwayForm("Akshat", 705285);
// let krishnaForm = new RailwayForm("Krishna", 420420);
// let krishnaForm1 = new RailwayForm("Krishna", 4209211);

// // krishnaForm1.fill("Krishna", 4209211);
// akshatForm.submit();
// krishnaForm.submit();
// krishnaForm1.submit();
// krishnaForm1.cancel();

// ORGANIZING CODE WITH ANOTHER METHOD


class RailwayForm {
    constructor(givenname, trainno, address) {
        console.log("Constructoe called with value "+ givenname+" "+trainno);
        this.name = givenname;
        this.trainno = trainno ;
        this.address = address ;
    
    }
    preview() {
        alert(this.name + " your form details are as follows that your train no. is " + this.trainno + " and with address " + this.address);

    }
    submit() {
        alert(this.name + " your form submitted with train no. " + this.trainno);

    }

    cancel() {
        alert(this.name + " your form cancelled with train no. " + this.trainno);
        this.trainno = 0;
    
    }    
}

let akshatForm = new RailwayForm("Akshat", 705285, "Konoha-leaf village Hokagey's residence 001")
akshatForm.preview();
akshatForm.submit();
akshatForm.cancel();
