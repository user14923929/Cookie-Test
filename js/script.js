function createCookie() {
    name = document.getElementById('nameCookie').value;
    val = document.getElementById('valueCookie').value;
    document.cookie = name + "=" + val
}

function readCookie() {
    alert(document.cookie)
}

function deleteCookie() {
    alert("Your sure?")
    document.cookie = " "
    alert("Cookie deleted!")
}
