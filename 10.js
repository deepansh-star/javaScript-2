function wordCounter(sen) {
    const wordMap = new Map();
    
    const words = sen.split(/\s+/); 
    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(',', ''); 

        if (cleanWord.length > 0) {
            wordMap.set(cleanWord, (wordMap.get(cleanWord) || 0) + 1);
        }
    }
    return wordMap;
}
const sen = "Be yourself, everyone else is already taken.";
const result = wordCounter (sen);
console.log(result);
