export class CurrencyHelper {
  static formatCurrency(value: number = 0, currency: string = "NGN") {
    const formatter = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: currency,
    });
    return formatter.format(value);
  }
}
