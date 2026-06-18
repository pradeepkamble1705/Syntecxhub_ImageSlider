//get required html elements to slider
let items = document.querySelectorAll(".slider .list .item");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

//Config param
let countItem = items.length;
let itemActive = 0;
//next button event
nextButton.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  //run slider
  showSlider();
};

//previous button event
prevButton.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  //run slider
  showSlider();
};

//auto run slider
let refreshInterval = setInterval(()=>{
    nextButton.click();
}, 3000)

function showSlider() {
  //remove item active old
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailActiceOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbnailActiceOld.classList.remove("active");

  //active new item
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");

  //clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(()=>{
    nextButton.click();
}, 3000)
}

//click thumbnail
thumbnails.forEach((thumbnail, index)=> {
  thumbnail.addEventListener('click', ()=>{
    itemActive = index;
    //run slider to show new data
    showSlider();
  })  
})
