import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

type ParseDateInput = string | null | undefined;

const DEFAULT_PARSE_FORMATS = ["DD-MM-YYYY", "D-M-YYYY", "YYYY-MM-DD"];

function toOrdinal(day: number): string {
  const mod100 = day % 100;
  if (mod100 >= 11 && mod100 <= 13) {
    return `${day}th`;
  }

  const mod10 = day % 10;
  if (mod10 === 1) return `${day}st`;
  if (mod10 === 2) return `${day}nd`;
  if (mod10 === 3) return `${day}rd`;

  return `${day}th`;
}

export function parseDate(
  value: ParseDateInput,
  formats: string[] = DEFAULT_PARSE_FORMATS
): Dayjs | null {
  if (!value) {
    return null;
  }

  for (const format of formats) {
    const parsed = dayjs(value, format, true);
    if (parsed.isValid()) {
      return parsed;
    }
  }

  const directParse = dayjs(value);
  if (directParse.isValid()) {
    return directParse;
  }

  return null;
}

export function formatDate(
  value: ParseDateInput,
  fallback: string = "Date unavailable"
): string {
  const parsedDate = parseDate(value);
  if (!parsedDate) {
    return fallback;
  }

  return parsedDate.format("DD-MM-YYYY");
}

export function formatDateLong(
  value: ParseDateInput,
  fallback: string = "Date unavailable"
): string {
  const parsedDate = parseDate(value);
  if (!parsedDate) {
    return fallback;
  }

  const month = parsedDate.format("MMMM");
  const dayWithSuffix = toOrdinal(parsedDate.date());
  const year = parsedDate.format("YYYY");

  return `${month} ${dayWithSuffix}, ${year}`;
}
