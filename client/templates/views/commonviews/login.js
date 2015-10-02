Template.login.onCreated(function(){
    console.log("The 'login' template was just created.");
});

Template.login.onRendered(function(){
    var validator = $('.login').validate({
        submitHandler: function(event){
            var email = $('[name=email]').val();
            var password = $('[name=password]').val();
            Meteor.loginWithPassword(email, password, function(error){
                if(error){
                    if(error.reason == "User not found"){
                        validator.showErrors({
                            email: "We don't have record of that email in our system."
                        });
                    }
                    if(error.reason == "Incorrect password"){
                        validator.showErrors({
                            password: "The password you entered is incorrect."
                        });
                    }
                } else {
                    var currentRoute = Router.current().route.getName();
                    if(currentRoute == "login"){
                        Router.go("dashboard");
                    }
                }
            });
        }
    });
});

Template.login.onDestroyed(function(){
    console.log("The 'login' template was just destroyed.");
});
