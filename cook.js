// API読み込み
var tag = document.createElement('script');
tag.src = "httms://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// API読み込み後にプレーヤーの設定
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player');
}

// ボタンクリック時の操作
document.getElementById('play').addEventListener('click', function() {
  player.playVideo();
}, false);