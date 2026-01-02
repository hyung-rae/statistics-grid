import type { ContentType } from "@/types"
import axiosInstance from "./axios"

export const getStatisticsList = async <P>(params: { type: ContentType }): Promise<P> => {
  const { data } = await axiosInstance.get("/statistics", { params })
  return data
}

export const getStatisticsFeed = async <P>(id: string): Promise<P> => {
  const { data } = await axiosInstance.get(`/statistics/feed/${id}`)
  return data
}

export const getStatisticsDistribution = async <P>(id: string): Promise<P> => {
  const { data } = await axiosInstance.get(`/statistics/distribution/${id}`)
  return data
}
