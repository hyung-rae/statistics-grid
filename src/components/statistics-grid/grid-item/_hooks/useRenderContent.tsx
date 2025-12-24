import FeedData from "@/components/contents/feed-data"
import LineChart from "@/components/contents/line-chart"
import PieChart from "@/components/contents/pie-chart"
import TableData from "@/components/contents/table-data"
import type { ContentType } from "@/types"
import type { ReactElement } from "react"

const useRenderContent = (type: ContentType): ReactElement => {
  if (type === "series") return <LineChart />
  if (type === "distribution") return <PieChart />
  if (type === "table") return <TableData />

  return <FeedData />
}

export default useRenderContent
