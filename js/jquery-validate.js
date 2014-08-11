// Setup form validation on the #register-form element

    $(".whoo-form").validate({
        
        rules: {
            title: {
                required:true,
                minlength:5,
                maxlength:45,
                validChars:true,  
            },

            address: {
                required:true, 
                validChars:true, 
                url:true
            },

            name: {
                required:true,
                validChars:true
            },

            email {
                required:true,
                email:true,
                maxlength:255,
                emailCheck:true
            },

            password: {
                required:true,
                range: [6, 10]
            }, 

            number: {
                required:true,
                digits:true,
                creditcard:true,
                minlength:16,
                maxlength:16
            }, 

            security: {
                required:true,
                digits:true,
                maxlength:4
            }
        },

 // Specify the validation error messages


        messages: {

            address:{
                required: "Must begin with http."
            },

            name: {
                required: "What is your name?"
            },

            email: {
                email: "Must contain @ symbol.",
                emailCheck: "This email is already in use."
            },

            password: {
                required: "A valid password is required.",
                minlength: jQuery.format('Password must be at least {0} characters in length.'),
                maxlength: jQuery.format('Password cannot exceed {0} characters in length.')
            },

            number: {
                minlength: jQuery.format('Card number must be at least {0} characters in length.')
            },

            security: {
                minlength: jQuery.format('Code must be at least {0} characters in length.')
            }
        };

  });
  