const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]

const randomImgFloat = Math.random() * images.length;
const randomImageIndex = Math.floor(randomImgFloat);
//다른 파일이라도 html하나에 묶여있어서 함수명을 다르게 해줘야 한다.

const chosenImage = images[randomImageIndex];

//console.log(chosenImage);

const BGImage = document.createElement("img");

BGImage.src =`image/${chosenImage}`;
//console.log(BGImage);

document.body.appendChild(BGImage);
//append는 제일 뒤에 위차하게...
//prepend는 제일 앞에 위치하게 하는것.