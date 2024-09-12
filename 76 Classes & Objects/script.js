class RailwayForm {
    submit() {
        alert(this.name + " your form submitted with train no. " + this.trainno);

    }

    cancel() {
        alert(this.name + " your form cancelled with train no. " + this.trainno);
    }

    fill(nameof, trainno) {
        this.name = nameof;
        this.trainno = trainno ;
    }
}

let akshatForm = new RailwayForm();
akshatForm.fill("Akshat", 705285);

let krishnaForm = new RailwayForm();
let krishnaForm1 = new RailwayForm();
krishnaForm.fill("Krishna", 420420);
krishnaForm1.fill("Krishna", 4209211);

akshatForm.submit();
krishnaForm.submit();
krishnaForm1.submit();
krishnaForm1.cancel();
