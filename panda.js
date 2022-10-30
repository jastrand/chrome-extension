
let fileNames = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];

let imgs = document.getElementsByTagName("img") 

for (imgElt of imgs) {

    let r = Math.floor(Math.random() * fileNames.length) 
    let file = "pandas/" + fileNames[r]
    let url = chrome.runtime.getURL(file)
    imgElt.src = url;
    imgElt.srcset = url;
}

let pics = document.getElementsByTagName("source") 

for (imgElt of pics) {

    let r = Math.floor(Math.random() * fileNames.length) 
    let file = "pandas/" + fileNames[r]
    let url = chrome.runtime.getURL(file)
    imgElt.src = url;
    imgElt.srcset = url;
}

