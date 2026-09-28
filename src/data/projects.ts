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
  galleryLabels?: string[];
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

const photos = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/projects/${slug}/${String(i + 1).padStart(2, "0")}.jpg`);

export const projects: Project[] = [
  {
    slug: "trubnyy",
    title: "Освещение трубного производства",
    industry: "proizvodstvo",
    industryLabel: "Производство",
    city: "Чебоксары",
    object: "Трубный цех",
    roomType: "Производственный корпус с высокими пролётами и кран-балками",
    task: "Осветить протяжённый производственный зал с металлическими фермами, кран-балками и технологическими линиями так, чтобы свет доходил до рабочих зон и проходов.",
    solution:
      "Разместили промышленные светильники по сетке пролётов, учитывая высоту подвеса и работу грузоподъёмного оборудования. Свет направлен в рабочие коридоры и к линиям без слепящих пятен на полу.",
    equipment: ["Промышленные high-bay светильники"],
    works: "Подбор, поставка, монтаж",
    result:
      "Равномерное освещение корпуса: пролёты, конвейерные линии и зоны складирования труб читаются целиком. Количественные показатели экономии — [ОЖИДАЕМ КОРРЕКТНУЮ ИНФОРМАЦИЮ ОТ ВАС].",
    image: "/images/projects/trubnyy/01.jpg",
    gallery: photos("trubnyy", 5),
  },
  {
    slug: "berserker",
    title: "Производственно-складской комплекс «Берсеркер»",
    industry: "proizvodstvo",
    industryLabel: "Производство",
    city: "Чебоксары",
    object: "«Берсеркер»",
    roomType: "Производственный и складской ангар с арочным покрытием",
    task: "Осветить высокий ангар: сборочные участки, склад готовой продукции, стеллажи и зоны с промышленными роботами.",
    solution:
      "Подобрали промышленные светильники под высоту арочного покрытия и расставили их так, чтобы свет закрывал и производственную площадку, и ряды хранения. Монтаж выполнен на существующие фермы.",
    equipment: ["Промышленные high-bay светильники"],
    works: "Подбор, поставка, монтаж",
    result:
      "Свет покрывает рабочие столы, проходы и складские ряды по всей площади ангара. Точные цифры по мощности и экономии — [ОЖИДАЕМ КОРРЕКТНУЮ ИНФОРМАЦИЮ ОТ ВАС].",
    image: "/images/projects/berserker/01.jpg",
    gallery: photos("berserker", 14),
  },
  {
    slug: "masterproff",
    title: "Освещение производства «Мастерпрофф»",
    industry: "proizvodstvo",
    industryLabel: "Производство",
    city: "Чебоксары",
    object: "«Мастерпрофф»",
    roomType: "Производственный цех со станками и сборочными линиями",
    task: "Дать ровный рабочий свет над станками, конвейером и сборочными постами в цехе со светлым арочным перекрытием.",
    solution:
      "Установили линейные светодиодные светильники вдоль пролётов. Длинный свет хорошо ложится на линии оборудования и не оставляет тёмных зон между станками.",
    equipment: ["Линейные светодиодные светильники"],
    works: "Подбор, поставка, монтаж",
    result:
      "Цех освещён равномерно по всей рабочей площади. Нормируемые показатели и экономия — [ОЖИДАЕМ КОРРЕКТНУЮ ИНФОРМАЦИЮ ОТ ВАС].",
    image: "/images/projects/masterproff/01.jpg",
    gallery: photos("masterproff", 7),
  },
  {
    slug: "avgust-rasht",
    title: "Торговое пространство «Август Рашт»",
    industry: "commerciya",
    industryLabel: "Коммерция",
    city: "Чебоксары",
    object: "«Август Рашт»",
    roomType: "Торговый зал с павильонами и высокими пролётами",
    task: "Осветить крупный торговый объём с павильонами, стеклянными перегородками и роллетными витринами — без тёмных островов между рядами.",
    solution:
      "Смонтировали линейные светильники по сетке потолка. Свет отражается от светлого пола и равномерно заполняет проходы между павильонами.",
    equipment: ["Линейные светодиодные светильники"],
    works: "Подбор, поставка, монтаж",
    result: "Зал читается целиком: проходы, витрины и рабочие зоны павильонов освещены без провалов.",
    image: "/images/projects/avgust-rasht/01.jpg",
    gallery: photos("avgust-rasht", 2),
  },
  {
    slug: "cheboksarskiy-trikotazh",
    title: "Магазин «Чебоксарский трикотаж»",
    industry: "commerciya",
    industryLabel: "Коммерция",
    city: "Чебоксары",
    object: "Магазин «Чебоксарский трикотаж»",
    roomType: "Торговый зал, примерочные, зоны навески",
    task: "Собрать свет, в котором ткань и цвет изделий выглядят честно: общий свет по залу, акцент на навеске и мягкая подсветка периметра.",
    solution:
      "Скомбинировали светодиодные панели в грильято-потолке, линейные светильники, трековые акценты на одежду и скрытую подсветку вдоль стен. Покупатель видит фактуру и цвет без резких теней.",
    equipment: [
      "Светодиодные панели",
      "Линейные светильники",
      "Трековые светильники",
      "Линейная подсветка витрин",
    ],
    works: "Подбор, поставка, монтаж",
    result: "Торговый зал, навеска и примерочная зона освещены как единая сцена. Цвет изделий читается без искажений.",
    image: "/images/projects/cheboksarskiy-trikotazh/01.jpg",
    gallery: photos("cheboksarskiy-trikotazh", 5),
  },
  {
    slug: "tyuning-studiya",
    title: "Тюнинг-студия, Чебоксары",
    industry: "commerciya",
    industryLabel: "Коммерция",
    city: "Чебоксары",
    object: "Автотюнинг-студия",
    roomType: "Шоурум с открытыми потолочными балками",
    task: "Встроить свет в существующие металлические балки потолка, чтобы автомобили в зале смотрелись чисто, без отдельных «пятен» от точечных светильников.",
    solution:
      "До монтажа в балках не было рабочего света. В направляющие установили линейные светодиодные светильники — линии повторяют конструкцию потолка и дают ровную заливку по кузовам.",
    equipment: ["Линейные светодиодные светильники"],
    works: "Подбор, поставка, монтаж",
    result: "Шоурум получил равномерный свет по всей экспозиции. На фотографиях — состояние до и после монтажа.",
    image: "/images/projects/tyuning-studiya/02.jpg",
    gallery: photos("tyuning-studiya", 2),
    galleryLabels: ["До", "После"],
  },
  {
    slug: "lada",
    title: "Открытая площадка автосалона LADA",
    industry: "ulitsa",
    industryLabel: "Улица",
    city: "Чебоксары",
    object: "Автосалон LADA",
    roomType: "Открытая стоянка / экспозиция автомобилей",
    task: "Осветить открытую площадку с автомобилями так, чтобы ряды были видны вечером и в зимнее время, без тёмных коридоров между машинами.",
    solution:
      "Установили светильники на опорах по периметру и рядам площадки. Свет закрывает экспозицию и проезды, автомобили читаются целиком.",
    equipment: ["Консольные светильники на опорах"],
    works: "Подбор, поставка, монтаж",
    result: "Площадка освещена в тёмное время суток: ряды машин и проезды просматриваются без слепых зон.",
    image: "/images/projects/lada/01.jpg",
    gallery: photos("lada", 2),
  },
  {
    slug: "torkhany",
    title: "Хоккейная площадка, Торханы",
    industry: "ulitsa",
    industryLabel: "Улица",
    city: "Торханы",
    object: "Открытая хоккейная площадка",
    roomType: "Ледовая площадка, периметр, подходы",
    task: "Осветить открытый лёд для вечерних тренировок и катания: поле, борта и подходы к площадке.",
    solution:
      "Поставили прожекторы на опорах по периметру корта. Свет накрывает лёд целиком и не оставляет тёмных углов у бортов.",
    equipment: ["Прожекторы на опорах"],
    works: "Подбор, поставка, монтаж",
    result: "Площадка используется в тёмное время суток: лёд, борта и подходы освещены.",
    image: "/images/projects/torkhany/01.jpg",
    gallery: photos("torkhany", 2),
  },
  {
    slug: "motornyy-ceh-chtu",
    title: "Моторный цех ЧТУ",
    industry: "proizvodstvo",
    industryLabel: "Производство",
    city: "Чебоксары",
    object: "Моторный цех ЧТУ",
    roomType: "Ремонтный цех со станками и кран-балкой",
    task: "Заменить устаревшее освещение ремонтного цеха, чтобы на станках, моторах и верстаках был рабочий свет без глубоких теней.",
    solution:
      "Смонтировали линейные светодиодные светильники на существующих балках и в пролётах под световыми фонарями. Свет дополняет дневной верхний свет и держит рабочую освещённость в глубине цеха.",
    equipment: ["Линейные светодиодные светильники"],
    works: "Подбор, поставка, монтаж",
    result:
      "Рабочие зоны у станков и постов ремонта моторов освещены. Точные цифры по замене мощности — [ОЖИДАЕМ КОРРЕКТНУЮ ИНФОРМАЦИЮ ОТ ВАС].",
    image: "/images/projects/motornyy-ceh-chtu/01.jpg",
    gallery: photos("motornyy-ceh-chtu", 7),
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByIndustry(industry?: ProjectIndustry | "all") {
  if (!industry || industry === "all") return projects;
  return projects.filter((p) => p.industry === industry);
}

export function projectFilterOptions() {
  const used = new Set(projects.map((p) => p.industry));
  return projectFilters.filter((f) => f.slug === "all" || used.has(f.slug));
}
