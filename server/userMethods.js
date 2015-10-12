/**
 * Created by umbertogrand on 12/10/15.
 */
Meteor.methods({
    /**
     * update a user's permissions
     *
     * @param {Object} targetUserId Id of user to update
     * @param {Array} roles User's new permissions
     * @param {String} group Company to update permissions for
     */

    createAdminUser : function () {
        var userObject = {
            email: "admin@test.com",
            password: "abc123",
            profile: { first_name: "admin", last_name: "user"}
        };

        Accounts.createUser(userObject, function(){

        });


        Roles.addUsersToRoles(userObject, 'admin');
    }

    //updateRoles: function (targetUserId, roles, group) {
    //    var loggedInUser = Meteor.user();
    //
    //    if (!loggedInUser ||
    //        !Roles.userIsInRole(loggedInUser,
    //            ['manage-users', 'support-staff'], group)) {
    //        throw new Meteor.Error(403, "Access denied"),
    //        Router.go('errorThree')
    //    }
    //
    //    Roles.setUserRoles(targetUserId, roles, group)
    //}
})