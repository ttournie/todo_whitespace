// Index event.
Template.index.events({
    'submit form': function(e){
		e.preventDefault();

    // Get the fom content.
		var content = $("textarea[name='contenu']").val();
    var text = event.target.text.value;

    // Insert a task.
    Meteor.call("addTask", text);

    // Clear form the form.
    event.target.text.value = "";
	}
});

// Meteor methods called by server.
Meteor.methods({
  addTask: function (text) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
});
