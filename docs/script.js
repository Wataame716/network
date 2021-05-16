const uri = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=';
const id = 'sunflower';
const objectID = 436524
// const sheet = 'Studio';
const endpoint = `${uri}${id}`;

const uri2 = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';


const renderJson = (json) => {
    const studios = json;
    // console.log(studios);

    // studios.forEach(studio => {
    const studioDiv = document.createElement('div');
    const studioTitle = document.createElement("p");
    studioTitle.className = 'studio-title';
    studioTitle.textContent = studios['title'];

    const studioTitlePhoto = document.createElement("img");
    studioTitlePhoto.width = 100;
    studioTitlePhoto.className = 'studio-photo';
    studioTitlePhoto.src = studios['primaryImage'];
    studioDiv.appendChild(studioTitle);
    studioDiv.appendChild(studioTitlePhoto);
    document.getElementById('Top').appendChild(studioDiv);
    // });


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

const getData = async () => {
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse.objectIDs);
            jsonResponse.objectIDs.forEach(ID => {
                console.log(`ID : ${ID}`);
                getData2(ID);
            });
            // renderJson(jsonResponse.objectIDs);
            // console.log("HELLO");
        }
    }
    catch (error) {
        console.log(error);
    }
}

const getData2 = async (objectID) => {
    try {
        const endpoint2 = `${uri2}/${objectID}`;
        console.log(`endpoint2 =  ${endpoint2}`)
        const response2 = await fetch(endpoint2);
        console.log(response2)
        if (response2.ok) {
            const jsonResponse2 = await response2.json();
            // console.log(jsonResponse);
            renderJson(jsonResponse2);
            console.log("HELLO");
        }
    }
    catch (error) {
        console.log("BAD");
        console.log(error);
    }
}

getData();

