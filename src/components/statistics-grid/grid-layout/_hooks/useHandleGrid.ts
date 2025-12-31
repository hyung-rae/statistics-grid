import type { CustomLayoutItem } from "@/types"
import { useMemo, useState } from "react"
import { useContainerWidth, type Layout } from "react-grid-layout"
import {
  gridBounds,
  minMaxSize,
  type LayoutConstraint,
} from "react-grid-layout/core"
import { GRID_COLS, GRID_PADDING } from "../_constants"

const useHandleGrid = () => {
  const [layout, setLayout] = useState<CustomLayoutItem[]>([])
  const { width, containerRef, mounted } = useContainerWidth()

  const rowHeight = useMemo(() => {
    return (width - GRID_PADDING * 2) / GRID_COLS
  }, [width])

  const constraints = useMemo<LayoutConstraint[]>(() => {
    return [gridBounds, minMaxSize]
  }, [])

  const onLayoutChange = (newLayout: Layout) => {
    setLayout((preLayout) => {
      const merged = newLayout.map((newItem) => {
        const preItem = preLayout.find((item) => item.i === newItem.i)
        return preItem ? { ...preItem, ...newItem } : newItem
      })

      return merged as CustomLayoutItem[]
    })
  }

  // todo: position 정하는 부분 계산 추가 필요
  const onAddContent = (content: CustomLayoutItem) => {
    content.x = layout.length % GRID_COLS
    content.y = Infinity

    if (content.type === "feed") {
      content.isResizable = false
    }

    setLayout((pre) => [...pre, content])
  }

  const onDeleteContent = (id: string) => {
    setLayout((pre) => pre.filter((item) => item.i !== id))
  }

  const onChangeContent = (
    targetId: string,
    updateInfo: Partial<CustomLayoutItem>
  ) => {
    setLayout((preLayout) => {
      return preLayout.map((item) =>
        item.i === targetId ? { ...item, ...updateInfo } : item
      ) as CustomLayoutItem[]
    })
  }

  return {
    containerRef,
    mounted,
    width,
    layout,
    rowHeight,
    constraints,
    onLayoutChange,
    onAddContent,
    onDeleteContent,
    onChangeContent,
  }
}

export default useHandleGrid
export type UseHandleGridResult = ReturnType<typeof useHandleGrid>
