'use strict';
/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */

function setViewportProperty() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Полифил для NodeList.forEach(), на случай если забыл про IE 11
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * ========================================================================== */

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
/* ^^^
 * Scripts
 * ========================================================================== */


var acc = document.getElementsByClassName("faq__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.visibility === "visible") {
      panel.style.height = '0';
      panel.style.visibility = "hidden";
      panel.style.opacity = '0';
    } else {
      panel.style.height = "100%";
      panel.style.visibility = "visible";
      panel.style.opacity = "1";
    }
  });
}

(function (window) {
  'use strict';

  function enableScrollBehaviorPolyfill() {
    window.removeEventListener('scroll', enableScrollBehaviorPolyfill);

    if (!'scrollBehavior' in document.documentElement.style) {
      let script = document.createElement('script');
      script.setAttribute('async', true);
      script.setAttribute('src', appData.defers.smoothscroll);
      document.body.appendChild(script);
    }
  }

  window.addEventListener('scroll', enableScrollBehaviorPolyfill);
  let btn = document.getElementById('back_to');
  let classes = {
    visible: 'page-scroller--visible',
    inMemory: 'page-scroller--in-memory'
  };
  let tmpY = 0;
  let viewY = 100;
  let inMemory = false;
  /**
   * Native scrollTo with callback
   * @param offset - offset to scroll to
   * @param callback - callback function
   */

  function scrollTo(offset, callback) {
    const fixedOffset = offset.toFixed();

    const onScroll = function () {
      if (window.pageYOffset.toFixed() === fixedOffset) {
        window.removeEventListener('scroll', onScroll);
        callback();
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }

  function resetScroll() {
    setTimeout(() => {
      if (window.pageYOffset > viewY) {
        btn.classList.add(classes.visible);
      } else if (!btn.classList.contains(classes.inMemory)) {
        btn.classList.remove(classes.visible);
      }
    }, 100);

    if (!inMemory) {
      tmpY = 0;
      btn.classList.remove(classes.inMemory);
    }

    inMemory = false;
  }

  function addResetScroll() {
    window.addEventListener('scroll', resetScroll);
  }

  function removeResetScroll() {
    window.removeEventListener('scroll', resetScroll);
  }

  addResetScroll();

  let onClick = function () {
    removeResetScroll();

    if (window.pageYOffset > 0 && tmpY === 0) {
      inMemory = true;
      tmpY = window.pageYOffset;
      btn.classList.add(classes.inMemory);
      scrollTo(0, () => {
        addResetScroll();
      });
    } else {
      btn.classList.remove(classes.inMemory);
      scrollTo(tmpY, () => {
        tmpY = 0;
        addResetScroll();
      });
    }
  };

  btn.addEventListener('click', onClick);
})(window);

var acc = document.getElementsByClassName("rates-service__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}