const itemsMenu=document.querySelectorAll(".menu_item")
const itemsMenuSlider=document.querySelectorAll(".sliderItem")
const vectorPages=["index","propiedades","agentes","nosotros","capa","fac"]

for(let i=0;i<itemsMenu.length;i++)
{
    itemsMenu[i].addEventListener("click",function()
    {
        window.location.href = vectorPages[i] + ".html";
        console.log("tocaste")
    })
    itemsMenuSlider[i].addEventListener("click",function()
    {
        window.location.href = vectorPages[i] + ".html";
    })
}