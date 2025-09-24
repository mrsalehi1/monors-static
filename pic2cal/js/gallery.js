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
    img.onerror = function() {
      console.log('Failed to load image:', src);
    };
    return img;
  }
  function init(){
    var gallery = document.getElementById('gallery');
    if(!gallery) {
      console.log('Gallery element not found');
      return;
    }
    
    // Fallback images if JSON fails
    var fallbackImages = [
      'assets/screenshots/ipad/1.jpg',
      'assets/screenshots/ipad/2.jpg',
      'assets/screenshots/ipad/3.jpg',
      'assets/screenshots/ipad/4.jpg',
      'assets/screenshots/iphone/1.jpg',
      'assets/screenshots/iphone/2.jpg',
      'assets/screenshots/iphone/3.jpg',
      'assets/screenshots/iphone/4.jpg',
      'assets/screenshots/iphone/5.jpg'
    ];
    
    var base = 'assets/screenshots/';
    loadJSON(base + 'screenshots.json').then(function(list){
      console.log('Loaded screenshots list:', list);
      list.forEach(function(path){
        gallery.appendChild(createImage(base + path));
      });
    }).catch(function(error){
      console.log('JSON load failed, using fallback images:', error);
      // Use fallback images
      fallbackImages.forEach(function(src){
        gallery.appendChild(createImage(src));
      });
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();


