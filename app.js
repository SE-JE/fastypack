'use strict'

/* require package */
require('dotenv').config();
const fastify = require('fastify').fastify({ logger: false })


/* middleware */
fastify.register(require('@fastify/formbody')) // acc application/x-www-form-urlencoded
    .register(require('@fastify/multipart'), { attachFieldsToBody: 'keyValues' }) // acc multipart/form-data
    .register(require('@fastify/cors', { origin: "*" })) // acc cors


/* load routes */
fastify.register(require('./app/routes'), {}); //prefix: '/v1'


/* start server */
fastify.listen({ port: Number(process.env.PORT ?? 8000) }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Started server at ${address}`)
})