Router.configure({
    layoutTemplate: 'mainLayout'
});
Router.route('/', {
    name: 'index',
    data: function(){
		var tasks = Tasks.find();

		return {
			tasks: tasks
		};
	},
	waitOn: function(){
		return Meteor.subscribe("allTasksHeaders");
	}
});
