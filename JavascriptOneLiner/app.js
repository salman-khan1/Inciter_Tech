const text=document.querySelector('h1')
text.textContent=Math.random()>=0.5;
const arr1=['merging','the']
const arr2=['two','arrays','the']
// const merge=[...arr1,...arr2]
const merge=[...new Set([...arr1,...arr2])]//when you want to avoid duplicate
console.log(merge)

merge.forEach((todo) => {
    const el = document.createElement("li");
    const content = document.createTextNode (todo);
    el.appendChild(content);
    document.body.appendChild(el);
    });


    //Extracting From object
    const user={
        age:28,
        tweet:20,
        todo:['Extrating from object','lets see']
    }
    const {age,tweet,todo:[extracting,see]}=user
    console.log(see)

    //Generating the colors
 document.body.style.background=`#${Math.floor(Math.random()*0xffffff).toString(16)}`

//Copy to clipboard
const btn=document.createElement('button')
    btn.innerText='click and copy'
    const myDiv=document.querySelector('div')
    myDiv.appendChild(btn)
const button=document.querySelector("button")
btn.addEventListener('click',()=>{
    copy('on click i copy')
    alert('text copied')
})
//Copy function
const copy=(text)=>navigator.clipboard.writeText(text)

//Transition
const btn2=document.getElementById('trans')
btn2.addEventListener('click',()=>{
    btn2.style.opacity=0
})
btn2.addEventListener('transitionend',()=>{
    btn2.style.display='none'
})

// Short if statement
const user2='abc'
const getUserData = () => {
    if(!user2) return;
const data ={
name: "developedbyed",
age: 28,
avatar: "https://wahoo.jpged",
};
console.log(data)
};
getUserData()
//Console.table
const videos = [
{ name: "Tailwind with React", views: 25000 },
{ name: "Top 10 CSS one liners", views: 123000 },
{ name: "Build a portofolio website", views: 2000 },
];
console.table(videos);

//Screen capture
// const previewElem=document.getElementById('preview')
// const VideoBtn=document.querySelector('#vbtn')

// VideoBtn.addEventListener('click',async()=>{
//         previewElem.srcObject=await navigator.mediaDevices.getDisplayMedia(
//             {video:{cursor:"always"},
//             audio:false})
// })

// const previewElem = document.getElementById("preview");
// const VideoBtn = document.querySelector("#vbtn");
// VideoBtn.addEventListener("click", async () => {
// previewElem.srcObject = await navigator.mediaDevices.getDisplayMedia ({
// video: { cursor: "always" },
// audio: false,
// });
// });
document.addEventListener('DOMContentLoaded', function() {
    const previewElem = document.getElementById("preview");
    const VideoBtn = document.querySelector("#vbtn");
    VideoBtn.addEventListener("click", async () => {
      previewElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: "always" },
        audio: false,
      });
    });
  });