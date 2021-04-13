function setClipboardClassic() {
    navigator.clipboard.writeText("play.pickaria.fr").then(function() {
        window.alert("IP Classic copied !");
      }, function() {
        indow.alert("failed !");
      });
  }

function setClipboardSnapshot() {
    navigator.clipboard.writeText("snapshot.pickaria.fr").then(function() {
        window.alert("IP Snapshot copied  !");
      }, function() {
        indow.alert("failed !");
      });
  }
