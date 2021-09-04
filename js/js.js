function validate() {
    var name = document.getElementById("fName").value;
    var password = document.getElementById("pword").value;
    var cpassword = document.getElementById("cpword").value;
    if (name == "") {
        prompt("invalid Name");
        document.myForm.nName.focus();
        return false;
    }
    if (password != cpassword) {
        prompt("Incorrect Password");
        document.myForm.ncpword.focus();
        return false;
    }
    
    if (password == "") {
        prompt("Invalid Password");
        document.myForm.npword.focus();
        return false;
    }
    if (cpassword == "") {
        prompt("Password Didn't Match");
        document.myForm.ncpword.focus();
        return false;
    }
    return true;
}
