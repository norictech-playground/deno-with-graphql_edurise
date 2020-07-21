import { Application } from 'https://deno.land/x/oak/mod.ts'
import { graphql } from 'https://cdn.pika.dev/graphql@^15.1.0'
import router from './router.ts'

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Server running on port 4000`)
await app.listen({ port: 4000 })