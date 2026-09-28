export type Brand = {
  slug: string;
  name: string;
  short: string;
};

/** Плейсхолдеры до официального списка и логотипов производителей */
export const brands: Brand[] = [
  { slug: "zavod-01", name: "Завод-партнёр 01", short: "01" },
  { slug: "zavod-02", name: "Завод-партнёр 02", short: "02" },
  { slug: "zavod-03", name: "Завод-партнёр 03", short: "03" },
  { slug: "zavod-04", name: "Завод-партнёр 04", short: "04" },
  { slug: "zavod-05", name: "Завод-партнёр 05", short: "05" },
  { slug: "zavod-06", name: "Завод-партнёр 06", short: "06" },
  { slug: "zavod-07", name: "Завод-партнёр 07", short: "07" },
  { slug: "zavod-08", name: "Завод-партнёр 08", short: "08" },
  { slug: "zavod-09", name: "Завод-партнёр 09", short: "09" },
  { slug: "zavod-10", name: "Завод-партнёр 10", short: "10" },
];

export function getBrand(slug: string) {
  return brands.find((b) => b.slug === slug);
}
