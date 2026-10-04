function countOccurrences(arr: number[], element: number): number {
    return arr.filter(value => value === element).length;
}
const numbers: number[] = [1, 2, 3, 2, 4, 2, 5, 2];
const element: number = 2;
console.log(countOccurrences(numbers, element));