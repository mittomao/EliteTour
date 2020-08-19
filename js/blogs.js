
const panis = document.querySelectorAll(".schedule__pani");
const parents = document.querySelectorAll(".schedule_parent");
const item = document.querySelectorAll(".schedule__item");
const readMore = document.querySelectorAll(".readMore");
const readMore1 = document.querySelectorAll(".readMore1");

let k = 4;
panis.forEach((el,j) => {
    let childs = el.children;
    for(let i = 0 ; i < childs.length;i++)
    {
        if(i < k){
            const ac =  childs[i].getAttribute("data-id");
             childs[i].addEventListener("click",function(e){
                e.preventDefault();
                removeClass(j);
                document.getElementById(ac).classList.add("active");
            });
        }
        else{
            for(let k = 4 ; k < childs.length ; k++){
                childs[k].style.display = "none";
            }
        }
        
    }
   
});
let objData = {};
readMore.forEach((more,i)=>{

    objData[`_${i}`] = 0;
    more.addEventListener("click",function(){
        objData[`_${i}`] += 4;
        if( objData[`_${i}`] > panis[i].children.length)
        {
            objData[`_${i}`] = panis[i].children.length-1;
            this.style.display = "none";
            readMore1[i].style.display = "block";
        }
        showChild(objData[`_${i}`],panis[i].children);
        console.log(objData[`_${i}`]);
    }); 
});

readMore1.forEach((more,i)=>{
    more.addEventListener("click",function(){
        
        if( objData[`_${i}`] < 4)
        {
            objData[`_${i}`] = 4 - objData[`_${i}`];
            this.style.display = "none";
            readMore[i].style.display = "block";
        }
       

        hideChild(objData[`_${i}`],panis[i].children);
        objData[`_${i}`] -= 4;

        console.log(objData[`_${i}`]);
    }); 
});


function showChild(k , item){
    const arr = [...item].slice(k,k+4);
    arr.map(a=>{
        a.style.display = "block";
    })

}

function hideChild(k , item){
    const arr = [...item].slice(k-4,k);
    arr.map(a=>{
        a.style.display = "none";
    });
}




function removeClass(i){
    const a = [...item];
    //Array.prototype.slice.call(item,0)
    const n = a[i].children;
    const p = [...n];
    const h = p.filter((it)=>{
        return it.className.indexOf("schedule_parent") !== -1;
    });
    for(let i = 0 ; i<h.length;i++)
    {
        h[i].classList.remove("active");
    }
    console.log(h);
}







