/*
* The following javascript below will set cookies.
* Returns cookies.
*/
// Set cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};
// Get cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

function userCookie() {
    var p_user = document.getElementById('user');
    var user = getCookie("username");
    if (user != "") {
        console.info("User has name!");
        p_user.innerHTML = user;
    } else {
        console.warn("User has no name!");
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    };
};
function returnUserCookie() {
    var p_return_user = document.getElementById('return_user');
    var return_user = getCookie("returnUser");
    if (return_user) {
        console.info("User has returned");
        p_return_user.innerHTML = return_user;
        return return_user;
    } else {
        setCookie("return_user", true, 365);
    };
};
function testCookie() {
    var test = getCookie("test");
    if (test != "") {

    }
}