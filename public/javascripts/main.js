(function() {

  $(_init);

  function _init() {
    $('#go').click(_go);
  }

  function _go() {

    var params = {
      username: $('#username').val(),
      password: $('#password').val(),
      xml: $('#xml').val()
    };

    $.post('http://dmoore-om-vm/dce_xml_submit.html', params, function(data) {
      console.log('success');
      $('#request_output').html(data);
    });
  }
})();
