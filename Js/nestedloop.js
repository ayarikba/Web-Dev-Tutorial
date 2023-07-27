function create_array(size=0 , length=0)
{
    var arr  = 0
    for (var i=0  ; i < size ; i++)
        for (var j= 0; j < length; j++)
                arr += j
        return arr
}

console.log(create_array(1,4))