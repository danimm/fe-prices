import { randomUUID } from "crypto";
import { Product } from "~/types/product";

export default defineEventHandler(async event => {
    const [price1, price2 ] = await $fetch('/api/prices')

    return [
        {
            id: randomUUID(),
            price: price1,
            description: 'molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quid'
        },
        {
            id: randomUUID(),
            price: price2,
            description: 'm quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rer'
        },
    ] as Product[]
})
