export type ProjectIndustry =
  | "proizvodstvo"
  | "obrazovanie"
  | "meditsina"
  | "commerciya"
  | "sklady"
  | "ulitsa"
  | "parkovoe"
  | "other";

export type Project = {
  slug: string;
  title: string;
  industry: ProjectIndustry;
  industryLabel: string;
  city: string;
  object: string;
  area?: string;
  roomType?: string;
  term?: string;
  fixtures?: string;
  task: string;
  solution: string;
  equipment: string[];
  works: string;
  result: string;
  image: string;
  gallery: string[];
};

export const projectFilters: { slug: "all" | ProjectIndustry; label: string }[] = [
  { slug: "all", label: "Все" },
  { slug: "proizvodstvo", label: "Производство" },
  { slug: "obrazovanie", label: "Образование" },
  { slug: "meditsina", label: "Медицина" },
  { slug: "commerciya", label: "Коммерция" },
  { slug: "sklady", label: "Склады" },
  { slug: "ulitsa", label: "Улица" },
  { slug: "parkovoe", label: "Парковое" },
];

export const projects: Project[] = [
  {
    slug: "ceh-cheboksary",
    title: "Освещение производственного цеха",
    industry: "proizvodstvo",
    industryLabel: "Производство",
    city: "Чебоксары",
    object: "Производственный цех",
    area: "[ОЖИДАЕМ ПОДТВЕРЖДЁННЫЙ ПОКАЗАТЕЛЬ]",
    roomType: "Цех с высокими пролётами",
    term: "20–40 рабочих дней",
    fixtures: "[ОЖИДАЕМ ПОДТВЕРЖДЁННЫЙ ПОКАЗАТЕЛЬ]",
    task: "Заменить устаревшее освещение, повысить равномерность на рабочих местах и снизить энергопотребление без остановки смены.",
    solution:
      "Выполнили светотехнический расчёт, подобрали промышленные светильники под высоту подвеса и организовали монтаж в технологические окна предприятия.",
    equipment: ["Промышленные high-bay светильники", "Линейные светильники проходов"],
    works: "Расчёт, подбор, поставка, монтаж",
    result:
      "Нормируемая освещённость на рабочих зонах. Ориентировочная окупаемость объекта — около 2 лет при гарантии от 5 лет. Точные цифры экономии — [ОЖИДАЕМ КОРРЕКТНУЮ ИНФОРМАЦИЮ ОТ ВАС].",
    image: "/images/projects/factory.jpg",
    gallery: ["/images/projects/factory.jpg", "/images/hero/factory.jpg"],
  },
  {
    slug: "school-cheboksary",
    title: "Освещение школы",
    industry: "obrazovanie",
    industryLabel: "Образование",
    city: "Чебоксары",
    object: "Общеобразовательная школа",
    roomType: "Классы, коридоры, спортзал",
    term: "20–40 рабочих дней",
    task: "Привести освещение учебных помещений к действующим нормам и снизить нагрузку на зрение учеников.",
    solution:
      "Рассчитали освещённость парт и досок, подобрали светильники с подходящим спектром и выполнили поэтапную замену по корпусам.",
    equipment: ["Линейные светильники для классов", "Светильники коридоров и спортзала"],
    works: "Проектирование, поставка, монтаж",
    result:
      "Освещение соответствует назначению помещений. Количественные показатели — [ОЖИДАЕМ КОРРЕКТНУЮ ИНФОРМАЦИЮ ОТ ВАС].",
    image: "/images/projects/school.jpg",
    gallery: ["/images/projects/school.jpg", "/images/hero/school.jpg"],
  },
  {
    slug: "hospital-region",
    title: "Освещение медицинского учреждения",
    industry: "meditsina",
    industryLabel: "Медицина",
    city: "Чувашская Республика",
    object: "Медицинское учреждение",
    roomType: "Коридоры, палаты, кабинеты",
    term: "20–40 рабочих дней",
    task: "Обновить освещение с учётом санитарных требований и режима работы учреждения.",
    solution:
      "Подобрали моющиеся корпуса, стабильный спектр и схему монтажа, которая не нарушает работу отделений.",
    equipment: ["Медицинские линейные светильники", "Светильники общего света"],
    works: "Подбор, поставка, монтаж",
    result: "[ОЖИДАЕМ КОРРЕКТНУЮ ИНФОРМАЦИЮ ОТ ВАС]",
    image: "/images/projects/hospital.jpg",
    gallery: ["/images/projects/hospital.jpg", "/images/hero/hospital.jpg"],
  },
  {
    slug: "warehouse-logistics",
    title: "Освещение складского комплекса",
    industry: "sklady",
    industryLabel: "Склад",
    city: "Регионы РФ",
    object: "Складской комплекс",
    roomType: "Зоны хранения и комплектации",
    term: "20–40 рабочих дней",
    task: "Обеспечить равномерный свет в проходах и на стеллажах, снизить расход электроэнергии.",
    solution:
      "Рассчитали высоту подвеса и оптику под ряды стеллажей, поставили оборудование и смонтировали его без длительной остановки отгрузки.",
    equipment: ["Промышленные светильники", "Прожекторы зоны разгрузки"],
    works: "Расчёт, поставка, монтаж",
    result: "[ОЖИДАЕМ КОРРЕКТНУЮ ИНФОРМАЦИЮ ОТ ВАС]",
    image: "/images/projects/warehouse.jpg",
    gallery: ["/images/projects/warehouse.jpg", "/images/hero/warehouse.jpg"],
  },
  {
    slug: "office-commerce",
    title: "Освещение коммерческого объекта",
    industry: "commerciya",
    industryLabel: "Коммерция",
    city: "Чебоксары",
    object: "Офисно-торговый объект",
    roomType: "Офисы и клиентская зона",
    term: "15–30 рабочих дней",
    task: "Собрать комфортный рабочий свет и акценты в зоне приёма без перерасхода мощности.",
    solution:
      "Разделили сценарии освещения: равномерный офисный свет и акценты в клиентской зоне. Подобрали оборудование из нескольких брендов.",
    equipment: ["Офисные панели", "Трековые светильники"],
    works: "Подбор, поставка, монтаж",
    result: "[ОЖИДАЕМ КОРРЕКТНУЮ ИНФОРМАЦИЮ ОТ ВАС]",
    image: "/images/projects/office.jpg",
    gallery: ["/images/projects/office.jpg", "/images/hero/office.jpg"],
  },
  {
    slug: "street-territory",
    title: "Освещение территории предприятия",
    industry: "ulitsa",
    industryLabel: "Улица",
    city: "Чувашская Республика",
    object: "Территория предприятия",
    roomType: "Проезды, площадки, периметр",
    term: "20–40 рабочих дней",
    task: "Повысить безопасность движения и обзорность территории в тёмное время суток.",
    solution:
      "Подобрали консольные светильники и прожекторы под ширину проездов, согласовали точки установки и выполнили монтаж на существующие опоры.",
    equipment: ["Консольные уличные светильники", "Прожекторы"],
    works: "Подбор, поставка, монтаж",
    result: "[ОЖИДАЕМ КОРРЕКТНУЮ ИНФОРМАЦИЮ ОТ ВАС]",
    image: "/images/projects/street.jpg",
    gallery: ["/images/projects/street.jpg", "/images/hero/street.jpg"],
  },
  {
    slug: "park-public",
    title: "Парковое освещение общественного пространства",
    industry: "parkovoe",
    industryLabel: "Парковое",
    city: "Чебоксары",
    object: "Парк / зона отдыха",
    roomType: "Аллеи, площадки, периметр",
    term: "20–40 рабочих дней",
    task: "Сделать пространство безопасным вечером, не превращая парк в промышленную площадку.",
    solution:
      "Использовали тёплый спектр, человеческий масштаб опор и аккуратную расстановку, чтобы сохранить атмосферу места.",
    equipment: ["Парковые торшеры", "Акцентные прожекторы"],
    works: "Подбор, поставка, монтаж",
    result: "[ОЖИДАЕМ ФОТО РЕАЛИЗОВАННОГО ОБЪЕКТА] и количественные показатели.",
    image: "/images/projects/park.jpg",
    gallery: ["/images/projects/park.jpg", "/images/hero/park.jpg"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByIndustry(industry?: ProjectIndustry | "all") {
  if (!industry || industry === "all") return projects;
  return projects.filter((p) => p.industry === industry);
}
