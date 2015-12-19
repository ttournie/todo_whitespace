Meteor.publish("allTasksHeaders", function(){
    return Tasks.find({}, {
        fields: {content: 0}
    });
});
