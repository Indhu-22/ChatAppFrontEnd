document.getElementById('sendBtn').addEventListener('click', function () {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();

    if (message) {
        const messagesContainer = document.getElementById('messages');

        // Create a new message element
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerText = message;

        // Append the new message to the messages container
        messagesContainer.appendChild(messageElement);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the messages container
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});

// Optional: Allow sending message by pressing "Enter" key
document.getElementById('message').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('sendBtn').click();
    }
});
