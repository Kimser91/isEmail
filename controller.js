function checkEmail(text) 
{
    if (text.includes("@") & text.substring(text.indexOf("@")).includes(".") & !text.includes(" ")) 
        {
            answer = true;
        }
    else { answer = false;}
    console.log(answer)
 updateView();
   
}