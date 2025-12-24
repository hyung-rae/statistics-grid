// 기본 컨텐츠 타입
export const CONTENT_TYPES = [
  "series",
  "distribution",
  "table",
  "feed",
] as const
export type ContentType = (typeof CONTENT_TYPES)[number]

// 차트 그룹 타입
export const CHART_GROUPS = {
  series: ["line", "bar", "area", "column"] as const, // 시계열/다중 시리즈
  distribution: ["pie", "donut", "radialBar"] as const, // 분포/비율
  table: ["default"] as const, // 테이블
  feed: ["default"] as const, // 피드
} as const

// parsing content id 결과값
export type ParsedContentId = {
  type: ContentType
  subType: string
  uuid: string
}
