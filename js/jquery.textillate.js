!function(t){"use strict";function e(e){return/In/.test(e)||t.inArray(e,t.fn.textillate.defaults.inEffects)>=0}function n(e){return/Out/.test(e)||t.inArray(e,t.fn.textillate.defaults.outEffects)>=0}function i(t){return"true"!==t&&"false"!==t?t:"true"===t}function a(e){var n=e.attributes||[],a={};return n.length?(t.each(n,function(t,e){var n=e.nodeName.replace(/delayscale/,"delayScale");/^data-in-*/.test(n)?(a.in=a.in||{},a.in[n.replace(/data-in-/,"")]=i(e.nodeValue)):/^data-out-*/.test(n)?(a.out=a.out||{},a.out[n.replace(/data-out-/,"")]=i(e.nodeValue)):/^data-*/.test(n)&&(a[n.replace(/data-/,"")]=i(e.nodeValue))}),a):a}function s(t){for(var e,n,i=t.length;i;e=parseInt(Math.random()*i),n=t[--i],t[i]=t[e],t[e]=n);return t}function l(t,e,n){t.addClass("animated "+e).css("visibility","visible").show(),t.one("animationend webkitAnimationEnd oAnimationEnd",function(){t.removeClass("animated "+e),n&&n()})}function o(i,a,o){var r=i.length;return r?(a.shuffle&&(i=s(i)),a.reverse&&(i=i.toArray().reverse()),void t.each(i,function(i,s){function c(){e(a.effect)?u.css("visibility","visible"):n(a.effect)&&u.css("visibility","hidden"),r-=1,!r&&o&&o()}var u=t(s),f=a.sync?a.delay:a.delay*i*a.delayScale;u.text()?setTimeout(function(){l(u,a.effect,c)},f):c()})):void(o&&o())}var r=function(i,s){var l=this,r=t(i);l.init=function(){l.$texts=r.find(s.selector),l.$texts.length||(l.$texts=t('<ul class="texts"><li>'+r.html()+"</li></ul>"),r.html(l.$texts)),l.$texts.hide(),l.$current=t("<span>").html(l.$texts.find(":first-child").html()).prependTo(r),e(s.in.effect)?l.$current.css("visibility","hidden"):n(s.out.effect)&&l.$current.css("visibility","visible"),l.setOptions(s),l.timeoutRun=null,setTimeout(function(){l.options.autoStart&&l.start()},l.options.initialDelay)},l.setOptions=function(t){l.options=t},l.triggerEvent=function(e){var n=t.Event(e+".tlt");return r.trigger(n,l),n},l.in=function(i,s){i=i||0;var r,c=l.$texts.find(":nth-child("+((i||0)+1)+")"),u=t.extend(!0,{},l.options,c.length?a(c[0]):{});c.addClass("current"),l.triggerEvent("inAnimationBegin"),l.$current.html(c.html()).lettering("words"),"char"==l.options.type&&l.$current.find('[class^="word"]').css({display:"inline-block","-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"}).each(function(){t(this).lettering()}),r=l.$current.find('[class^="'+l.options.type+'"]').css("display","inline-block"),e(u.in.effect)?r.css("visibility","hidden"):n(u.in.effect)&&r.css("visibility","visible"),l.currentIndex=i,o(r,u.in,function(){l.triggerEvent("inAnimationEnd"),u.in.callback&&u.in.callback(),s&&s(l)})},l.out=function(e){var n=l.$texts.find(":nth-child("+((l.currentIndex||0)+1)+")"),i=l.$current.find('[class^="'+l.options.type+'"]'),s=t.extend(!0,{},l.options,n.length?a(n[0]):{});l.triggerEvent("outAnimationBegin"),o(i,s.out,function(){n.removeClass("current"),l.triggerEvent("outAnimationEnd"),s.out.callback&&s.out.callback(),e&&e(l)})},l.start=function(t){setTimeout(function(){l.triggerEvent("start"),function e(t){l.in(t,function(){var n=l.$texts.children().length;t+=1,!l.options.loop&&t>=n?(l.options.callback&&l.options.callback(),l.triggerEvent("end")):(t%=n,l.timeoutRun=setTimeout(function(){l.out(function(){e(t)})},l.options.minDisplayTime))})}(t||0)},l.options.initialDelay)},l.stop=function(){l.timeoutRun&&(clearInterval(l.timeoutRun),l.timeoutRun=null)},l.init()};t.fn.textillate=function(e,n){return this.each(function(){var i=t(this),s=i.data("textillate"),l=t.extend(!0,{},t.fn.textillate.defaults,a(this),"object"==typeof e&&e);s?"string"==typeof e?s[e].apply(s,[].concat(n)):s.setOptions.call(s,l):i.data("textillate",s=new r(this,l))})},t.fn.textillate.defaults={selector:".texts",loop:!1,minDisplayTime:2e3,initialDelay:0,"in":{effect:"fadeInLeftBig",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},out:{effect:"hinge",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},autoStart:!0,inEffects:[],outEffects:["hinge"],callback:function(){},type:"char"}}(jQuery);