const word_split = (phrase) => {
    let ret = [];
    let i = 0;
    let temp = "";
  
    for (const letter of phrase) {
      if (letter !== " " && letter !== "." && letter !== ",") {
        temp += letter;
      } 
      else if (temp !== "") {
        ret[i] = temp
        i++
        //ret.push(temp);
        temp = "";
      }
    }
  
    // Check if there's a last word not followed by space, period, or comma
    if (temp !== "") {
      ret.push(temp);
    }
  
    return ret;
  };

const word_freq = (phrase) =>
{
    const split = word_split(phrase)
    let ret = {}
    for (const word of split)
    {
        if (word in ret == false)
            ret[word] = 1
        else if (word in ret == true)
            ret[word]++
    }
    return (ret)

}

const word_freq2 = (phrase) =>
{
    let ret = {}
     split = phrase.split(' ')
    for (const words of split)
    {
        if (words in ret)
            ret[words] += 1
        else 
            ret[words] = 1
    }
    return ret
}

console.log(word_freq2("lol what lol yo yo yo"))
console.log(word_freq("ahm ahmet aa fff ff fff"))
