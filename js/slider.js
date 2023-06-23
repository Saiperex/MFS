const buttonSlider=document.querySelector(".menu_button")
buttonSlider.addEventListener("click", function()
{
    document.querySelector(".slider").classList.toggle("slide")
    buttonSlider.classList.toggle("change")
    validar()
})
function validar ()
{
    if(buttonSlider.classList.contains("change"))
    {
        document.querySelector(".slider").style="right: 0%;" 
    }
    else
    {
        document.querySelector(".slider").style="right: -100vw;"
    }
}
validar()