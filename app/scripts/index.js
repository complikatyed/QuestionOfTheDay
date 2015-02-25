'use strict'

var fb = new Firebase('https://groovychat.firebaseio.com/');

$('body').on('click', '.postIt', function(event) {
	event.preventDefault();

	// get name and message from input boxes
	var chatGuy =  $('.chatGuy').val();
	var chatText = $('.chatText').val();

	// send chatText to firebase
	fb.push({name: chatGuy, text: chatText});

	$('.chatText').val('');
    $('.chatGuy').val('');
	location.reload(true);

});

fb.limitToLast(20).on("child_added", function(snapshot) {
    var newChat = snapshot.val();
    $('.chatbox').prepend('<p><em>' + newChat.name + '</em>' + ':   ' + newChat.text + '</p>');
});