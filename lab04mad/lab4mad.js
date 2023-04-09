function getConsonants(str) {
    let consonants = "";
    str = str.toLowerCase();
    
    for(let i = 0; i < str.length; i++) {
      let char = str[i];
      if(char >= 'a' && char <= 'z' && !isVowel(char)) {
        consonants += char;
      }
    }
    
    return consonants.split('').sort().join('');
  }
  
  function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1;
  }

  console.log(getConsonants("Hello, World!")); // "dhlrwrld"
