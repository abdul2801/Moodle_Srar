function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
const isElementLoaded = async selector => {
  while ( document.querySelector(selector) === null) {
    await new Promise( resolve =>  requestAnimationFrame(resolve) )
  }
  return document.querySelectorAll(selector);
};
 
 async function x() {
  // console.log(c)
  let starred = document.querySelector('a[data-value="favourites"]');
  

  // console.log(starred)
  if(starred) {
  starred.click()
  let courses = await isElementLoaded('div[data-grouping="favourites"] > div[data-region="course-content"]')
  console.log(courses)
}

}
function b() {
  setTimeout(() => {x()}, 1000);
}

window.addEventListener("load",b,false);