export function fromatDate(date) {
    return date.toLocaleDateString('en-US', {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}