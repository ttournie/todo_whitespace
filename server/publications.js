Meteor.publish("allTasksHeaders", function(){
    return Tasks.find({}, {
        fields: {content: 0}
    });
});


// Meteor methods.
Meteor.methods({
  addTask: function(text) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.insert({
      content: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
});
