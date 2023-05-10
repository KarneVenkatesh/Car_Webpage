var emailIDorPhno=localStorage.getItem("email")
var pass=localStorage.getItem("pass")
var form=document.forms;
function passvalid()
{
    var inputTags=document.querySelectorAll("input")
    var usergivenEmail=inputTags[0].value
    var usergivenpass=inputTags[1].value
    var borders=document.getElementsByClassName("inputdiv")
    if (emailIDorPhno!=usergivenEmail && pass!=usergivenpass)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
        borders[0].style.borderColor="red"
        borders[1].style.borderColor="red"
        document.getElementById("status").innerHTML="UserID and Password is Wrong"
    }
    else if (emailIDorPhno==usergivenEmail&&pass!=usergivenpass)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(193,0,97),red)"
        borders[0].style.borderColor="royalblue"
        borders[1].style.borderColor="red"
        document.getElementById("status").innerHTML="UserID and Password is Wrong"
    }
    else if(emailIDorPhno!=usergivenEmail && pass==usergivenpass)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
        borders[0].style.borderColor="red"
        borders[1].style.borderColor="royalblue"
        document.getElementById("status").innerHTML="EmailId or Phno is Wrong"
    }
    else{
        form[0].action="home.html"
        form[0].elements[2].type="submit"
    }
}
function passviss()
{
    form[0].elements[1].type="text"
    document.getElementById("passvis").style.transition="transform 0.3s"
    document.getElementById("passvis").src="open.jpeg"
    document.getElementById("passvis").style.transform="rotateY(180deg)"
}
function passhid()
{
    form[0].elements[1].type="password"
    document.getElementById("passvis").style.transition="transform 0.3s"
    document.getElementById("passvis").src="openedeye.png"
    document.getElementById("passvis").style.transform="rotateY(0deg)"
}
function bigbutton()
{
    form[0].elements[2].style.transform="scale(1.2)"
    form[0].elements[2].style.backgroundColor="purple"
}
function smallbutton()
{
    form[0].elements[2].style.transform="scale(1)"
    form[0].elements[2].style.backgroundColor="transparent"
}