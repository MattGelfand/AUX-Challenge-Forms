if (!Modernizr.input.required) {

Modernizr.load([
{
  load: 'http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.0/jquery.validate.js',
  $(document).ready(function(){
    $("form").validate({
      errorPlacement: function(error, element) {
      error.appendTo("label[for="+$(element).attr('id')+"]");
  },
    errorElement: "em"
  });
  $('form').removeAttr('novalidate');
  });
]);
}



 