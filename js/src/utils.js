// build time:Tue Aug 22 2017 21:34:48 GMT+0800 (中国标准时间)
NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var e=$(this);var t=e.attr("title");var i=e.parent("a");if(i.size()<1){var r=e.attr("data-original")?this.getAttribute("data-original"):this.getAttribute("src");i=e.wrap('<a href="'+r+'"></a>').parent("a")}i.addClass("fancybox fancybox.image");i.attr("rel","group");if(t){i.append('<p class="image-caption">'+t+"</p>");i.attr("title",t)}});$(".fancybox").fancybox({helpers:{overlay:{locked:false}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({effect:"fadeIn",threshold:0})},registerESCKeyEvent:function(){$(document).on("keyup",function(e){var t=e.which===27&&$(".search-popup").is(":visible");if(t){$(".search-popup").hide();$(".search-popup-overlay").remove();$("body").css("overflow","")}})},registerBackToTop:function(){var e=50;var t=$(".back-to-top");$(window).on("scroll",function(){t.toggleClass("back-to-top-on",window.pageYOffset>e);var i=$(window).scrollTop();var r=$("#content").height();var a=$(window).height();var o=r>a?r-a:$(document).height()-a;var n=i/o;var s=Math.round(n*100);var c=s>100?100:s;$("#scrollpercent>span").html(c)});t.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){var e=$("iframe");var t=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"];var i=new RegExp(t.join("|"));e.each(function(){var e=this;var t=$(this);var o=r(t);var n;if(this.src.search(i)>0){var s=a(o.width,o.height);t.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var c=document.createElement("div");c.className="fluid-vids";c.style.position="relative";c.style.marginBottom="20px";c.style.width="100%";c.style.paddingTop=s+"%";var h=e.parentNode;h.insertBefore(c,e);c.appendChild(e);if(this.src.search("music.163.com")>0){n=r(t);var d=n.width>o.width||n.height<o.height;if(d){c.style.paddingTop=a(n.width,o.height)+"%"}}}});function r(e){return{width:e.width(),height:e.height()}}function a(e,t){return t/e*100}},addActiveClassToMenuItem:function(){var e=window.location.pathname;e=e==="/"?e:e.substring(0,e.length-1);$('.menu-item a[href^="'+e+'"]:first').parent().addClass("menu-item-active")},hasMobileUA:function(){var e=window.navigator;var t=e.userAgent;var i=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return i.test(t)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){if(!this.isDesktop()||this.isPisces()){return}$(".sidebar-toggle").trigger("click")},isMist:function(){return CONFIG.scheme==="Mist"},isPisces:function(){return CONFIG.scheme==="Pisces"},getScrollbarWidth:function(){var e=$("<div />").addClass("scrollbar-measure").prependTo("body");var t=e[0];var i=t.offsetWidth-t.clientWidth;e.remove();return i},needAffix:function(){return this.isPisces()}};
//rebuild by neat 