function dice(){     
    var randomnumber1=Math.floor(Math.random()*6)+1;
    var imgsrc1="assests/dice"+randomnumber1+".png" 
    document.querySelector(".img1 img").setAttribute("src",imgsrc1);

    var randomnumber2=Math.floor(Math.random()*6)+1;
    var imgsrc2= "assests/dice"+randomnumber2+".png";
    document.querySelector(".img2 img").setAttribute("src",imgsrc2);   

    if(randomnumber1>randomnumber2){
        document.querySelector(".player p").textContent="Player 1 Won";
    }else if(randomnumber1<randomnumber2){
        document.querySelector(".player p").textContent="Player 2 Won";
    }else{
        document.querySelector(".player p").textContent="Draw";
    }

}
dice();

