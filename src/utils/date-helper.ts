import { DateTime } from "luxon";
export class DateHelper {
  static dateWithTime(data: string | Date) {
    if (!data) return "";
    const date = new Date(data);
    const dt = DateTime.fromJSDate(date);
    return dt.toLocaleString(
      { ...DateTime.DATETIME_MED, hour12: true },
      { locale: "en-NG" }
    );
  }
}
