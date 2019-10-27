//test1
//this is javascript
//test2

function generate_password(len)
{
    return map_str(random_str(len))
}

function map_str(str)
{
    return str
}

function random_str(len)
{
    return '0000'
}

function generate_char()
{
    
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?';
    var charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength))
    
}


