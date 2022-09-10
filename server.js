'use strict'
const fastify = require('fastify')({ logger: 0 })

fastify.register(require('@fastify/formbody')) // acc application/x-www-form-urlencoded
fastify.register(require('@fastify/multipart'), { attachFieldsToBody: 'keyValues' }) // acc multipart/form-data

fastify.post('/', async (req, rep) => {
    // const data = await req.file()
    console.log(req.body);
    return rep.send('req.body')
})


fastify.listen({ port: Number(process.env.PORT ?? 8000) }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Started server at ${address}`)
})