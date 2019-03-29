var arrImg = ["image/image1.jpg", "image/image2.jpg", "image/image3.png","image/image4.jpg"];
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");


function imageRandom1() {
    for (let i = 0; i < arrImg.length; i++) {
        let random = Math.floor((Math.random() * arrImg.length));
        document.images['img1'].src = arrImg[random];
    }
}

function imageRandom2() {
    for (let i = 0; i < arrImg.length; i++) {
        let random = Math.floor((Math.random() * arrImg.length));
        document.images['img2'].src = arrImg[random];
    }
}

function imageRandom3() {
    for (let i = 0; i < arrImg.length; i++) {
        let random = Math.floor((Math.random() * arrImg.length));
        document.images['img3'].src = arrImg[random];
    }
}

function imageRandom4() {
    for (let i = 0; i < arrImg.length; i++) {
        let random = Math.floor((Math.random() * arrImg.length));
        document.images['img4'].src = arrImg[random];
    }
}




