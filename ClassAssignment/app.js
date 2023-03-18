const container = document.querySelector(".container");

let imgSrc=[
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300?grayscale',
    'https://picsum.photos/200/300/?blur=2',
    'https://picsum.photos/id/870/200/300?grayscale&blur=2'
]
const generateImages=()=>{
    // container.innerHTML=""
// for(i=0; i<imgSrc.length;i++){
//   const img = document.createElement("img");
//   img.setAttribute("src", imgSrc[i]);
// //   img.innerHTML = `<div ><img src="${imgSrc[i]}"/></div>`
//     container.appendChild(img)
// }
  imgSrc.map((item)=>{
  const img = document.createElement("img");
  img.setAttribute("src",item)
  container.appendChild(img)
  })
}
generateImages();

function onSearch(event) {
    console.log(event.target.value);
    container.innerHTML = "";
    let filtered = imgSrc.filter((item)=>item.includes(event.target.value));
   filtered.map((item)=>{
    const img = document.createElement("img");
    img.setAttribute("src", item);
    container.appendChild(img)

   })
// for(i=0; i<filtered.length;i++){
//     const img = document.createElement("img");
//     img.setAttribute("src", filtered[i]);
//   // img.innerHTML = `<div ><img src="${imgSrc[i]}"/></div>`
//     container.appendChild(img)
//   } 
}