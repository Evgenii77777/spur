/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
const ref = {
  $btn: document.querySelector(".collapsible__button"),
  $hidden: document.querySelector(".collapsible__action--hidden"),
  $visible: document.querySelector(".collapsible__action--visible"),
  $content: document.querySelector(".collapsible__content"),
};

(function () {
  ref.$visible.style.display = "none";
  ref.$content.style.overflow = "hidden";
  ref.$content.style.maxHeight = "0";
})();

const showContent = [
  { maxHeight: "0" },
  { maxHeight: ref.$content.scrollHeight + "px" },
];

const hiddenContent = [
  { maxHeight: ref.$content.scrollHeight + "px" },
  { maxHeight: "0" },
];

const animationTiming = {
  duration: 500,
  easing: "ease-out",
};

ref.$btn.addEventListener("click", () => {
  if (ref.$visible.style.display !== "none") {
    ref.$visible.style.display = "none";
    ref.$hidden.style.display = "inline-block";
    ref.$content.animate(hiddenContent, animationTiming);
    ref.$content.style.maxHeight = "0";
  } else {
    ref.$visible.style.display = "inline-block";
    ref.$hidden.style.display = "none";
    ref.$content.animate(showContent, animationTiming);
    ref.$content.style.maxHeight = ref.$content.scrollHeight + "px";
  }
});
