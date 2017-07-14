var URL = 'https://pvrvxrut92.execute-api.us-east-1.amazonaws.com/Dev/contact'

$('#contact-form').submit(function (event) {
  event.preventDefault()

  var data = {
    name: $('#name').val(),
    email: $('#email').val(),
    description: $('#question').val()
  }

  $.ajax({
    type: 'POST',
    url: URL,
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function () {
      $("#success-alert").removeClass("hidden");
      $("#error-alert").addClass("hidden");
    },
    error: function () {
      $("#success-alert").addClass("hidden");
      $("#error-alert").removeClass("hidden");
    }
  })
})
