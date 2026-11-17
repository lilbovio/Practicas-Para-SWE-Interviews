/*
Escribe una función containsDuplicate(numbers) que devuelva true si algún elemento aparece más de una vez y false si todos son distintos.
containsDuplicate([1, 2, 3, 1]);
// true

containsDuplicate([1, 2, 3, 4]);
// false

containsDuplicate([]);
// false

containsDuplicate([5, 5]);
// true
*/
/**
 * Return true if any value occurs more than once.
 * This nested-loop version uses O(n^2) time and O(1) extra space.
 * @param {number[]} numbers
 * @returns {boolean}
 */
export function containsDuplicate(numbers) {
    for(let i = 0; i <numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            if(numbers[i] === numbers[j]){
                return true;
            }
        }
    }
    return false;
}