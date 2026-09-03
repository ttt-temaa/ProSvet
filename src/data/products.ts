export type ProductCategory =
  | "promyshlennye"
  | "ofisnye"
  | "obrazovanie"
  | "meditsina"
  | "ulichnye"
  | "parkovye"
  | "prozhektory"
  | "torgovye";

export type Product = {
  slug: string;
  name: string;
  sku: string;
  brand: string;
  category: ProductCategory;
  applications: string[];
  power: number;
  flux: number;
  ip: string;
  cct: string;
  cri: string;
  mounting: string;
  size: string;
  voltage: string;
  lifetime: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
};

export const categories: {
  slug: ProductCategory;
  name: string;
  short: string;
  description: string;
}[] = [
  {
    slug: "promyshlennye",
    name: "Промышленные светильники",
    short: "Производство",
    description: "High-bay и линейные светильники для цехов, ангаров и высоких пролётов.",
  },
  {
    slug: "ofisnye",
    name: "Офисные светильники",
    short: "Офис",
    description: "Встраиваемые и накладные панели для комфортной работы без пульсации.",
  },
  {
    slug: "obrazovanie",
    name: "Светильники для образовательных учреждений",
    short: "Образование",
    description: "Освещение классов, коридоров и спортзалов с учётом СанПиН.",
  },
  {
    slug: "meditsina",
    name: "Светильники для медицинских учреждений",
    short: "Медицина",
    description: "Моющиеся корпуса и стабильный спектр для палат, коридоров и кабинетов.",
  },
  {
    slug: "ulichnye",
    name: "Уличные светильники",
    short: "Улица",
    description: "Консольные и торшерные светильники для дорог, дворов и площадок.",
  },
  {
    slug: "parkovye",
    name: "Парковые комплексы",
    short: "Парк",
    description: "Опоры, торшеры и ландшафтные решения для общественных пространств.",
  },
  {
    slug: "prozhektory",
    name: "Прожекторы",
    short: "Прожекторы",
    description: "Акцентное и заливающее освещение фасадов, площадок и складов.",
  },
  {
    slug: "torgovye",
    name: "Торговые светильники",
    short: "Торговля",
    description: "Трековые и карданные системы для витрин и торговых залов.",
  },
];

