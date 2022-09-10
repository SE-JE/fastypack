'use strict'

/* require */
require('dotenv').config();
const fastify = require('fastify')({ logger: false })


/* middleware */
fastify.register(require('@fastify/formbody')) // acc application/x-www-form-urlencoded
fastify.register(require('@fastify/multipart'), { attachFieldsToBody: 'keyValues' }) // acc multipart/form-data


/* load routes */
fastify.register(require('./app/routes'), {}); //prefix: '/v1'



/* listen on port */
fastify.listen({ port: Number(process.env.PORT ?? 8000) }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Started server at ${address}`)
})