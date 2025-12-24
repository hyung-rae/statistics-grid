import type { ContentType } from "@/types"
import type { ComponentType } from "react"
import type { SvgIconProps } from "@mui/material"

export interface CreateItemButtonProps {
  onAdd: (i: string, minW: number, minH: number) => void
}

export type Actions = {
  icon: ComponentType<SvgIconProps>
  label: string
  type: ContentType
}

export type ContentConfig = {
  [key in ContentType]: {
    minW?: number
    minH?: number
  }
}
