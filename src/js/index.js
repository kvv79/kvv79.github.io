const emailButton = document.getElementById("email-button");

const sendAlert = () => {
    alert("Copied email to clipboard (me@asuu.tech)")
    navigator.clipboard.writeText("me@asuu.tech")
}