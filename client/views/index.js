Template.index.events({
    'submit form': function(e){
		e.preventDefault();

		var content = $("textarea[name='contenu']").val();

		var task = {
				content: content
		}

        Tasks.insert(task);
	}
});
