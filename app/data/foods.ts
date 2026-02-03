export type Food = {
  id: number;
  name: string;
  image: string;
  mood: string[];
};

export const foods: Food[] = [
  {
    id: 1,
    name: "Bánh bèo chén",
    image: "https://statics.vinwonders.com/dac-san-quy-nhon-5_1703772219.jpg",
    mood: ["truyền thống", "nhẹ", "sáng"],
  },
  {
    id: 2,
    name: "Cháo bò",
    image: "https://statics.vinwonders.com/dac-san-quy-nhon-6_1703772250.jpg",
    mood: ["no", "sáng", "trưa"],
  },
  {
    id: 3,
    name: "Bánh mì Lagu",
    image: "https://statics.vinwonders.com/dac-san-quy-nhon-8_1703772305.jpg",
    mood: ["ăn nhanh", "đi chơi"],
  },
  {
    id: 4,
    name: "Bánh xèo tôm nhảy",
    image: "https://statics.vinwonders.com/dac-san-quy-nhon-11_1703772411.jpg",
    mood: ["giòn", "trưa", "tối"],
  },
  {
    id: 5,
    name: "Bánh căn nước cá",
    image: "https://statics.vinwonders.com/dac-san-quy-nhon-13_1703772476.jpeg",
    mood: ["hải sản", "đậm vị", "tối"],
  },
  {
    id: 6,
    name: "Mỳ cay",
    image:
      "https://micayseoul.com.vn/wp-content/uploads/2024/07/mi-tron-thap-cam-Photoroom.png",
    mood: ["cay", "tối", "ăn nhanh"],
  },
  {
    id: 7,
    name: "Ốc các loại",
    image:
      "https://static.vinwonders.com/production/optimize_quan-oc-quy-nhon-1.png",
    mood: ["hải sản", "lai rai", "tối"],
  },
];
