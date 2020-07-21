import { Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

router.get('/graphql', (ctx) => {
    ctx.response.body = "Hello!";
})

export default router