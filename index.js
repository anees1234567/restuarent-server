
// import json server
const jsonserver=require ('json-server')

// create a json server app
const server=jsonserver.create()


// setup path for db.json

const router=jsonserver.router('db.json')
// return a  middleware used by json server
const middleware=jsonserver.defaults()

// setup port

const port=process.env.PORT || 4000

// user router,middleware in json

server.use(middleware)
server.use(router)

// app.listen

server.listen(port,()=>{
    console.log('json sever is started at port 3000');
})

