import type { ContentSubType } from "@/types"
import FeedData from "./feed-data"

type ContentSubtypes = ContentSubType<
  "distribution" | "series" | "table" | "feed"
>

interface ContentsProps {
  subType: ContentSubtypes
}

const Contents = ({ subType }: ContentsProps) => {
  const renderContent = (subType: ContentSubtypes) => {
    switch (subType) {
      case "feed":
        return <FeedData />
      default:
        return null
    }
  }

  return <div style={{ flex: 1, width: "100%" }}>{renderContent(subType)}</div>
}

export default Contents
