(function($) {
    $(function() {
        $("form.ajax-form").validate({
            errorPlacement: function(error, element) {
                $(element)
                    .closest("form")
                    .find("label[for='" + element.attr("id") + "']")
                    .append(error);
            },
            
            errorElement: "span",
            rules: {
                sender: {
                    required: true,
                    minlength: 3,
                    lettersonly: true
                },
                phone: {
                    required: true,
                    digits: true,
                    minlength: 10,
                    maxlength: 15
                },
                email: {
                    required: true,
                    minlength: 6,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 6
                }
            },

            messages: {
                sender: {
                    required: "Please enter your name",
                    minlength: "Minimum 3 characters",
                    lettersonly: "Only letters please!"
                },
                phone: {
                    required: "Please enter your phone number",
                    digits: "Only digits (no spaces)",
                    minlength: "Minimum 10 characters",
                    maxlength: "Maximum 15 characters"
                },
                email: {
                    required: "Please enter your email address",
                    minlength: "Minimum 6 characters",
                    email: "That's an invalid email"
                },
                message: {
                    required: "Please enter your message",
                    minlength: "Minimum 6 characters"
                }
            },
            success: function(label) {
                label.addClass("valid").text("OK!");
            },
          
        });

        $('input,textarea').val("");
        $('.contact-form .form-group input,.contact-form .form-group textarea').focusout(function() {
            var text_val = $(this).val();
            if (text_val === "") {
                $(this).removeClass('has-value');
            } else {
                $(this).addClass('has-value');
            }
        });

    });

})(jQuery);
