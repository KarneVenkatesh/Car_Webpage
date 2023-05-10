function gallery()
{
    var photos=document.images;
    for (i=0;i<=9;i++)
    {
        photos[i].src=`${i}.jpeg`
        console.log(photos[i]);
    }
}
function gal(loc)
{
    document.getElementById("bigimage").style.backgroundImage=`url(${loc})`
}