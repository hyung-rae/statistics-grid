import axiosInstance from "./axios"

export const getStatisticsList = async () => {
  const { data } = await axiosInstance.get("/statistics")
  return data
}
