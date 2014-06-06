var assert = require('assert');
var crypt=require('../');

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
	client.init_keys();
});
