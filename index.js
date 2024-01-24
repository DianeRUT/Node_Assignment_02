const http= require("http");
const behavior= (req, res) => {
    console.log(req.method);
    console.log(req.url);
if(req.method ==='GET' && req.url ==="/books"){
    res.write("hello from GET/books");
    
}
else if(req.method ==='PUT' && req.url ==="/books"){
    res.write("hello from PUT/books")
    
}
else if(req.method ==='DELETE' && req.url ==="/books"){
    res.write("hello from DELETE/books")
    
}
else if(req.method ==='GET' && req.url ==="/books/author"){
    res.write("hello from GET/books/author");
   
}
else if(req.method ==='POST' && req.url ==="/books/author"){
    res.write("hello from POST/books/author")
    
}
else if(req.method ==='PUT' && req.url ==="/books/author"){
    res.write("hello from PUT/books/author")
 
}
res.end();
};
const server = http.createServer(behavior);
server.listen(8900, null, null, null, () =>{
    console.log("server is running on port 8900");
});