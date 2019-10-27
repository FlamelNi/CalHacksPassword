//test1
//this is javascript
//test2

var valid_chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz123456789!@#$%^&*()_+-=<>?';

function generate_password(len)
{
    return map_str(random_str(len));
}

function map_str(str)
{
    return str;
}

function random_str(len)
{
    return '0000';
}

function generate_char()
{
    var charactersLength = valid_chars.length;
    return valid_chars.charAt(Math.floor(Math.random() * charactersLength))
    
}


