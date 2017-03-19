const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)
const should = chai.should()

var port = process.env.PORT || '8080'
process.env.PORT = port

var server = require('./server')

describe('Server', function() {
  it("should have an index", function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res) {
      res.should.have.status(200)
      res.should.be.html
      done()
    })
  })
})
