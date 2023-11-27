import {randomUUID} from "crypto";
import randomNumber from "~/utils/randomNumber";

interface Prices {
    id: string
    amount: number
}

export default defineEventHandler(async event => {
  return [
      { id: randomUUID(), amount: randomNumber() },
      { id: randomUUID(), amount: randomNumber() },
  ] as Prices[]
})
