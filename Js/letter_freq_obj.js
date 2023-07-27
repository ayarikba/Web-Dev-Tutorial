const letterfreq = (str) =>
{
    let freq = {}
    for (const letter of str)
    {
        if (letter in freq == false)
            freq[letter] = 1
        else if (letter in freq == true)
            freq[letter]++
    }
    return freq
}

x = letterfreq("haha")
console.log(Object.keys(x)[1])
console.log(Object.values(x)[1])
console.log(Object.values(x))