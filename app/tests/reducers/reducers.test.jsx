var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });

  describe('authReducer', () => {
    it('should login user', () => {
      const action = {
        type: 'LOGIN',
        uid: "123"
      };

      const res = reducers.authReducer(undefined, df(action));
      expect(res).toEqual({
        uid: action.uid
      });
    });

    it('should logout user', () => {
      const state = {
        uid: '123'
      };

      const action = {
        type: 'LOGOUT'
      };

      const res = reducers.authReducer(df(state), df(action));
      expect(res).toEqual({});
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something todo',
          completed: false,
          createdAt: 78687686
        }
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todos = [{
        id: 11,
        text: 'Test 11',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];

      var updates = {
        completed: false,
        completedAt: null
      };

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];

      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
