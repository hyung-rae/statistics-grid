export const ITEM_CONFIG = {
  chart: { id: "chart:line", minW: 3, minH: 2, label: "차트" },
  table: { id: "table", minW: 3, minH: 2, label: "테이블" },
  feed: { id: "feed", minW: 1, minH: 1, label: "피드" },
} as const

export type ItemType = keyof typeof ITEM_CONFIG