export const products: Product[] = [
  {
    slug: "hb-150-prom",
    name: "Промышленный светильник HB-150",
    sku: "PS-HB-150",
    brand: "Мультибренд",
    category: "promyshlennye",
    applications: ["Производство", "Склад"],
    power: 150,
    flux: 21000,
    ip: "IP65",
    cct: "5000 K",
    cri: "Ra ≥ 80",
    mounting: "Подвес / консоль",
    size: "Ø 380 × 165 мм",
    voltage: "176–264 В",
    lifetime: "50 000 ч",
    image: "/images/products/hb-150.jpg",
    description:
      "Светильник для высоких пролётов цехов и складов. Подбирается под высоту подвеса, норму освещённости и условия среды.",
    specs: [
      { label: "Мощность", value: "150 Вт" },
      { label: "Световой поток", value: "21 000 лм" },
      { label: "Эффективность", value: "140 лм/Вт" },
      { label: "Степень защиты", value: "IP65" },
      { label: "Цветовая температура", value: "5000 K" },
      { label: "Индекс цветопередачи", value: "Ra ≥ 80" },
      { label: "Напряжение", value: "176–264 В" },
      { label: "Срок службы", value: "50 000 ч" },
      { label: "Гарантия", value: "от 5 лет" },
    ],
  },
  {
    slug: "ln-80-line",
    name: "Линейный промышленный LN-80",
    sku: "PS-LN-80",
    brand: "Мультибренд",
    category: "promyshlennye",
    applications: ["Производство", "Склад"],
    power: 80,
    flux: 11200,
    ip: "IP54",
    cct: "4000 K",
    cri: "Ra ≥ 80",
    mounting: "Подвес / накладной",
    size: "1200 × 72 × 68 мм",
    voltage: "176–264 В",
    lifetime: "50 000 ч",
    image: "/images/products/ln-80.jpg",
    description:
      "Линейный светильник для линий сборки, проходов и зон комплектации. Даёт равномерную засветку без резких теней.",
    specs: [
      { label: "Мощность", value: "80 Вт" },
      { label: "Световой поток", value: "11 200 лм" },
      { label: "Степень защиты", value: "IP54" },
      { label: "Цветовая температура", value: "4000 K" },
      { label: "Монтаж", value: "Подвес / накладной" },
      { label: "Гарантия", value: "от 5 лет" },
    ],
  },
  {
    slug: "op-36-panel",
    name: "Офисная панель OP-36",
    sku: "PS-OP-36",
    brand: "Мультибренд",
    category: "ofisnye",
    applications: ["Офис / коммерция"],
    power: 36,
    flux: 3960,
    ip: "IP40",
    cct: "4000 K",
    cri: "Ra ≥ 80",
    mounting: "Встраиваемый / накладной",
    size: "595 × 595 × 10 мм",
    voltage: "220 В",
    lifetime: "50 000 ч",
    image: "/images/products/op-36.jpg",
    description:
      "Панель для офисных потолков Армстронг и гипсокартона. Низкий коэффициент пульсации для длительной работы за компьютером.",
    specs: [
      { label: "Мощность", value: "36 Вт" },
      { label: "Световой поток", value: "3 960 лм" },
      { label: "Степень защиты", value: "IP40" },
      { label: "Цветовая температура", value: "4000 K" },
      { label: "Габариты", value: "595 × 595 мм" },
      { label: "Гарантия", value: "от 5 лет" },
    ],
  },
  {
    slug: "sch-40-class",
    name: "Светильник для класса SCH-40",
    sku: "PS-SCH-40",
    brand: "Мультибренд",
    category: "obrazovanie",
    applications: ["Образование"],
    power: 40,
    flux: 4400,
    ip: "IP40",
    cct: "4000 K",
    cri: "Ra ≥ 80",
    mounting: "Накладной / подвес",
    size: "1195 × 180 × 55 мм",
    voltage: "220 В",
    lifetime: "50 000 ч",
    image: "/images/products/sch-40.jpg",
    description:
      "Линейный светильник для учебных помещений. Спектр и яркость подбираются под нормы освещённости рабочих поверхностей парт.",
    specs: [
      { label: "Мощность", value: "40 Вт" },
      { label: "Световой поток", value: "4 400 лм" },
      { label: "Цветовая температура", value: "4000 K" },
      { label: "Назначение", value: "Учебные помещения" },
      { label: "Гарантия", value: "от 5 лет" },
    ],
  },
  {
    slug: "md-48-clean",
    name: "Медицинский светильник MD-48",
    sku: "PS-MD-48",
    brand: "Мультибренд",
    category: "meditsina",
    applications: ["Медицина"],
    power: 48,
    flux: 5280,
    ip: "IP54",
    cct: "4000 K",
    cri: "Ra ≥ 90",
    mounting: "Накладной / встраиваемый",
    size: "1200 × 200 × 60 мм",
    voltage: "220 В",
    lifetime: "50 000 ч",
    image: "/images/products/md-48.jpg",
    description:
      "Светильник с повышенным индексом цветопередачи и моющимся корпусом. Подходит для коридоров, палат и кабинетов осмотра.",
    specs: [
      { label: "Мощность", value: "48 Вт" },
      { label: "Световой поток", value: "5 280 лм" },
      { label: "CRI", value: "Ra ≥ 90" },
      { label: "Степень защиты", value: "IP54" },
      { label: "Гарантия", value: "от 5 лет" },
    ],
  },
  {
    slug: "st-80-road",
    name: "Консольный уличный ST-80",
    sku: "PS-ST-80",
    brand: "Мультибренд",
    category: "ulichnye",
    applications: ["Улица / территория"],
    power: 80,
    flux: 10400,
    ip: "IP66",
    cct: "4000 K",
    cri: "Ra ≥ 70",
    mounting: "Консоль на опору",
    size: "620 × 250 × 110 мм",
    voltage: "176–264 В",
    lifetime: "50 000 ч",
    image: "/images/products/st-80.jpg",
    description:
      "Консольный светильник для дорог, проездов и территорий предприятий. Оптика подбирается под ширину проезжей части.",
    specs: [
      { label: "Мощность", value: "80 Вт" },
      { label: "Световой поток", value: "10 400 лм" },
      { label: "Степень защиты", value: "IP66" },
      { label: "Монтаж", value: "Консоль" },
      { label: "Гарантия", value: "от 5 лет" },
    ],
  },
  {
    slug: "pk-40-park",
    name: "Парковый торшер PK-40",
    sku: "PS-PK-40",
    brand: "Мультибренд",
    category: "parkovye",
    applications: ["Парк / общественное пространство", "Улица / территория"],
    power: 40,
    flux: 4800,
    ip: "IP65",
    cct: "3000 K",
    cri: "Ra ≥ 80",
    mounting: "Опора / торшер",
    size: "Высота опоры 3–5 м",
    voltage: "220 В",
    lifetime: "50 000 ч",
    image: "/images/products/pk-40.jpg",
    description:
      "Торшер тёплого спектра для парков, скверов и дворов жилых комплексов. Комплектуется опорой и закладной.",
    specs: [
      { label: "Мощность", value: "40 Вт" },
      { label: "Световой поток", value: "4 800 лм" },
      { label: "Цветовая температура", value: "3000 K" },
      { label: "Степень защиты", value: "IP65" },
      { label: "Гарантия", value: "от 5 лет" },
    ],
  },
  {
    slug: "fl-100-flood",
    name: "Прожектор FL-100",
    sku: "PS-FL-100",
    brand: "Мультибренд",
    category: "prozhektory",
    applications: ["Производство", "Склад", "Улица / территория"],
    power: 100,
    flux: 13000,
    ip: "IP66",
    cct: "5000 K",
    cri: "Ra ≥ 70",
    mounting: "Кронштейн",
    size: "290 × 230 × 55 мм",
    voltage: "176–264 В",
    lifetime: "50 000 ч",
    image: "/images/products/fl-100.jpg",
    description:
      "Заливающий прожектор для фасадов, открытых площадок и зон разгрузки. Угол света подбирается под задачу.",
    specs: [
      { label: "Мощность", value: "100 Вт" },
      { label: "Световой поток", value: "13 000 лм" },
      { label: "Степень защиты", value: "IP66" },
      { label: "Цветовая температура", value: "5000 K" },
      { label: "Гарантия", value: "от 5 лет" },
    ],
  },
  {
    slug: "tr-30-track",
    name: "Трековый светильник TR-30",
    sku: "PS-TR-30",
    brand: "Мультибренд",
    category: "torgovye",
    applications: ["Торговля", "Офис / коммерция"],
    power: 30,
    flux: 2700,
    ip: "IP20",
    cct: "3000 K / 4000 K",
    cri: "Ra ≥ 90",
    mounting: "Трековый шинопровод",
    size: "Ø 90 × 160 мм",
    voltage: "48 В / 220 В",
    lifetime: "50 000 ч",
    image: "/images/products/tr-30.jpg",
    description:
      "Акцентный трековый светильник для витрин и торговых залов. Высокий CRI сохраняет цвет товара.",
    specs: [
      { label: "Мощность", value: "30 Вт" },
      { label: "Световой поток", value: "2 700 лм" },
      { label: "CRI", value: "Ra ≥ 90" },
      { label: "Монтаж", value: "Шинопровод" },
      { label: "Гарантия", value: "от 5 лет" },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: ProductCategory) {
  return products.filter((p) => p.category === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter((p) =>
    [p.name, p.sku, p.brand, p.category, ...p.applications].join(" ").toLowerCase().includes(q),
  );
}
