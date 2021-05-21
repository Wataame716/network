const uri = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
const id = 'sunflower';
// const objectID = 437980
// const sheet = 'Studio';
// const endpoint = "https://collectionapi.metmuseum.org/public/collection/v1/objects/436534";


const showMessage = () => {

    const textbox = document.getElementById("input-message");
    console.log("tes");
    console.log(textbox);
    const inputValue = textbox.value;
    getData(inputValue);
}

const renderJson = (json) => {
    const studios = json;
    // console.log(studios);
    const studioDiv = document.createElement('div');
    const studioTitle = document.createElement("span");
    studioTitle.className = 'studio-title';
    studioTitle.textContent = studios['title'];

    const studioTitlePhoto = document.createElement("img");
    studioTitlePhoto.width = 1000;
    studioTitlePhoto.className = 'studio-photo';
    studioTitlePhoto.src = studios['primaryImage'];
    studioDiv.appendChild(studioTitle);
    studioDiv.appendChild(studioTitlePhoto);
    document.getElementById('studios').appendChild(studioDiv);
}

const getData = async (inputValue) => {
    try {
        const endpoint = `${uri}/${inputValue}`;
        // console.log(endpoint);
        const response = await fetch(endpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            // console.log(jsonResponse);
            renderJson(jsonResponse);
            console.log("HELLO");
        }
    }
    catch (error) {
        console.log(error);
    }
}

// getData();
const load_func = function () {
    console.log(document);
    const textarea = document.getElementById("input-message");
    console.log(textarea);
    textarea.addEventListener("keydown", function (e) {
        if (e.code === 'Enter') {
            showMessage();
        }
    })


    const button = document.getElementById("push");
    button.addEventListener("click", function (e) {
        showMessage();
    })
}

console.log(document);

window.addEventListener('load', function () {
    load_func()
})