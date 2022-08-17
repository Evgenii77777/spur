/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
const root = {
  btn: document.querySelector(".collapsible__button"),
  hidden: document.querySelector(".collapsible__action--hidden"),
  visible: document.querySelector(".collapsible__action--visible"),
  content: document.querySelector(".collapsible__content"),
};

root.btn.addEventListener("click", () => {
  if (root.visible.style.display !== "none") {
    root.visible.style.display = "none";
    root.hidden.style.display = "inline-block";
    root.content.style.overflow = "hidden";
    root.content.style.maxHeight = "0";
    root.content.style.transition = "max-height 0.3s ease-out";
  } else {
    root.visible.style.display = "inline-block";
    root.hidden.style.display = "none";
    root.content.style.maxHeight = root.content.scrollHeight + "px";
  }
});
