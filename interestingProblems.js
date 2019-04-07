function getAllPermutations(string) {
    var results = [];
  
    if (string.length === 1) {
      results.push(string);
      return results;
    }
  
    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];
      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      var innerPermutations = getAllPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }
  //console.log(getAllPermutations('abcd'));

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    var y = x.toString();
    var i = 0;
    var j = y.length-1;
    while(i<j){
      if(y[i++] != y[j--]){
        return false;
      }
    }
    return true;
    
};

/**
 * @param {number} x
 * @return {number}
 * reverse without converting to string. assume the system can't store any other data type.
 */
var reverse = function(x) {
    var y = 0;
    var sign = 1;
    if(x<0){
      x = x * -1;
      sign = -1;
    }
    while(x>=1){
      y = y* 10 + x % 10;
      x = x/10;
      x = Math.floor(x);
    }
    if(y>Math.pow(2,31)-1) return 0;
    if(y< -1*Math.pow(2,31)) return 0;
    return y * sign;
};

var mappings = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
var sum = 0;
var romanToInt = function(s) {
    s = s.replace("IV", "IIII").replace("IX", "VIIII")
    s = s.replace("XL", "XXXX").replace("XC", "LXXXX")
    s = s.replace("CD", "CCCC").replace("CM", "DCCCC")
    for(var i=0;i<s.length;i++){
        sum += mappings[s[i]];
    }    
    return sum;
};

var isValid = function(s) {
  var list = [];
  var openingChars = ['(','{','['];
  var closingChars = [')','}',']'];
  var mapping = {
      ')':'(',
      '}':'{',
      ']':'['
  };
  for(var i=0;i<s.length;i++){
      if(openingChars.includes(s[i])){
          list.push(s[i]);
      }
      if(closingChars.includes(s[i])){
          if(list.length === 0 || mapping[s[i]] != list.pop()){
              return false;
          }
      }
  }
  return list.length === 0;
};

/**
 * @param {string} s
 * @return {number}
 */
// Length of the langest substring with out repeated char.
var lengthOfLongestSubstring = function(s) {
  var i = 0;
  var j = 0;
  var maxLength = 0;
  var dict = {};

  while((j < s.length)){
    if(!(s[j] in dict)){
      dict[s[j++]] = 1;
      console.log(dict);
    } else {
      delete dict[s[i++]];
    }
    if((j-i) > maxLength) {
      maxLength = j-i;
    }
  }
  return maxLength;
};


function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}
