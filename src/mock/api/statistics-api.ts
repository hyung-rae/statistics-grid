import { mockAdapter } from "../mockAdapter"

mockAdapter.onGet("/statistics").reply(200, {
  total: 1,
  list: [{ id: 1, name: "test-api" }],
})
