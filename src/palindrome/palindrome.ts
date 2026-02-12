/**
 * Entry point for scripts. Add your script logic here or in other modules under src/.
 */
export function isPalindrome(str: string): boolean {
    // Lowercase the string and remove all non-alphanumeric characters
    const cleanedStr = cleanStr(str);
    // compare the cleaned string to the reversed cleaned string
    return cleanedStr === reverseStr(cleanedStr);
  }

  // isPalindromeUnicode checks if the string is a palindrome by comparing the characters at the left and right indices
  export function isPalindromeUnicode(str: string): boolean {
    // Lowercase the string and remove all non-alphanumeric characters
    const cleanedStr = cleanStrWithUnicode(str);
    // compare the cleaned string to the reversed cleaned string
    return cleanedStr === reverseStr(cleanedStr);
  }
  
  // isPalindromeSinglePass checks if the string is a palindrome by comparing the characters at the left and right indices
  export function isPalindromeSinglePass(str: string): boolean {
    // Lowercase the string and remove all non-alphanumeric characters
    const cleanedStr = cleanStrWithUnicode(str);
    // compare the cleaned string to the reversed cleaned string
    // if the characters at the left and right indices are not the same, return false
    // if the characters are the same, increment the left index and decrement the right index
    // (base case) if the left index is greater than the right index, return true
    let left = 0;
    let right = cleanedStr.length - 1;
    while (left < right) {
      if (cleanedStr[left] !== cleanedStr[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  
  // cleanStr converts the string to lowercase and removes all non-alphanumeric ascii characters
  export function cleanStr(str: string): string {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  // cleanStrWithUnicode converts the string to lowercase and removes all non-alphanumeric but keeps unicode characters
  export function cleanStrWithUnicode(str: string): string {
    return str
      .toLowerCase()
      // normalize the string to remove diacritics
      //   .normalize('NFD')
      // remove all non-alphanumeric but keep unicode characters
      // \p{L} matches any letter in any language
      // \p{N} matches any number
      // /gu is required for escaping unicode characters in javascript
      .replace(/[^\p{L}\p{N}]/gu, '');
  }
 
  // reverseStr reverses the string
  export function reverseStr(str: string): string {
    return str.split('').reverse().join('');
  }