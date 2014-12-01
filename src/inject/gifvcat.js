$(document).ready(function() {
  $('a[href*="imgur.com"]')
    .filter(function() {
      return this.href.match(/.*imgur.com.*\.gif.*/);
    }).each(function() {
      this.href = this.href.replace('gif', 'gifv');
    });

  $('a[href*="gfycat.com"]')
    .filter(function() {
      return this.href.match(/.*gfycat.com.*\.gif.*/);
    }).each(function() {
      this.href = this.href.replace(/(https?:\/\/).*(gfycat.com.*)\.gif.*/, '$1$2')
      console.log(this.href);
    });
});
