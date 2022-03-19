console.log("loopcv injected");

(function () {
  const callback = () => {
    const els = document.querySelectorAll(".text-start > .v-btn:first-child");
    [...els].forEach((el) => {
      const button = document.createElement("button");
      button.innerText = "Easy Apply";
      el.parentNode.insertBefore(button, el);
    });
  };

  document.addEventListener("DOMContentLoaded", callback, false);

  callback();
})();
