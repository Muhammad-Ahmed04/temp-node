const http = require('http')

const server = http.createServer((req,res) => {
if(req.url == '/'){
    res.end('Welcome To Our HomePage')
}
if(req.url == '/about'){
    res.end('This Is Our About Section')
}
res.end(`
<h1>Oops!</h1>
<p>We Can't Seem To Find This Page</p>
<a href="/"> back home </a>
`)
})

server.listen(5000)