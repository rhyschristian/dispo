// Run this when the meteor app is started
Meteor.startup(function () {

    Meteor.createAdminUser();

    //var userObject = {
    //  email: "admin@test.com",
    //  password: "abc123"
    //};
    //
    //Accounts.createUser(userObject, function(){
    //
    //});
    //
    //Roles.addUsersToRoles(Meteor.user(), 'admin');
});
