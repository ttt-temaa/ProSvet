export const site = {
  name: "Про Свет",
  legalName: "ООО «Про Свет»",
  tagline: "Светотехнические решения для бизнеса, производства и государственных объектов",
  description:
    "Проектируем, подбираем, поставляем и монтируем светодиодное освещение под задачи конкретного объекта любой сложности.",
  phone: "+7 (917) 677-90-99",
  phoneHref: "tel:+79176779099",
  phoneAlt: "+7 (917) 066-87-12",
  phoneAltHref: "tel:+79170668712",
  email: "pro21svet@yandex.ru",
  emailHref: "mailto:pro21svet@yandex.ru",
  address: "428027, г. Чебоксары, ул. Хузангая, 14, офис 208, 208 В",
  city: "Чебоксары",
  region: "Чувашская Республика",
  geo: "Чувашия + регионы РФ",
  hours: "Пн–Пт, 9:00–18:00",
  maxHref: "https://max.ru",
  coords: { lat: 56.143, lon: 47.252 },
  stats: {
    years: "5+",
    yearsLabel: "лет на рынке",
    objects: "150+",
    objectsLabel: "реализованных объектов",
    directions: "6",
    directionsLabel: "основных направлений",
    geo: "РФ",
    geoLabel: "география поставок",
    team: "5",
    warranty: "от 5 лет",
    service: "3 рабочих дня",
    delivery: "15–30 рабочих дней",
    project: "20–40 рабочих дней",
    payback: "в среднем 2 года",
  },
} as const;

export const nav = [
  { href: "/catalog", label: "Каталог" },
  { href: "/services", label: "Услуги" },
  { href: "/solutions", label: "Решения" },
  { href: "/projects", label: "Проекты" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" },
] as const;

export const footerNav = {
  company: [
    { href: "/about", label: "О компании" },
    { href: "/projects", label: "Проекты" },
    { href: "/partners", label: "Проектировщикам" },
    { href: "/contacts", label: "Контакты" },
  ],
  solutions: [
    { href: "/solutions/proizvodstvo", label: "Производство" },
    { href: "/solutions/sklady", label: "Склады" },
    { href: "/solutions/obrazovanie", label: "Образование" },
    { href: "/solutions/meditsina", label: "Медицина" },
    { href: "/solutions/ofisy", label: "Офисы" },
    { href: "/solutions/torgovlya", label: "Торговля" },
    { href: "/solutions/ulichnoe-osveshchenie", label: "Улица" },
    { href: "/solutions/parkovoe", label: "Парк" },
  ],
  services: [
    { href: "/services/proektirovanie", label: "Проектирование" },
    { href: "/services/postavka", label: "Поставка" },
    { href: "/services/montazh", label: "Монтаж" },
    { href: "/services/modernizatsiya", label: "Модернизация" },
  ],
} as const;

export const objectTypes = [
  "Производство",
  "Склад",
  "Образование",
  "Медицина",
  "Офис / коммерция",
  "Торговля",
  "Улица / территория",
  "Парк / общественное пространство",
  "Другое",
] as const;

export const taskTypes = [
  "Поставка оборудования",
  "Проектирование",
  "Монтаж",
  "Модернизация",
  "Комплекс под ключ",
  "Консультация",
] as const;
