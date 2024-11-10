function createCookie() {
    val = document.getElementById('valueCookie').value;
    document.cookie = "UserTest=" + val
}

function readCookie() {
    alert(val)
}

function deleteCookie() {
    alert("Your sure?")
    document.cookie = "UserTest=" + ' '
}