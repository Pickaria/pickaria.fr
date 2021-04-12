function setClipboardClassic() {
    navigator.clipboard.writeText("play.pickaria.fr").then(function() {
        window.alert("IP copied !");
      }, function() {
        indow.alert("failed !");
      });
  }

function setClipboardSnapshot() {
    navigator.clipboard.writeText("snapshot.pickaria.fr").then(function() {
        window.alert("IP copied !");
      }, function() {
        indow.alert("failed !");
      });
  }
