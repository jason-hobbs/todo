import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTodo: function (){
      var newTodoName = this.get('name');
      if (!newTodoName.trim()) {return;}

      var todo = this.store.createRecord('todo',{
        name: newTodoName
      });

      this.set('name', '');
      todo.save();
    }
  },

  remaining: Ember.computed.filterBy('model','completed', false)


//  remaining: function() {
  //  return this.filterBy('model', 'completed', false).get('length');
  //}.property('@each.completed')




});
