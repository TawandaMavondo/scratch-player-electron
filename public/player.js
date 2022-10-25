var playerAreas = document.querySelectorAll("#player-area");

// Initialize the Player
let getPlayerInstance = function () {
  let player = new P.player.Player();
  player.addControls();
  return player;
};

// playerArea.appendChild(getPlayerInstance().root);

var GetFileBlobUsingURL = function (url, convertBlob) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.addEventListener("load", function () {
    convertBlob(xhr.response);
  });
  xhr.send();
};

var blobToFile = function (blob, name) {
  blob.lastModifiedDate = new Date();
  blob.name = name;
  return blob;
};

var GetFileObjectFromURL = function (filePathOrUrl, convertBlob) {
  GetFileBlobUsingURL(filePathOrUrl, function (blob) {
    convertBlob(blobToFile(blob, filePathOrUrl));
  });
};

playerAreas.forEach((it) => {
  let path = it.dataset.gamePath;
  let player = getPlayerInstance();
  player.options.autoplayPolicy = "never"
  GetFileObjectFromURL(path, function (fileObject) {
    player.loadProjectFromFile(fileObject);
  });
  console.log(player);
  it.appendChild(player.root);
});
