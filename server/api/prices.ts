import { randomUUID } from "crypto";
import { Price } from "~/types/price";
import randomNumber from "~/utils/randomNumber";

export default defineEventHandler(async event => {
  return [
      { id: randomUUID(), amount: randomNumber() },
      { id: randomUUID(), amount: randomNumber() },
  ] as Price[]
})
