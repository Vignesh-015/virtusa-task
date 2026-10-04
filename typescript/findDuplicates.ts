function findDuplicates(str: string): string[] {
    const duplicates: string[] = [];
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            if (!duplicates.includes(str[i])) {
                duplicates.push(str[i]);
            }
        }
    }
    return duplicates;
}
const str = "programming";
console.log(findDuplicates(str));