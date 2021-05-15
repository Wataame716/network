function searchArtObjects() {
    var result_area = document.getElementById('result');
    result_area.innerHTML = ('');
    var input = document.getElementById("input").value;
    var request = new XMLHttpRequest();
    request.open("GET", `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${input}`);
    request.addEventListener("load", (event) => {
        if (event.target.status !== 200) {
            console.error(`${event.target.status}: ${event.target.statusText}`);
            return;
        }
        var objectsJson = JSON.parse(event.target.responseText);
        if (!objectsJson.objectIDs) {
            nullInfo();
            return;
        }
        getArtInfo(objectsJson.objectIDs);
    });
    request.addEventListener("error", () => {
        console.error("Network Error");
    });
    request.send();
}

function getArtInfo(objectIDs) {
    if (objectIDs.length > 101) {
        searchInDetail();
        return;
    }
    objectIDs.sort(function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    for (var i = 0; i < objectIDs.length; i++) {
        var request = new XMLHttpRequest();
        request.open("GET", `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectIDs[i]}`);
        request.addEventListener("load", (event) => {
            if (event.target.status !== 200) {
                console.error(`${event.target.status}: ${event.target.statusText}`);
                return;
            }
            var objectJson = JSON.parse(event.target.responseText);
            insertArtInfo(objectJson);
        });
        request.addEventListener("error", () => {
            console.error("Network Error");
        });
        request.send();
    }
}

function insertArtInfo(objectJson) {
    var result = document.getElementById('result');
    result.insertAdjacentHTML('afterbegin',
        `<div class="art_area col-md-4">
      <span class="art_img"><img src="${objectJson.primaryImage}"></span></br>
      <span class="art_title">タイトル：${objectJson.title}</span></br>
      <span class="art_artist_name">製作者：${objectJson.artistDisplayName}</span></br>
      <span class="art_culture">関連する国：${objectJson.culture}</span></br>
    </div>`);
}
