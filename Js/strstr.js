const strstr = (phrase, word) =>
{
    let ret = 0
    let i = 0
    if (!phrase.length || !word.length)
        return (0)
    for (const letter of phrase)
    {
        if (letter != word[i])
            i = 0
        if (letter == word[i])
            {
                i++;
            }
         if (i == word.length)
            {
                ret++
                i = 0
            }

    }
    return ret
}

console.log(strstr("fksafksfkamfktafksafaahmetsdasfdahmet","ahmet"))