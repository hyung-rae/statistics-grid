import { DISTRIBUTION_STATISTICS, FEED_STATISTICS, STATISTICS_LIST } from "../data/statistics-data"
import { mockAdapter } from "../mockAdapter"

mockAdapter.onGet("/statistics").reply((config) => {
  const params = new URLSearchParams(config.params)
  const type = params.get("type")

  if (type && type in STATISTICS_LIST) {
    return [200, STATISTICS_LIST[type as keyof typeof STATISTICS_LIST]]
  }

  return [400, { error: "not found" }]
})

mockAdapter.onGet(/\/statistics\/feed\/.*/).reply((config) => {
  const id = config.url?.split("/").pop()

  if (id && id in FEED_STATISTICS) {
    return [200, FEED_STATISTICS[id as keyof typeof FEED_STATISTICS]]
  }

  return [400, { error: "not found" }]
})

mockAdapter.onGet(/\/statistics\/distribution\/.*/).reply((config) => {
  const id = config.url?.split("/").pop()

  if (id && id in DISTRIBUTION_STATISTICS) {
    return [200, DISTRIBUTION_STATISTICS[id as keyof typeof DISTRIBUTION_STATISTICS]]
  }

  return [400, { error: "not found" }]
})
