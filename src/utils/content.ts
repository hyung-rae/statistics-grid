import {
  CHART_GROUPS,
  type ContentSubType,
  type ContentType,
  type ParsedContentId,
} from "@/types"
import { v4 as uuidv4 } from "uuid"

// 컨텐츠 ID 파싱 함수
export const parseContentId = (id: string): ParsedContentId => {
  const [type, subType, uuid] = id.split(":")
  return {
    type: type as ContentType,
    subType: subType as ContentSubType,
    uuid,
  }
}

// 컨텐츠 ID 생성 함수
export const createContentId = (type: ContentType): string => {
  const subType = CHART_GROUPS[type][0]
  return `${type}:${subType}:${uuidv4()}`
}
