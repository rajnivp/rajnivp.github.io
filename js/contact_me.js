$(document).ready(function() {

  $('input, textarea').keyup(function() {
    
    if ($('#name').val() != '' &&
        $('#email').val() != '' &&
        $('#subject').val() != '' &&
        $('#msg').val() != '') {
      $('#sendMessageButton').prop('disabled', false);
    }
    else {
      $('#sendMessageButton').prop('disabled', true);
    }
  });
	  $('#sendMessageButton').click(function() {
    var name = $("#name").val(),
        subject = $("#subject").val(),
        email = $("#email").val(),
        msg = $("#msg").val();
    
    var body = "Name: " + name + "%0AEmail: " + email + "%0AMessage: " + msg;
    body = body.replace(" ", "%20");
    subject = subject.replace(" ", "%20");
    
    var url = "mailto:rajnipadhariya424@gmail.com?" + "subject=" + subject + "&body=" + body;
    window.open(url, '_blank');
	return false;
  });
    
});