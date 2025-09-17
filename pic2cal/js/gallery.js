(function(){
  function loadJSON(url){
    return fetch(url, { cache: 'no-store' }).then(function(r){
      if(!r.ok) throw new Error('Failed to load '+url);
      return r.json();
    });
  }
  function createImage(src){
    var img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = 'Pic2Cal app screenshot';
    img.src = src;
    return img;
  }
  function init(){
    var gallery = document.getElementById('gallery');
    if(!gallery) return;
    var base = 'assets/screenshots/';
    loadJSON(base + 'screenshots.json').then(function(list){
      list.forEach(function(path){
        // Normalize mixed-case or platform paths already handled in JSON
        gallery.appendChild(createImage(base + path));
      });
    }).catch(function(){
      // graceful fallback: no gallery
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();


