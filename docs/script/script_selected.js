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


    // //テキストボックスの値を使って、出力するメッセージを生成する
    // const output = "入力された内容は「" + inputValue + "」です。";
    // //出力用のp要素にメッセージを表示
    // document.getElementById("output-message").innerHTML = output;
}


const renderJson = (json) => {
    const studios = json;
    console.log(studios);

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

    // studios.forEach(studio => {
    //     // for (let i = 0; i < 10; i++) {
    //     const studioDiv = document.createElement('div');
    //     const studioTitle = document.createElement("span");
    //     studioTitle.className = 'studio-title';
    //     studioTitle.textContent = studio[i]['name-ja'];
    //     const studioTitleEn = document.createElement("span");
    //     studioTitleEn.className = 'studio-title-en';
    //     studioTitleEn.textContent = studio[i]['name-en'];
    //     const studioTitleDescription = document.createElement("p");
    //     studioTitleDescription.className = 'studio-description';
    //     studioTitleDescription.textContent = studio[i]['description-ja'];
    //     const studioTitlePhoto = document.createElement("img");
    //     studioTitlePhoto.width = 1000;
    //     studioTitlePhoto.className = 'studio-photo';
    //     studioTitlePhoto.src = studio[i]['photo1'];
    //     studioDiv.appendChild(studioTitle);
    //     studioDiv.appendChild(studioTitleEn);
    //     studioDiv.appendChild(studioTitleDescription);
    //     studioDiv.appendChild(studioTitlePhoto);
    //     document.getElementById('studios').appendChild(studioDiv);
    //     // }
    // });
    // document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

const getData = async (inputValue) => {
    try {
        const endpoint = `${uri}/${inputValue}`;
        console.log(endpoint);
        const response = await fetch(endpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            renderJson(jsonResponse);
            console.log("HELLO");
        }
    }
    catch (error) {
        console.log(error);
    }
}

// getData();
