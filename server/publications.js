Meteor.publish("allTasksHeaders", function(){
    // Only display user tasks.
    return Tasks.find({
        owner: this.userId
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
  deleteTask: function (taskId) {
    var task = Tasks.findOne(taskId);
    // Only the task owner can delete it.
    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.remove(taskId);
  },
  // Donne tasks function.
  done: function (taskId, setChecked) {
    var task = Tasks.findOne(taskId);
    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.update(taskId, { $set: { checked: setChecked} });
  },
});
