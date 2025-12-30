import type { SelectOptionType } from "@/types"
import { MenuItem, Select, type SelectChangeEvent } from "@mui/material"

interface CustomSelectProps {
  value: string | undefined
  options: SelectOptionType[]
  placeholder?: string
  onChange: (event: SelectChangeEvent) => void
}

const CustomSelect = ({
  value = "",
  options,
  placeholder,
  onChange,
}: CustomSelectProps) => {
  const renderValue = (selected: string) => {
    if (selected) {
      return options.find((option) => option.value === selected)?.label
    }

    return <span style={{ opacity: 0.5 }}>{placeholder || "Select"}</span>
  }

  return (
    <Select
      displayEmpty
      sx={{
        width: "100%",
        "& .MuiSelect-select": {
          py: "5px",
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: "300px",
            borderRadius: "4px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            mt: 1,
            px: 1,
            "& .MuiMenuItem-root": {
              mb: "4px",
              borderRadius: "4px",
            },
          },
        },
      }}
      value={value}
      onChange={onChange}
      renderValue={renderValue}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </MenuItem>
      ))}
    </Select>
  )
}

export default CustomSelect
