const list = document.querySelector("#list");
const button = document.querySelector("button");
const input = document.querySelector("#favchap");

let chaptersArray = getChapterList() || []

chaptersArray.forEach(chapter => { displayList(chapter) });

button.addEventListener("click", () => {

    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList()
        input.value = "";
        input.focus();
    }

})

// button.addEventListener("click", () => {
//     if (input.value != "") {
//         displayList(input.value);
//         chaptersArray.pust(input.value);
//         setChapterList()
//         input.value = ""; 
//         input.focus();

// const listItem = document.createElement("li");
// const btn = document.createElement("button");
//   listItem.textContent = input.value;
// btn.textContent = "❌";
// btn.ariaLabel = `Remove ${input.value}`;
// btn.addEventListener("click", () => {
//         listItem.remove();
//         input.focus();
//     });
//     listItem.appendChild(btn);
//     list.appendChild(listItem);
// }
// input.focus();
// input.value = "";
// });

function displayList(item) {
    let li = document.createElement("li");
    let deletebutton = document.createElement("button")
    li.textContent = item;
    deletebutton.textContent = "❌";
    deletebutton.classList.add("delete");
    li.append(deletebutton);
    list.append(li)
    deletebutton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"))
}

//chapter = chapter.slice(0, chapter.length - 1);
//chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character


//chaptersArray = chaptersArray.filter((item) => item !== chapter)

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();

}

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
});
