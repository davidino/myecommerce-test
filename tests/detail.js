var Code = require('code');   // assertion library 
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var request = require('superagent');



lab.experiment('requests', function(){
  lab.test('should return an item', function(done){
    request.get('http://localhost:3000/item/0')
      .set('Accept', 'application/json')
      .end(function(res){
        Code.expect(res.statusCode).to.equal(200)
        done()
      })
  })

  lab.test('should return a list', function(done){
    request.get('http://localhost:3000/items')
      .set('Accept', 'application/json')
      .end(function(res){
        Code.expect(res.statusCode).to.equal(200)
        Code.expect(res.body.length).to.equal(2)
        done()
      })
  })

  lab.test('should return a 404 when an item does not exist', function(done){
    request.get('http://localhost:3000/item/1')
      .set('Accept', 'application/json')
      .end(function(res){
        Code.expect(res.statusCode).to.equal(404)
        done()
      })
  })
})
