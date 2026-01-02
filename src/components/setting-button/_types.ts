import type { SvgIconProps } from "@mui/material"
import type { ComponentType } from "react"

export type SettingType = "save" | "reset"

export type Actions = {
  icon: ComponentType<SvgIconProps>
  label: string
  type: SettingType
}
