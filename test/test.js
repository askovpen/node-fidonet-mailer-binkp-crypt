var assert = require('assert');
var crypt=require('../');
var crypto=require('crypto');
describe('Fidonet BinkP crypt module', function(){
	var client=crypt('test');
	it('calculates correct encoding', function(){
		client.init_keys();
		assert.deepEqual(client.encrypt_buf(new Buffer([0x80,0x01,0x05])),new Buffer([0x5f,0x9f,0x26]));
	});
	it('calculates correct decoding', function(){
		client.init_keys();
		assert.deepEqual(client.decrypt_buf(new Buffer([0x5f,0x9f,0x26])),new Buffer([0x80,0x01,0x05]));
	});
	it('calculates speed', function(done){
		crypto.randomBytes(1024*100, function(ex, buf) {
			if (ex) throw ex;
			client.init_keys();
			client.decrypt_buf(buf);
			done();
		});
	});
});
