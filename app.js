'use strict'

/* import package */
import fastifyCors from '@fastify/cors';
import formBodyPlugin from '@fastify/formbody';
import fastifyMultipart from '@fastify/multipart';
import { config } from 'dotenv';
import { fastify } from 'fastify';
import routes from './app/routes.js';


/* init package */
config();
const app = fastify({ logger: true })


/* register middleware */
app.register(formBodyPlugin) // acc application/x-www-form-urlencoded
    .register(fastifyMultipart, { attachFieldsToBody: 'keyValues' }) // acc multipart/form-data
    .register(fastifyCors, { origin: "*" }) // acc cors


/* load routes */
app.register(routes); //prefix: '/v1'



/* start server */
app.listen({ port: Number(process.env.PORT ?? 8000) }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Started server at ${address}`)
})