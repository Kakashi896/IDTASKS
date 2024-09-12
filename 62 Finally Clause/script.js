const f = () => {

    try {
        let a = 0;
        console.log(program);
        console.log("Program ran successfully");
    } catch (err) {
        console.log("There is an error");
    } finally {             // if there is an error in catch also we use
        console.log("Program ended......");
    }
}