import assert = require('assert');
import appTalk = require('../app-talk');

describe('App.Talk', () => {
  it('GetGreeting Test', () => {
    assert.equal(
      appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 1, 0, 0, 0)),
      'Hello!'
    );
    assert.equal(
      appTalk.App.Talk.GetGreeting(new Date(2018, 1, 1, 13, 0, 0, 0)),
      'Good evening!'
    );
  });
});
