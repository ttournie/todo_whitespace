// Index event.
Template.index.events({
    'submit form': function(e){
		    e.preventDefault();

      // Get the fom content.
      var text = e.target.content.value;

      // Insert a task.
      Meteor.call('addTask', text);

      // Clear form the form.
      e.target.content.value = "";
	},
});

// task event.
Template.task.events({
  "click .delete": function () {
    Meteor.call("deleteTask", this._id);
  },
  "click .toggle-checked": function () {
  // Set the checked property to the opposite of its current value
  Meteor.call("done", this._id, ! this.checked);
},
});
