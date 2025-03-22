class Chat {
    constructor() {
        this.messages = [];
        this.chatContainer = document.createElement('div');
        this.chatContainer.className = 'chat-container';
        this.render();
    }

    render() {
        const messageList = document.createElement('ul');
        messageList.className = 'message-list';
        this.messages.forEach(message => {
            const messageItem = document.createElement('li');
            messageItem.textContent = message;
            messageList.appendChild(messageItem);
        });

        const messageInput = document.createElement('input');
        messageInput.type = 'text';
        messageInput.placeholder = 'Type a message...';
        messageInput.className = 'message-input';

        const sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.onclick = () => this.sendMessage(messageInput.value);

        this.chatContainer.appendChild(messageList);
        this.chatContainer.appendChild(messageInput);
        this.chatContainer.appendChild(sendButton);
        document.body.appendChild(this.chatContainer);
    }

    sendMessage(message) {
        if (message.trim()) {
            this.messages.push(message);
            this.render();
        }
    }

    receiveMessage(message) {
        this.messages.push(message);
        this.render();
    }
}

export default Chat;