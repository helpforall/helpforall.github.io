$(document).ready(function(){var skills=$('a[href="#/skills"]');$(".tcon").on("click",function(){$(this).toggleClass("tcon-transform");$("nav ul").slideToggle(300)});$(window).on("resize",function(){if($(this).width()>600){$("nav ul").show();$(".tcon").removeClass("tcon-transform")}else{$("nav ul").hide()}});$("nav a").click(function(){if($(window).width()<600){$("nav ul").slideToggle();$(".tcon").toggleClass("tcon-transform")}});$(window).on('hashchange',function(){if(location.hash.slice(1)==="/skills"){$(setTimeout(function(){$(".html > span").css("width","75%")},10));$(setTimeout(function(){$(".css > span").css("width","85%")},300));$(setTimeout(function(){$(".javascript > span").css("width","55%")},700))}})})
