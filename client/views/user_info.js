// User helpers.
Template.user_loggedin.helpers({
  // get the current user.
  user: function () {
      return  Meteor.user();
    }
});

// User event.
Template.user_loggedin.events({
  "click #logout": function(){
      console.log("test");
      Meteor.logout();
  }
});
