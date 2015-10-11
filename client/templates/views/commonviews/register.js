Template.register.onCreated(function(){
    console.log("The 'login' template was just created.");
});

Template.register.onRendered(function(){
    // Initialize iCheck plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
    });

    var validator = $('.register').validate({
        submitHandler: function(event){
            var email = $('[id=email]').val();
            var password = $('[id=password]').val();
            Accounts.createUser({
                email: email,
                password: password
            }, function(error){
                if(error){
                    if(error.reason == "Email already exists."){
                        validator.showErrors({
                            email: "That email already belongs to a registered user."
                        });
                    }
                    if(error.reason == "Password is not valid."){
                        validator.showErrors({
                            password: "Please make sure you password is at least 6 characters."
                        });
                    }
                } else {
                    Router.go("dashboard");
                }
            });
        }
    });
});

Template.register.onDestroyed(function(){
    console.log("The 'login' template was just destroyed.");
});