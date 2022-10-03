// "use strict"
var playerArea = document.querySelector("#player-area");
function loadProjectFile(file) {
  var extension = file.name.split(".").pop();
  if (!["sb", "sb2", "sb3"].includes(extension)) {
    return;
  }
  player.loadProjectFromFile(file);
}

var player = new P.player.Player();
player.addControls();

playerArea.appendChild(player.root);

window.player = player;
// playerArea.style.height = projectArea.style.height = 'auto';
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
var FileURL = "main/gb.sb3";
GetFileObjectFromURL(FileURL, function (fileObject) {
  player.loadProjectFromFile(fileObject);
});
