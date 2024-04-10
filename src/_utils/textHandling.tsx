export function isNullOrWhitespace(input: string) {
    if(input === '') return false;
    return (typeof input === 'undefined' || input == null)
        || input.replace(/\s/g, '').length < 1;
}