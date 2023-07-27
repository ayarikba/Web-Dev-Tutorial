function rand_cond(scope= 10)
{
    rand = Math.random() * scope
    if (scope <= 10)
    {
        if (rand < 6)
            return (false)
        else if (rand > 5)
            return (true)
    }
    
    else if (scope > 10)
    {
        if (rand > scope/2)
            return (true)
        else 
            return (false)
    }
}

console.log(rand_cond(11))
