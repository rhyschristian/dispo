Template.login.onRendered(function(){

    // Initialize iCheck plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[id=email]').val();
        var password = $('[id=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
          if(error){
              console.log(error.reason);
          } else {
              Router.go('dashboard');
          }
      });
    }
});
