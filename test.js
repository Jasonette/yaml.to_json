describe('yaml to json', function(){
	it('should work', function(){
    // read cson file
    var fs = require('fs')
		var str = fs.readFileSync(process.cwd() + "/data.yml").toString()

    // require + setup
    require('to_json').use('yaml', require('./index'))

    // usage
		var json = str.to_json('yaml')	
		console.log("parsed = ", json)
	})
})
