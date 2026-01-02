import type { CustomLayoutItem } from "@/types"
import type { SvgIconProps } from "@mui/material"
import type { ComponentType } from "react"

export type SettingType = "save" | "reset" | "contents" | "remove"

export type Actions = {
  icon: ComponentType<SvgIconProps>
  label: string
  type: SettingType
}

export type SettingButtonProps = {
  onAdd: (content: CustomLayoutItem) => void
  onSave: () => void
  onReset: () => void
  onRemove: () => void
}
