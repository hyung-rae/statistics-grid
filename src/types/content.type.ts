// 기본 컨텐츠 타입
export const CONTENT_TYPES = ["chart", "table", "feed"] as const
export type ContentType = (typeof CONTENT_TYPES)[number]

// 차트 타입 정의
export const CHART_TYPES = ["line", "bar", "pie"] as const
export type ChartType = (typeof CHART_TYPES)[number]

// 각 컨텐츠 타입별 서브타입
export type ContentSubType = {
  chart: ChartType
  table: "default"
  feed: "default"
}

// 컨텐츠 ID 파싱 결과
export interface ParsedContentId {
  type: ContentType
  subType: string
  uuid: string
}
