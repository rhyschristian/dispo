Template.register.onRendered(function(){

    // Initialize iCheck plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

});

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[id=email]').val();
        var password = $('[id=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        }, function(error){
            if(error){
                console.log(error.reason); // Output error if registration fails
            } else {
                Router.go('dashboard'); // Redirect user if registration succeeds
            }
        });
    }
});
