import { useCallback, useMemo, useState } from "react"
import {
  useContainerWidth,
  type Layout,
  type LayoutItem,
  type UseContainerWidthResult,
} from "react-grid-layout"
import {
  gridBounds,
  minMaxSize,
  type LayoutConstraint,
} from "react-grid-layout/core"
import { GRID_COLS, GRID_PADDING } from "../_constants"

interface UseGridLayoutResult
  extends Pick<UseContainerWidthResult, "containerRef" | "mounted" | "width"> {
  layout: LayoutItem[]
  rowHeight: number
  constraints: LayoutConstraint[]
  onAdd: (i: string, minW: number, minH: number) => void
  onLayoutChange: (newLayout: Layout) => void
  onDelete: (id: string) => void
  onChangeType: (preId: string, nextId: string) => void
}

const useGridLayout = (): UseGridLayoutResult => {
  const [layout, setLayout] = useState<LayoutItem[]>([])
  const { width, containerRef, mounted } = useContainerWidth()

  const rowHeight = useMemo(() => {
    return (width - GRID_PADDING * 2) / GRID_COLS
  }, [width])

  const constraints = useMemo<LayoutConstraint[]>(() => {
    return [gridBounds, minMaxSize]
  }, [])

  const onLayoutChange = useCallback((newLayout: Layout) => {
    setLayout([...newLayout])
  }, [])

  const onAdd = (i: string, minW: number, minH: number) => {
    const item: LayoutItem = {
      i,
      x: layout.length % GRID_COLS,
      y: Infinity,
      w: minW,
      h: minH,
    }

    setLayout((pre) => [...pre, item])
  }

  const onChangeType = (preId: string, nextId: string) => {
    setLayout((pre) =>
      pre.map((item) => (item.i === preId ? { ...item, i: nextId } : item))
    )
  }

  const onDelete = (id: string) => {
    const filterItems = layout.filter((item) => item.i !== id)
    setLayout(filterItems)
  }

  return {
    containerRef,
    mounted,
    width,
    layout,
    rowHeight,
    constraints,
    onAdd,
    onLayoutChange,
    onDelete,
    onChangeType,
  }
}

export default useGridLayout
