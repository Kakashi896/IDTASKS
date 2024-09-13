class Password {
    constructor() {
        this.pass = "";
    }

    generatepassword(len) {
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "1234567890";
        let special = "!@#$%^&*()";

        if (len < 3) {
            return "Password too short!";
        } else {
            let i = 0;
            this.pass = "";  // Reset the password
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)];
                this.pass += numbers[Math.floor(Math.random() * numbers.length)];
                this.pass += special[Math.floor(Math.random() * special.length)];
                i += 3;
            }
            this.pass = this.pass.substr(0, len);
            return this.pass;
        }
    }
}

let p = new Password();

function generateNewPassword() {
    const password = p.generatepassword(8); // Generate an 8-character password
    document.getElementById("passwordDisplay").innerText = password;
}