function userDialog() {
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");

    if (name && age) {
        alert(`Hi, ${name}! you're ${age} years old.`);
    } else {
        alert("Please enter your neme and age.");
    }
}

function showDeveloperInfo(lastName, firstName, position = "Developer") {
    alert(`Surname: ${lastName}\nName: ${firstName}\nJob: ${position}`);
}

function compareStrings() {
    let str1 = prompt("Enter the first line:");
    let str2 = prompt("Enter the second line:");

    if (str1 > str2) {
        alert(`This line '${str1}' is longer than this line '${str2}'.`);
    } else if (str2 > str1) {
        alert(`This line '${str2}' is longer than this line '${str1}'.`);
    } else {
        alert("They are the same length.");
    }
}

function changeBackground() {
    let body = document.querySelectorAll("body")[0];
    body.style.backgroundColor = "lightblue";
    setTimeout(() => {
        body.style.backgroundColor = "";
    }, 30000);
}

function redirect() {
    location.href = "RAMInfo.html";
}

document.getElementById("changeBackgroundBtn").addEventListener("click", changeBackground);
document.getElementById("redirectBtn").addEventListener("click", redirect);

function changeInnerHTML() {
    let contentElement = document.getElementById("textContentElement");
    contentElement.innerHTML = "<strong>New HTML filler</strong>";
}

function replaceWithOuterHTML() {
    let contentElement = document.getElementById("content");
    let newHtmlContent = "<div id='newContent'><strong>New element will change the previous one</strong></div>";
    contentElement.outerHTML = newHtmlContent;
}

function changeNodeValue() {
    let textNodeElement = document.getElementById("textNodeElement");
    textNodeElement.textContent = "New text filler";
}

function changeTextContent() {
    let textContentElement = document.getElementById("textContentElement");
    textContentElement.textContent = "New text without HTML tags";
}

document.getElementById("changeInnerHTMLBtn").addEventListener("click", changeInnerHTML);
document.getElementById("replaceWithOuterHTMLBtn").addEventListener("click", replaceWithOuterHTML);
document.getElementById("changeNodeValueBtn").addEventListener("click", changeNodeValue);
document.getElementById("changeTextContentBtn").addEventListener("click", changeTextContent);

function createElements() {
    let newDiv = document.createElement("div");
    newDiv.textContent = " New div element.";

    let textNode = document.createTextNode("New text node.");

    newDiv.prepend(textNode);

    document.body.appendChild(newDiv);
}


function writeText() {
    document.write("<p>This text was added with document.write.</p>");
}

function replaceElement() {
    let existingElement = document.getElementById("replaceElement");
    existingElement.replaceWith(document.createTextNode("New text content."));
}

function insertAfterExistingElement() {
    let existingElement = document.getElementById("insertAfterElement");
    let newElement = document.createElement("p");
    newElement.textContent = "New element inserted after existing one.";
    existingElement.after(newElement);
}

function removeElement() {
    let elementToRemove = document.getElementById("removeElement");
    elementToRemove.remove();
}

document.getElementById("createElementsBtn").addEventListener("click", createElements);
document.getElementById("replaceElementBtn").addEventListener("click", replaceElement);
document.getElementById("insertAfterElementBtn").addEventListener("click", insertAfterExistingElement);
document.getElementById("removeElementBtn").addEventListener("click", removeElement);
document.getElementById("writeTextBtn").addEventListener("click", writeText);