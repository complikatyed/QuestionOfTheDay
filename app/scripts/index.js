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
	location.reload(true);

});

// testing
fb.once('value', function (res){
    var data = res.val();
    Object.keys(data).forEach(function (uuid) {
    	$('.chatbox').prepend('<p><em>' + data[uuid].name + '</em>: ' + data[uuid].text + '</p>');
    });
  })


