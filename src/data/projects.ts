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
  videos?: string[];
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

const videos = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/projects/${slug}/video-${String(i + 1).padStart(2, "0")}.mp4`);

export const projects: Project[] = [
  {
    slug: "glavpochtamt",
    title: "Архитектурная подсветка Главпочтамта",
    industry: "commerciya",
    industryLabel: "Коммерция",
    city: "Чебоксары",
    object: "Главпочтамт / Почта России",
    roomType: "Фасад общественного здания",
    task: "Подсветить фасад Главпочтамта так, чтобы колонны, карниз и вход читались вечером, а здание оставалось узнаваемым с площади.",
    solution:
      "Установили архитектурные светильники по вертикалям фасада и у входной группы. Свет ведёт взгляд вдоль пилястр к вывеске «Почта России» и не заливает окна сплошным пятном.",
    equipment: ["Архитектурные фасадные светильники", "Подсветка входной группы"],
    works: "Подбор, поставка, монтаж",
    result: "Ночью фасад читается целиком: колонны, вход и площадь перед зданием освещены.",
    image: "/images/projects/glavpochtamt/01.jpg",
    gallery: photos("glavpochtamt", 5),
  },
  {
    slug: "skver-zashchitnikov-kugesi",
    title: "Сквер защитников Отечества, Кугеси",
    industry: "parkovoe",
    industryLabel: "Парковое",
    city: "Кугеси",
    object: "Сквер защитников Отечества",
    roomType: "Пешеходная площадь, аллеи, мемориальная зона",
    task: "Осветить новый сквер: дорожки, лавки, цветники и памятник — чтобы вечером пространство оставалось безопасным и спокойным.",
    solution:
      "Поставили парковые опоры вдоль площади и подходов. Свет закрывает плитку, скамейки и мемориал, не превращая сквер в площадку.",
    equipment: ["Парковые опоры со светильниками"],
    works: "Поставка, монтаж",
    result: "Сквер работает вечером: площадь, лавки и памятник освещены. На фото — также отгрузка световых комплектов на объект.",
    image: "/images/projects/skver-zashchitnikov-kugesi/01.jpg",
    gallery: photos("skver-zashchitnikov-kugesi", 14),
    videos: videos("skver-zashchitnikov-kugesi", 1),
  },
  {
    slug: "sklad-abk-novocheboksarsk",
    title: "Производственно-складское здание с АБК",
    industry: "sklady",
    industryLabel: "Склады",
    city: "Новочебоксарск",
    object: "Производственно-складской корпус с АБК",
    roomType: "Складской пролёт с кран-балками",
    task: "Осветить новый корпус под ключ: высокие пролёты, кран-балки и рабочие зоны — с корректировкой проектной документации под фактическую конструкцию.",
    solution:
      "Скорректировали проект под реальные фермы и краны, подобрали промышленные светильники и смонтировали их по сетке пролётов. Свет доходит до пола по всей длине корпуса.",
    equipment: ["Промышленные high-bay светильники"],
    works: "Проектирование, поставка, монтаж",
    result: "Корпус освещён равномерно. Проектная документация приведена к исполнению на объекте.",
    image: "/images/projects/sklad-abk-novocheboksarsk/01.jpg",
    gallery: photos("sklad-abk-novocheboksarsk", 3),
    videos: videos("sklad-abk-novocheboksarsk", 1),
  },
  {
    slug: "sto-sytrakassy",
    title: "СТО грузовых автомобилей, Сятракассы",
    industry: "commerciya",
    industryLabel: "Коммерция",
    city: "Сятракассы",
    object: "Станция техобслуживания грузовых авто",
    roomType: "Ремонтный зал с воротами и смотровыми канавами",
    task: "Дать ровный рабочий свет в большом зале СТО: над постами, канавами и у ворот, без тёмных зон между колоннами.",
    solution:
      "Смонтировали линейные светодиодные светильники по фермам. Длинный свет закрывает посты целиком и не слепит на металлическом потолке.",
    equipment: ["Линейные светодиодные светильники"],
    works: "Поставка, монтаж",
    result: "Зал, ворота и рабочие посты освещены. Свет держится и при закрытых воротах вечером.",
    image: "/images/projects/sto-sytrakassy/01.jpg",
    gallery: photos("sto-sytrakassy", 8),
  },
  {
    slug: "kuzovnoy-lada-novocheboksarsk",
    title: "Участок кузовного ремонта LADA, Новочебоксарск",
    industry: "commerciya",
    industryLabel: "Коммерция",
    city: "Новочебоксарск",
    object: "LADA-Чебоксары, участок кузовного ремонта",
    roomType: "Цех кузовного ремонта",
    task: "Осветить кузовной участок так, чтобы на металле и лаке не было провалов и цвет кузова читался при работе.",
    solution:
      "Развесили линейные светильники вдоль пролётов. Свет ложится на посты ровной полосой и не оставляет теней от балок.",
    equipment: ["Линейные светодиодные светильники"],
    works: "Поставка, монтаж",
    result: "Рабочая зона кузовного участка освещена по всей площади цеха.",
    image: "/images/projects/kuzovnoy-lada-novocheboksarsk/01.jpg",
    gallery: photos("kuzovnoy-lada-novocheboksarsk", 4),
  },
  {
    slug: "proekcionnyy-perekhod-kugesi",
    title: "Проекционный пешеходный переход, Кугеси",
    industry: "ulitsa",
    industryLabel: "Улица",
    city: "Кугеси",
    object: "Пешеходный переход",
    roomType: "Проезжая часть / пешеходный переход",
    task: "Сделать переход заметным в сумерках и в дождь: проекция «зебры» на асфальт плюс свет и знак на опоре.",
    solution:
      "Смонтировали опору с солнечной панелью, светильником и проектором дорожной разметки. Жёлто-белая «зебра» рисуется на покрытии и читается водителям заранее.",
    equipment: ["Проектор дорожной разметки", "Светильник перехода", "Солнечная панель"],
    works: "Поставка, монтаж",
    result: "Переход виден вечером и в сырую погоду: проекция держится на асфальте, знак и светильник работают вместе.",
    image: "/images/projects/proekcionnyy-perekhod-kugesi/01.jpg",
    gallery: photos("proekcionnyy-perekhod-kugesi", 4),
  },
  {
    slug: "proekcionnyy-perekhod-kugesi-2",
    title: "Проекционный пешеходный переход №2, Кугеси",
    industry: "ulitsa",
    industryLabel: "Улица",
    city: "Кугеси",
    object: "Пешеходный переход №2",
    roomType: "Проезжая часть / пешеходный переход",
    task: "Обустроить второй проекционный переход в посёлке: разметка «зебра» с проектора и освещение места перехода.",
    solution:
      "Установили опору с проектором, светильником и солнечной панелью. Проекцию выверили по ширине проезжей части.",
    equipment: ["Проектор дорожной разметки", "Светильник перехода", "Солнечная панель"],
    works: "Поставка, монтаж",
    result: "Второй переход в Кугеси работает: разметка читается с дороги, проектор держит картинку.",
    image: "/images/projects/proekcionnyy-perekhod-kugesi-2/01.jpg",
    gallery: photos("proekcionnyy-perekhod-kugesi-2", 3),
    videos: videos("proekcionnyy-perekhod-kugesi-2", 3),
  },
  {
    slug: "sobornaya-ploshchad",
    title: "Благоустройство Соборной площади, Новочебоксарск",
    industry: "parkovoe",
    industryLabel: "Парковое",
    city: "Новочебоксарск",
    object: "Соборная площадь",
    roomType: "Пешеходные дорожки, газон, общественное пространство",
    task: "Осветить дорожки благоустроенной площади, чтобы вечером люди шли по свету, а опоры не спорили с деревьями и храмом.",
    solution:
      "Поставили парковые опоры вдоль аллей. Свет ведёт по плиточным дорожкам и не бьёт в кроны сплошной заливкой.",
    equipment: ["Парковые опоры со светильниками"],
    works: "Поставка, монтаж",
    result: "Аллеи площади получили человеческий масштаб света. Опоры стоят в составе благоустройства.",
    image: "/images/projects/sobornaya-ploshchad/01.jpg",
    gallery: photos("sobornaya-ploshchad", 7),
  },
  {
    slug: "pamyatnik-pavshim-kugesi",
    title: "Мемориал павшим воинам, Кугеси",
    industry: "parkovoe",
    industryLabel: "Парковое",
    city: "Кугеси",
    object: "Памятник павшим воинам",
    roomType: "Мемориальная площадка, подходы, зелень",
    task: "Подсветить мемориал и подходы так, чтобы вечером читались скульптура, вечный огонь и аллея, а лес оставался фоном, а не тёмной стеной.",
    solution:
      "Поставили парковые опоры вдоль площадки и дали акцент на мемориал. Свет держит плитку, цветы и фигуру, не выбеливая деревья.",
    equipment: ["Парковые опоры", "Акцентная подсветка мемориала"],
    works: "Поставка, монтаж",
    result: "Мемориал работает вечером: подходы, площадка и скульптура освещены.",
    image: "/images/projects/pamyatnik-pavshim-kugesi/01.jpg",
    gallery: photos("pamyatnik-pavshim-kugesi", 4),
  },
  {
    slug: "chuvgu-korpus-m",
    title: "Корпус М Чувашского госуниверситета",
    industry: "obrazovanie",
    industryLabel: "Образование",
    city: "Чебоксары",
    object: "Чувашский государственный университет, корпус М",
    roomType: "Коридоры учебного корпуса",
    task: "Осветить коридоры корпуса: ровный свет по потолку, читаемые пути эвакуации, спокойный свет для учебного здания.",
    solution:
      "Установили светодиодные панели в потолок коридоров. Свет тянется вдоль дверей аудиторий и не оставляет тёмных карманов у выходов.",
    equipment: ["Светодиодные панели"],
    works: "Поставка, монтаж",
    result: "Коридоры корпуса освещены: панели дают ровную заливку по всей длине.",
    image: "/images/projects/chuvgu-korpus-m/01.jpg",
    gallery: photos("chuvgu-korpus-m", 1),
    videos: videos("chuvgu-korpus-m", 1),
  },
  {
    slug: "sosh-22-cheboksary",
    title: "Поставка освещения в СОШ №22",
    industry: "obrazovanie",
    industryLabel: "Образование",
    city: "Чебоксары",
    object: "СОШ №22",
    roomType: "Школа",
    task: "Поставить на объект партию светильников для школьных помещений.",
    solution: "Скомплектовали и отгрузили оборудование на площадку школы. На фото и видео — приёмка партии на объекте.",
    equipment: ["Светильники для образовательных помещений"],
    works: "Поставка",
    result: "Оборудование доставлено в СОШ №22.",
    image: "/images/projects/sosh-22-cheboksary/01.jpg",
    gallery: photos("sosh-22-cheboksary", 1),
    videos: videos("sosh-22-cheboksary", 1),
  },
  {
    slug: "gimnaziya-1-cheboksary",
    title: "Поставка освещения в Гимназию №1",
    industry: "obrazovanie",
    industryLabel: "Образование",
    city: "Чебоксары",
    object: "Гимназия №1",
    roomType: "Школа / гимназия",
    task: "Поставить партию светильников для гимназии.",
    solution: "Скомплектовали и отгрузили оборудование. На видео — партия на объекте.",
    equipment: ["Светильники для образовательных помещений"],
    works: "Поставка",
    result: "Оборудование доставлено в Гимназию №1.",
    image: "/images/projects/gimnaziya-1-cheboksary/01.jpg",
    gallery: photos("gimnaziya-1-cheboksary", 1),
    videos: videos("gimnaziya-1-cheboksary", 1),
  },
  {
    slug: "sosh-35-cheboksary",
    title: "Поставка освещения в СОШ №35",
    industry: "obrazovanie",
    industryLabel: "Образование",
    city: "Чебоксары",
    object: "СОШ №35",
    roomType: "Школа",
    task: "Поставить партию светильников для школы.",
    solution: "Скомплектовали и отгрузили оборудование на объект. На видео — приёмка партии.",
    equipment: ["Светильники для образовательных помещений"],
    works: "Поставка",
    result: "Оборудование доставлено в СОШ №35.",
    image: "/images/projects/sosh-35-cheboksary/01.jpg",
    gallery: photos("sosh-35-cheboksary", 1),
    videos: videos("sosh-35-cheboksary", 1),
  },
  {
    slug: "karabay-shumerlinskaya-sosh",
    title: "Поставка освещения в Карабай-Шумершинскую СОШ",
    industry: "obrazovanie",
    industryLabel: "Образование",
    city: "Карабай",
    object: "Карабай-Шумершинская СОШ",
    roomType: "Школа",
    task: "Поставить светильники на школьный объект в селе Карабай.",
    solution: "Скомплектовали и отгрузили оборудование. На видео — доставка на строительную площадку школы.",
    equipment: ["Светильники для образовательных помещений"],
    works: "Поставка",
    result: "Оборудование доставлено на объект Карабай-Шумершинской СОШ.",
    image: "/images/projects/karabay-shumerlinskaya-sosh/01.jpg",
    gallery: photos("karabay-shumerlinskaya-sosh", 1),
    videos: videos("karabay-shumerlinskaya-sosh", 1),
  },
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
