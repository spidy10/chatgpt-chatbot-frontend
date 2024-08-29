$(document).ready(function() {
    $('#send-btn').click(function() {
        let message = $('#input-message').val();
        $('#input-message').val('');  // Clear input field

        // Display user's message in the chatbox
        $('#chatbox').append('<div class="user-message"><strong>You:</strong> ' + message + '</div>');

        // Send user's message to the backend
        $.ajax({
            url: 'http://localhost:5000/chat',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ message: message }),
            success: function(response) {
                // Display bot's response in the chatbox
                $('#chatbox').append('<div class="bot-message"><strong>Bot:</strong> ' + response.reply + '</div>');
                $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight);  // Auto-scroll to the bottom
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    });
});