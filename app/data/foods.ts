export type Category = "main" | "side" | "drink";

export type Food = {
  id: number;
  name: string;
  image: string;
  category: Category;
  mood?: string[];
};

export const foods: Food[] = [
  // ===== MÓN CHÍNH =====
  {
    id: 1,
    name: "Bánh bèo chén",
    image: "https://statics.vinwonders.com/dac-san-quy-nhon-5_1703772219.jpg",
    category: "main",
    mood: ["nhẹ", "truyền thống"],
  },
  {
    id: 2,
    name: "Cháo bò",
    image: "https://statics.vinwonders.com/dac-san-quy-nhon-6_1703772250.jpg",
    category: "main",
    mood: ["no", "sáng"],
  },
  {
    id: 3,
    name: "Bánh mì Lagu",
    image: "https://statics.vinwonders.com/dac-san-quy-nhon-8_1703772305.jpg",
    category: "main",
    mood: ["ăn nhanh"],
  },
  {
    id: 4,
    name: "Bánh xèo tôm nhảy",
    image: "https://statics.vinwonders.com/dac-san-quy-nhon-11_1703772411.jpg",
    category: "main",
    mood: ["giòn", "tối"],
  },
  {
    id: 5,
    name: "Bánh căn nước cá",
    image: "https://statics.vinwonders.com/dac-san-quy-nhon-13_1703772476.jpeg",
    category: "main",
    mood: ["đậm vị", "hải sản"],
  },
  {
    id: 6,
    name: "Mỳ cay",
    image:
      "https://micayseoul.com.vn/wp-content/uploads/2024/07/mi-tron-thap-cam-Photoroom.png",
    category: "main",
    mood: ["cay", "ăn nhanh"],
  },
  {
    id: 7,
    name: "Bún đậu",
    image:
      "https://cdn.zsoft.solutions/poseidon-web/app/media/Nau-an/01.2024/10032024-bun-dau-001.jpg",
    category: "main",
    mood: ["no", "đậm vị", "truyền thống"],
  },
  {
    id: 8,
    name: "Bánh canh cua",
    image:
      "https://banhcanhcua14.com/upload/product/banh-canh-cua-141661496681.jpg",
    category: "main",
    mood: ["no", "nóng", "trưa"],
  },

  // ===== MÓN PHỤ =====
  {
    id: 101,
    name: "Ốc các loại",
    image:
      "https://static.vinwonders.com/production/optimize_quan-oc-quy-nhon-1.png",
    category: "side",
    mood: ["lai rai", "hải sản"],
  },
  {
    id: 102,
    name: "Nem chua",
    image:
      "https://quangnamfood.com/wp-content/uploads/2021/04/IMG_7788-e1684903034340.jpeg",
    category: "side",
    mood: ["lai rai", "chua"],
  },
  {
    id: 103,
    name: "Bắp xào",
    image:
      "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_10_30_638342616231719524_cach-lam-bap-xao.jpg",
    category: "side",
    mood: ["ăn vặt", "nóng"],
  },
  {
    id: 104,
    name: "Bánh tráng trộn",
    image:
      "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/cach_lam_banh_trang_tron_tac_2_6efea7dc72.png",
    category: "side",
    mood: ["ăn vặt", "cay"],
  },
  {
    id: 105,
    name: "Trứng vịt lộn",
    image: "https://photo.znews.vn/w660/Uploaded/zxaint/2024_10_10/ava_2_.jpg",
    category: "side",
    mood: ["no", "tối"],
  },
  {
    id: 106,
    name: "Chân gà",
    image:
      "https://cdn.tgdd.vn/2021/10/CookRecipe/Avatar/chan-ga-sot-thai-thumbnail.jpg",
    category: "side",
    mood: ["lai rai", "cay"],
  },

  // ===== NƯỚC UỐNG =====
  {
    id: 201,
    name: "Trà sữa",
    image:
      "https://miraquynhon.com/wp-content/uploads/sites/2/2023/07/tra-sua-tocotoco-miraquynhon.jpg",
    category: "drink",
    mood: ["ngọt", "mát"],
  },
  {
    id: 202,
    name: "Chè",
    image: "https://static.vinwonders.com/production/che-quy-nhon-10.jpeg",
    category: "drink",
    mood: ["ngọt", "tráng miệng"],
  },
];
