function createCookie() {
    val = document.getElementById('valueCookie').value;
    document.cookie = "UserTest=" + val
}

function readCookie() {
    alert(document.cookie)
}

function deleteCookie() {
    alert("Your sure?")
    document.cookie = "UserTest=" + ' '
}
