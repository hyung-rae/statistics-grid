import { CONTENT_TYPES, type ContentType, type ParsedContentId } from "@/types"
import { v4 as uuidv4 } from "uuid"

// 컨텐츠 ID 파싱 함수
export const parseContentId = (id: string): ParsedContentId | null => {
  const parts = id.split(":")
  if (parts.length !== 3) return null

  const [type, subType, uuid] = parts

  if (!CONTENT_TYPES.includes(type as ContentType)) return null

  return {
    type: type as ContentType,
    subType,
    uuid,
  }
}

// 컨텐츠 ID 생성 함수
export const createContentId = (type: ContentType, subType: string): string => {
  return `${type}:${subType}:${uuidv4()}`
}
