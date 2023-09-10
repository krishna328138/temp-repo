const os =require('os')
console.log(os.userInfo())
console.log(os.uptime())
const current={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),

}
console.log(current)


const {readFileSync,writeFileSync, write}=require('fs')
const first=readFileSync('./content/first.txt','utf8')
const sec=readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result.txt',`result : ${first},${sec}`,{flag:'a'})




const http=require('http');
const server= http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('home page')
    }
    if (req.url ==='/about'){
        res.end('about section ')
    }
    
    res.end(`<h1>Oops!</h1>`)

})
server.listen(9000)