import "./modules/mobile_menu";
import Vue from "vue";
import axios from "axios";
axios.defaults.baseURL = "http://webdev-api.loftschool.com/";
new Vue({
  el: "#postsList",
  data: {
    posts: Array
  },
  created() {
    axios.get("/posts/11").then(response => {
      const respData = response.data;
      respData.forEach(function(item) {
        item.date = new Date(item.date * 1000).toLocaleDateString("ru", {
          year: "numeric",
          month: "long",
          day: "2-digit"
        });
      });
      this.posts = respData;
    });
  }
});

let scrollMenu = (function() {
  const news = $(".blog-list").children(".post");
  console.log(news);
  const $item = $(".menu-left__item");
  const $wrapMenu = $(".menu-left");
  let positionArticle = [];
  let offsetHeight = 0; // верхнее смещение для скролла
  let flagAnimation = true;

  // выполняем расчет позиций для каждой статьи
  function _setPositionArticle(elements) {
    console.log(elements);
    elements.forEach(function(item) {
      // $(this) = статья
      positionArticle[item] = {};
      positionArticle[item].top = $(this).offset().top - offsetHeight;
      positionArticle[item].bottom =
        positionArticle[item].top + $(this).innerHeight();

      console.log(positionArticle); // positionArticle массив объектов в верхним и нижним отступом
    });
  }

  const _scrollPageFixMenu = function(e) {
    console.log($news.offset());
    let scroll = window.pageYOffset;
    if (scroll < $news.offset().top) {
      $wrapMenu.removeClass("fixed");
    } else {
      $wrapMenu.addClass("fixed");
    }

    // проверка на отступ сверху, если больше чем нужно ставим добавляем класс fixed
  };

  const _scrollPage = function(e) {
    const isFirstVision = function(element, current) {
      let scroll = window.pageYOffset;
      return (
        scroll >= element.top &&
        scroll < element.bottom &&
        !current.hasClass("menu-left__item--active")
      );
    };
    positionArticle.forEach((element, index) => {
      let $currentElement = $item.eq(index);
      if (isFirstVision(element, $currentElement)) {
        $currentElement
          .addClass("menu-left__item--active")
          .siblings()
          .removeClass("menu-left__item--active");
      }
    });
  };

  const _clickMenu = function(e) {
    if (flagAnimation) {
      flagAnimation = false;
      let $element = $(e.target);
      let index = $element.index();
      let sectionOffset = Math.ceil(positionArticle[index].top);
      $(document).off("scroll", _scrollPage);
      $element.siblings().removeClass("menu-left__item--active");

      $("body, html").animate({ scrollTop: sectionOffset }, 1000, () => {
        $element.addClass("menu-left__item--active");
        $(document).on("scroll", _scrollPage);
        flagAnimation = true;
      });
    }
  };

  $(window).on("load", function(e) {
    console.log("load");
    _setPositionArticle($news);
    $(".menu-left__list").on("click", _clickMenu);
    $(document).on("scroll", _scrollPage);
    $(document).on("scroll", _scrollPageFixMenu);
  });

  $(window).on("resize", function(e) {
    _setPositionArticle($news);
  });

  return;
})();
