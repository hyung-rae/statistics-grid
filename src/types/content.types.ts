import type { LayoutItem } from "react-grid-layout"

export const CONTENTS = {
  series: ["line", "bar", "column"] as const,
  distribution: ["pie", "donut", "circle"] as const,
  table: ["default"] as const,
  feed: ["default"] as const,
} as const

export type ContentType = keyof typeof CONTENTS
export type ContentSubType<T extends ContentType> = (typeof CONTENTS)[T][number]

export type CustomLayoutItem = {
  [key in ContentType]: LayoutItem & {
    type: key
    subType: (typeof CONTENTS)[key][number]
  }
}[ContentType]

export type CustomLayout = readonly CustomLayoutItem[]
