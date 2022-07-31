
const http = require("http")
const fs = require("fs");
const server = http.createServer((req, res) => {
   
    console.log(req.url)
      if(req.url === "/textsync"){
        try{
        const data = fs.readFileSync("./sync.txt", {encoding : "utf-8"})
            res.end(data)
        }
        catch{
            res.end("something wrong")
        }
        
     }
     else if(req.url === "/textpromise"){
        try{
            const data = fs.readFileSync("./promise.txt", {encoding : "utf-8"})
                res.end(data)
            }
            catch{
                res.end("something wrong")
            }
     }

    else if(req.url === "/textasync"){
       fs.readFile("./async.txt", {encoding : "utf-8"}, (err, data) => {
            if(err){
                return res.end("something went wrong")
            }
            return res.end(data)
        })
    }
    else if(req.url === "/textstream"){
        const obj = {
            no_of_refrels : 1000,
            sucess_refrels : 800,
            percentage : "80%"
        }
        res.end(JSON.stringify(obj))
    }
    else{
        res.end("welcome to home page")
    }

})
server.listen(5000, () => {
    console.log("Listening on port localhost:5000")
})