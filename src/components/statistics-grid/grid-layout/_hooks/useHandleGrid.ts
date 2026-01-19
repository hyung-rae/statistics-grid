import type { CustomLayoutItem } from "@/types"
import { useMemo, useState } from "react"
import { useContainerWidth, type Layout } from "react-grid-layout"
import { gridBounds, minMaxSize, type LayoutConstraint } from "react-grid-layout/core"
import { GRID_COLS, GRID_PADDING } from "../_constants"
import { useLocalStorage } from "@/hooks"

const INIT_LAYOUT: CustomLayoutItem[] = [
  {
    i: "84d01e00-f35b-46b4-919d-ef003063c0c2",
    type: "feed",
    subType: "feed",
    dataId: "totalVisit",
    w: 1,
    h: 1,
    x: 0,
    y: 0,
    moved: false,
    static: false,
  },
  {
    i: "1607d2d9-0dd3-4168-98de-2e581650fe63",
    type: "distribution",
    subType: "radialBar",
    dataId: "device",
    w: 1,
    h: 1,
    x: 2,
    y: 2,
    moved: false,
    static: false,
  },
  {
    i: "ee7fecd9-9726-46d4-8e17-0516985d91c3",
    type: "series",
    subType: "line",
    dataId: "refundAmount",
    w: 3,
    h: 2,
    x: 3,
    y: 1,
    moved: false,
    static: false,
  },
  {
    i: "6c2f7572-0452-4542-b1d6-f108c4e14445",
    type: "feed",
    subType: "feed",
    dataId: "totalPageView",
    w: 1,
    h: 1,
    x: 0,
    y: 1,
    moved: false,
    static: false,
  },
  {
    i: "5cd50514-3ddb-4c42-8b7a-a787c05396ea",
    type: "series",
    subType: "line",
    dataId: "refundAmount",
    w: 3,
    h: 1,
    x: 3,
    y: 0,
    moved: false,
    static: false,
  },
  {
    i: "29414e09-9e99-4edb-bb0c-aec7c435da95",
    type: "feed",
    subType: "feed",
    dataId: "totalNewVisit",
    w: 1,
    h: 1,
    x: 1,
    y: 2,
    moved: false,
    static: false,
  },
  {
    i: "821b91e7-44a4-4b1b-8d02-28b71a033e84",
    type: "distribution",
    subType: "donut",
    dataId: "location",
    w: 2,
    h: 2,
    x: 1,
    y: 0,
    moved: false,
    static: false,
  },
]

const useHandleGrid = () => {
  const { value, setValue } = useLocalStorage<CustomLayoutItem[]>("layout", INIT_LAYOUT)
  const [layout, setLayout] = useState<CustomLayoutItem[]>(value ?? [])
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

    setLayout((pre) => [...pre, content])
  }

  const onDeleteContent = (id: string) => {
    setLayout((pre) => pre.filter((item) => item.i !== id))
  }

  const onChangeContent = (targetId: string, updateInfo: Partial<CustomLayoutItem>) => {
    setLayout((preLayout) => {
      return preLayout.map((item) =>
        item.i === targetId ? { ...item, ...updateInfo } : item,
      ) as CustomLayoutItem[]
    })
  }

  const saveLayout = () => {
    setValue(layout)
  }

  const resetLayout = () => {
    setLayout(value ?? [])
  }

  const removeLayout = () => {
    setLayout([])
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
    saveLayout,
    resetLayout,
    removeLayout,
  }
}

export default useHandleGrid
export type UseHandleGridResult = ReturnType<typeof useHandleGrid>
