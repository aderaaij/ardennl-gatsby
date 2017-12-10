export function preventWidow(string) {
    return string.replace(/\s(?=[^\s]*$)/g, '\u00a0');
}
