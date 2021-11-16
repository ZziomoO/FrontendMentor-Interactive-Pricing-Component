function setPrice(){

    slider = document.getElementById("checkbox_slider");
    whell = document.getElementById("checkbox_whell");
    range = document.getElementById('range').value;

    switch (parseInt(range)){
        case 1:
            price = 8;
            views = '10K';
            break;
        case 2:
            price = 12;
            views = '50K';
            break;
        case 3:
            price = 16;
            views = '100K';
            break;
        case 4:
            price = 24;
            views = '500K';
            break;
        case 5:
            price = 36;
            views = '1M';
            break;
    }
    if(document.getElementById('checkbox').checked == true){
        price *= 9;
        document.getElementById("time_holder").innerHTML = '/ year';
        whell.classList.add("right_whell")
        whell.classList.remove("left_whell")
        slider.style.background = "#a1f2e9";
    }
    else{
        document.getElementById("time_holder").innerHTML = '/ month';
        whell.classList.add("left_whell")
        whell.classList.remove("right_whell")
        slider.style.background = "#ebeffb";
    }
    gradient = 100 - (100 - ((parseInt(range)-1)*25));
    str = 'linear-gradient(90deg, #a1f2e9 '+gradient+'%, #ebeffb '+gradient+'%)';
    document.getElementById("range").style.setProperty('--scrollbar-background', str);
    str = '$'+price+'.00';
    document.getElementById("price_holder").innerHTML = str;
    str = views+' PAGEVIEWS';
    document.getElementById("page_views").innerHTML = str;

}