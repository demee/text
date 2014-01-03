require('../../../assets/js/models/message.js');

describe('Testing message.js', function(){
  it('should contruct message object', function(){
    var message = new Message();

    expect(message).toBeDefined();
  });
});
