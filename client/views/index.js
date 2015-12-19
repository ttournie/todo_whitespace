Template.index.events({
    'submit form': function(e){
		e.preventDefault();

		var content = $("textarea[name='contenu']").val();

		var task = {
				content: content,
        owner: Meteor.userId(),           // _id of logged in user
        username: Meteor.user().username  // username of logged in user
		}
        Tasks.insert(task);
	}
});
