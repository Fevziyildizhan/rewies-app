const img_top = document.getElementById("card-img");
const img_title = document.getElementById('img-title');
const img_p = document.getElementById('img-p')

const backBtn = document.getElementById("back");
const goBtn = document.getElementById("go");

var current_slide;
var current_slide_index;

let reweirs = [

  {     
    title: "Fevzi Paşa",
    paragraf: "Afyonsporu tutuyor Bilgisayar Mühendisliği okuyor",
    img_path : '../img/1.jpg'
  },
  {
    title: "Demet Yıldızhan",
    paragraf: "EV HANIMI",
    img_path : '../img/2.jpg'
  },
  {
    title: "Recep Yıldızhan",
    paragraf: "Pideci Ustası",
    img_path : '../img/3.jpg'
  }
];

/*
var index = -1
var rewCount = reweirs.length;



function showRew(i){
    index = i

    if(i<0){
        index = rewCount - 1
    }

    if( i>= rewCount){
        index = 0
    }
    updateRe()
}
*/

init()

function init(){
    current_slide = 0;
    current_slide_index = current_slide + 1
    updateRe()
}



function updateRe(){
    const rewe = reweirs[current_slide]
   
   img_top.src = rewe.img_path
   img_title.innerText = rewe.title
   img_p.innerText = rewe.paragraf
  
}



backBtn.addEventListener('click', ()=>{
   // index--
    //showRew(index)
    changeSlide(false)
    console.log(index)
    updateRe()
})

goBtn.addEventListener('click', ()=>{
   // index++
   // showRew(index)
   changeSlide()
    console.log(index)
    updateRe()
})


function changeSlide(next = true){
    if (next) {
        current_slide++;
        current_slide_index = current_slide + 1;
        if (current_slide > reweirs.length - 1) {
          current_slide = 0;
          current_slide_index = current_slide + 1;
        }
        if (current_slide > reweirs.length - 1) {
            current_slide_index = 0;
        }
      } else {
        current_slide--;
        current_slide_index = current_slide + 1;
  
        if (current_slide < 0) {
          current_slide = reweirs.length - 1;
          current_slide_index = 0;
        }
      }
      updateRe()
}