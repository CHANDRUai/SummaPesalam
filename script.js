function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value.trim();
    if (message !== "") {
        var chatBox = document.getElementById("chatBox");
        var newMessage = document.createElement("div");
        newMessage.className = "message from-me";
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
        messageInput.value = "";
    }
}
