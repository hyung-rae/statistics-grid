import { CONTENTS, type ContentSubType, type ContentType } from "@/types"
import { v4 as uuidv4 } from "uuid"

export const createContentId = (): string => {
  return uuidv4()
}

export const getInitSubType = <T extends ContentType>(
  type: T
): ContentSubType<T> => {
  return CONTENTS[type][0]
}
