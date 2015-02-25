'use strict';

var fb = new Firebase('https://groovychat.firebaseio.com/'),
    FIREBASE_URL = 'https://groovychat.firebaseio.com/',
    $postIt     = $('.postIt');

$(document).ready(function(){
  $postIt.click(postChat);
  fillChatBox();
});

function postChat(event) {
  event.preventDefault();

  var $chat  = $('.chat').val(),
      $poster = $('.poster').val(),
      text  = { name: $poster, text: $chat },
      data  = JSON.stringify(text);

  $.post(FIREBASE_URL + '/messages.json', data, function(res){
      fillChatBox(res);
  });
}

function fillChatBox() {
  $.get(FIREBASE_URL + '/messages.json', function(data){
    Object.keys(data).forEach(function(uuid){
      chatBox(data[uuid]);
    });
  });
}

function chatBox(chat) {
  var $message = $('<p><em>' + chat.name + '</em>' + ": " + chat.text + '</p>');
  $('.chatbox').prepend($message);
}



