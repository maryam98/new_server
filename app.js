const http=require('http')
const port=5000
//////////////////////////////////////
const server = http.createServer (function(request, response) {
response.write('server is running!')
response.end()
});
/////////////////////////////////////
server.listen(port,function (error){
	console.log(error)
	if(error){
		throw new Error(error.message)
	}
	else{
		console.log('listening on port'+port)
	}
})