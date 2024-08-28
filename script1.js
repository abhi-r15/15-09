function checkPasscode(event) {
    event.preventDefault();  // Prevents the form from submitting and refreshing the page
    const input = document.getElementById("secretInput").value;
    const secret = "25qwerty";  // The correct string
    if (input === secret) {
        window.location.href = "2ndpage.html";  // The URL of the next page
    } else {
        alert("Incorrect response");
    }
}
