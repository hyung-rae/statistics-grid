import type { LayoutItem } from "react-grid-layout"

export const CONTENTS = {
  series: ["line", "bar", "column"] as const,
  distribution: ["pie", "donut", "circle"] as const,
  table: ["table"] as const,
  feed: ["feed"] as const,
} as const

export type ContentType = keyof typeof CONTENTS
export type ContentSubType<T extends ContentType> = (typeof CONTENTS)[T][number]
export type ContentSubtypes = ContentSubType<
  "distribution" | "series" | "table" | "feed"
>

export type CustomLayoutItem = {
  [key in ContentType]: LayoutItem & {
    type: key
    subType: (typeof CONTENTS)[key][number]
    apiUrl?: string
  }
}[ContentType]

export type CustomLayout = readonly CustomLayoutItem[]
