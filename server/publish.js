/**
 * Created by umbertogrand on 12/10/15.
 */

Meteor.publish("userData", function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId},
            {fields: {'role': "admin"}});
    } else {
        this.ready();
    }
});

Meteor.publish("all-users", function () {
    return Meteor.users.find(); // everything
});