Tasks = new Mongo.Collection("tasks");

Tasks.allow({
    insert: function(userId, doc){

		return true;
	}
});
