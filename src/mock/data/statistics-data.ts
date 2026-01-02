export const STATISTICS_LIST = {
  feed: {
    total: 3,
    list: [
      { id: "totalVisit", name: "오늘 총 방문자 수" },
      { id: "totalPageView", name: "오늘 총 페이지 방문 수" },
      { id: "totalNewVisit", name: "오늘 총 신규 방문자 수" },
    ],
  },

  series: {
    total: 2,
    list: [
      { id: "salesAmount", name: "일별 매출액 추이" },
      { id: "refundAmount", name: "일별 환불액 추이" },
    ],
  },

  distribution: {
    total: 2,
    list: [
      { id: "device", name: "기기별 접속률" },
      { id: "location", name: "지역별 접속률" },
    ],
  },

  table: {
    total: 2,
    list: [
      { id: "bestPageRank", name: "가장 많이 본 페이지" },
      { id: "worstPageRank", name: "이탈률 가장 높은 페이지" },
    ],
  },
}

export const FEED_STATISTICS = {
  totalVisit: {
    label: "오늘 총 방문자 수",
    value: 1234,
    unit: "명",
    preValue: 1200,
  },
  totalPageView: {
    label: "오늘 총 페이지 방문 수",
    value: 3300,
    unit: "회",
    preValue: 3400,
  },
  totalNewVisit: {
    label: "오늘 총 신규 방문자 수",
    value: 10,
    unit: "명",
    preValue: 14,
  },
}

export const DISTRIBUTION_STATISTICS = {
  device: {
    label: "기기별 접속률",
    total: 64,
    list: [
      { type: "PC", value: 24 },
      { type: "Mobile", value: 34 },
      { type: "etc", value: 6 },
    ],
  },
  location: {
    label: "지역별 접속률",
    total: 78,
    list: [
      { type: "서울", value: 35 },
      { type: "경기도", value: 20 },
      { type: "부산", value: 12 },
      { type: "인천", value: 6 },
      { type: "etc", value: 5 },
    ],
  },
}
