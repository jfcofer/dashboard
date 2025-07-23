export const parseIsoGmt = (iso: string) => new Date(`${iso}Z`);

export const hoursBetween = (a: Date, b: Date) =>
  Math.round((b.getTime() - a.getTime()) / 3_600_000);

export const humanize = (hrs: number) =>
  hrs < 24 ? `${hrs} horas` : `${Math.ceil(hrs / 24)} días`;
