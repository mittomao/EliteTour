
const panis = document.querySelectorAll(".schedule__pani");
const parents = document.querySelectorAll(".schedule_parent");
const item = document.querySelectorAll(".schedule__item");
panis.forEach((el,j) => {
    const childs = el.children;
    for(let i = 0 ; i < childs.length;i++)
    {

        const ac =  childs[i].getAttribute("data-id");
        childs[i].addEventListener("click",function(e){
            e.preventDefault();
             removeClass(j);
            document.getElementById(ac).classList.add("active");
        });
    }
});
function removeClass(i){
    const a = Array.prototype.slice.call(item,0);
    const n = a[i].children;
    const p = [...n];
    const h = p.filter((it)=>{
        return it.className.indexOf("schedule_parent") !== -1;
    });
    for(let i = 0 ; i<h.length;i++)
    {
        h[i].classList.remove("active");
    }
    console.log(h)
}


