const img1 = document.querySelector("#image1");
const img2 = document.querySelector("#image2");
const img3 = document.querySelector("#image3");
const img4 = document.querySelector("#image4");
const img5 = document.querySelector("#image5");
function change(image) {
  switch (image) {
    case 1:
      img1.setAttribute("src", "images/image1_2.jpg");
      break;
    case 2:
      img2.setAttribute("src", "images/image2_2.jpg");
      break;
    case 3:
      img3.setAttribute("src", "images/image3_2.jpg");
      break;
    case 4:
      img4.setAttribute("src", "images/image4_2.jpg");
      break;
    case 5:
      img5.setAttribute("src", "images/image5_2.jpg");
      break;
  }
}
function leave(image) {
  switch (image) {
    case 1:
      img1.setAttribute("src", "images/image1.jpg");
      break;
    case 2:
      img2.setAttribute("src", "images/image2.jpg");
      break;
    case 3:
      img3.setAttribute("src", "images/image3.jpg");
      break;
    case 4:
      img4.setAttribute("src", "images/image4.jpg");
      break;
    case 5:
      img5.setAttribute("src", "images/image5.jpg");
      break;
  }
}
