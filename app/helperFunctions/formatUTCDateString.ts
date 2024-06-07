export default function formatUTCDateString(utcDateString: string): { day: string, month: string, year: string, hour: string, minute: string } {
    const timesTampSanitized = utcDateString.replace(" ", "T");
    const date = new Date(timesTampSanitized);
    const day = date.getUTCDate().toString();
    const month = (date.getUTCMonth() + 1).toString();
    const year = date.getUTCFullYear().toString();
    const hour = date.getUTCHours().toString();
    const minute = date.getUTCMinutes().toString();
    return { day, month, year, hour, minute };
}
