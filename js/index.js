var indexBanner = 0;
setInterval(()=>{
    indexBanner++;
    if(indexBanner >=4){
        const widthBanner = document.querySelector(".banner").offsetWidth;
        document.querySelector(".list-banner").scrollLeft -= (widthBanner*indexBanner);
        indexBanner=0;
    }else{
        const widthBanner = document.querySelector(".banner").offsetWidth;
        document.querySelector(".list-banner").scrollLeft += widthBanner;
    }
},3000)