import {
  isPalindrome,
  isPalindromeSinglePass,
  isPalindromeUnicode,
  cleanStrWithUnicode,
} from './palindrome';

const testCases = [
  { input: "A man, a plan, a canal: Panama", expected: true },
  { input: "race a car", expected: false },
  { input: "", expected: true },
  { input: "👍👍", expected: true },
];

describe('isPalindrome', () => {
  testCases.forEach(({ input, expected }) => {
    it(`returns ${expected} for ${JSON.stringify(input)}`, () => {
      expect(isPalindrome(input)).toBe(expected);
      expect(isPalindromeSinglePass(input)).toBe(expected);
    });
  });
});

describe('isPalindromeUnicode', () => {
  const unicodeTestCases = [
    ...testCases,
    { input: "crème brûlée", expected: false },
    { input: "nóón", expected: true },
    { input: "café", expected: false },
    { input: "résumé", expected: false },
    { input: "¿Qué es?", expected: false },
    { input: "ναν", expected: true },
    { input: "Σκύλος", expected: false },
    { input: "шалаш", expected: true },
    { input: "привет", expected: false },
    { input: "12é21", expected: true },
    { input: "1ø1", expected: true },
    { input: "2résumé2", expected: false },
  ];

  unicodeTestCases.forEach(({ input, expected }) => {
    it(`returns ${expected} for ${JSON.stringify(input)}`, () => {
      expect(isPalindromeUnicode(input)).toBe(expected);
      expect(isPalindromeSinglePass(input)).toBe(expected);
    });
  });
});

describe('cleanStrWithUnicode', () => {
  it('keeps Unicode letters and diacritics', () => {
    expect(cleanStrWithUnicode('café')).toBe('café');
    expect(cleanStrWithUnicode('NAÏVE')).toBe('naïve');
  });
  it('strips spaces and punctuation', () => {
    expect(cleanStrWithUnicode('¿Qué es?')).toBe('quées');
  });
  it('keeps digits', () => {
    expect(cleanStrWithUnicode('test 123')).toBe('test123');
  });
});