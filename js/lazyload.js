function ImgLazyLoad(t,i){$queryAll(t).forEach(t=>{new IntersectionObserver((t,a)=>{t.forEach(r=>{setTimeout(()=>{var t,e;r.isIntersecting&&(e=(t=r.target).getAttribute(i),t.setAttribute("src",e),a.disconnect())},500)})}).observe(t)})}ImgLazyLoad("body img[data-img]","data-img");