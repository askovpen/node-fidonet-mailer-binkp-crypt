var assert = require('assert');
var crypt=require('../');
var crypto=require('crypto');
var a=new Buffer(200);
a.fill('a');
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
	it('calculates correct bugfix', function(){
		client.init_keys();
		var b=client.encrypt_buf(a);
		client.init_keys();
		a.fill('a');
		assert.deepEqual(a,client.decrypt_buf(b));
	});
	it('calculates speed decoding 1Mb', function(done){
		crypto.randomBytes(1024*1024, function(ex, buf) {
			if (ex) throw ex;
			client.init_keys();
			var d=new Date();
			client.decrypt_buf(buf);
			var tm=new Date()-d;
			var speed=Math.floor(1024*1024/tm*1000/1024/1024);
			console.log('decoding 1Mb speed: '+speed+'Mb/s, time: '+tm+'ms');
			done();
		});
	});
});
