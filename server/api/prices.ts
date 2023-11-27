import { randomUUID } from "crypto";
import { Price } from "~/types/price";

export default defineEventHandler(async event => {
    function randomNumber(min = 1, max = 10) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

  return [
      { id: randomUUID(), amount: randomNumber() },
      { id: randomUUID(), amount: randomNumber() },
  ] as Price[]
})
