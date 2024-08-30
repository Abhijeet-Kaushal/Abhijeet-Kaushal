// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example :

// Input: s = "racecar", t = "carrace"

// Output: true

function isAnagram(s, t) {
  // Check if the lengths of the strings are the same, can't be anagram if length isn't same
  if (s.length !== t.length) {
    return false;
  }

  // Sort the characters in both strings
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  // Compare the sorted strings
  return sortedS === sortedT;
}

console.log(isAnagram('racecar','carrace'))
