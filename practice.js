// //1
// const showName = () => {
//   document.querySelector("#myName").value = "NNN";
// };

// let btn = document.querySelector("#btnName");
// btn.addEventListener("click", showName);

//2;
// const lightOn = () => {
//   document.querySelector("#image").src = "images/lighton.png";
// };
// const lightOff = () => {
//   document.querySelector("#image").src = "images/lightoff.png";
// };

// let a = document.querySelector("#imgSec");
// a.addEventListener("mouseover", lightOn);
// a.addEventListener("mouseout", lightOff);

// //3
// const showResult = () => {
//   document.querySelector("#pic") = "you clicked me";
//   document.querySelector("#pic").src = "images/smileyface.png";
// };

// document.querySelector("#btndbName").addEventListener("dblclick", showResult);

//4

// const changeRed = () => {
//   document.querySelector("#stopDiv").style.backgroundColor = "red";
//   document.querySelector("#readyDiv").style.backgroundColor = "black";
//   document.querySelector("#goDiv").style.backgroundColor = "black";
// };
// const changeYellow = () => {
//   document.querySelector("#stopDiv").style.backgroundColor = "black";
//   document.querySelector("#goDiv").style.backgroundColor = "black";
//   document.querySelector("#readyDiv").style.backgroundColor = "yellow";
// };
// const changeGreen = () => {
//   document.querySelector("#stopDiv").style.backgroundColor = "black";
//   document.querySelector("#readyDiv").style.backgroundColor = "black";
//   document.querySelector("#goDiv").style.backgroundColor = "green";
// };

// document.querySelector("#btnStop").addEventListener("click", changeRed);
// document.querySelector("#btnReady").addEventListener("click", changeYellow);
// document.querySelector("#btnGo").addEventListener("click", changeGreen);

// 5
// const changeBorderColor1 = () => {
//   document.querySelector("#firstName").classList.add("border-danger");
// };
// const changeBorderColor2 = () => {
//   document.querySelector("#lastName").classList.add("border-primary");
// };
// document
//   .querySelector("#btn2Name")
//   .addEventListener("click", changeBorderColor1);
// document
//   .querySelector("#btn2Name")
//   .addEventListener("click", changeBorderColor2);

//6
// function getValue() {
//   let input = document.querySelector("#myName2").value;
//   if (input.length < 8) {
//     document.querySelector("#errMsg").innerHTML = "less than 8";
//   } else {
//     document.querySelector("#errMsg").innerHTML = "";
//   }
//   console.log(input);
// }

// document.querySelector("#btnSub2").addEventListener("click", getValue);

//7
// let list = document.querySelector("#hobbies>ul");
// console.log(list);
// const showHobbies = () => {
//   for (let i = 1; i < 4; i++) {
//     let hobbies = prompt("what are your hobbies?");
//     let li = document.createElement("li");
//     li.innerHTML = hobbies;
//     list.appendChild(li);
//   }
// };

// document.querySelector("#btnHobbies").addEventListener("click", showHobbies);

//8

let list = document.querySelector("#displayCard");
console.log(list);

const getObject = () => {
  let person = {
    userName: "Nancy",
    userImg: "images/face.jpg",
    occupation: "web developer",
    hobbies: "Listening to music, singing",
  };

  let profile = `
<img src="">

`;

  //console.log(person);

  let img = document.createElement("img");
  img.src = person.userImg;
  list.append(img);

  let h1 = document.createElement("h1");
  h1.innerHTML = person.userName;
  list.append(h1);

  let p2 = document.createElement("p");
  p2.innerHTML = person.occupation;
  list.append(p2);

  //console.log(person.userImg);
  let p3 = document.createElement("p");
  p3.innerHTML = person.hobbies;
  list.append(p3);
};

document.querySelector("#btnProfile").addEventListener("click", getObject);
