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
	it('calculates speed decoding 1Mb', function(done){
		crypto.randomBytes(1024*1024, function(ex, buf) {
			if (ex) throw ex;
			client.init_keys();
			var d=new Date();
			client.decrypt_buf(buf);
			var speed=Math.floor(1024*1024/(new Date()-d)*1000/1024/1024);
			console.log('speed: '+speed+'Mb/s');
			done();
		});
	});
});
