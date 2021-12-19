export const render = (...args) => {
  const [body, func] = args;

  if (body instanceof HTMLElement) {
    if (func instanceof Function) {
      const fun = new func();
      body.innerHTML = fun.render();

      checkListener(body, fun);
    }
  }
};

const checkListener = (body, fun) => {
  const button = body.querySelectorAll("button");

  button.forEach((btn) => {
    let attr = btn.getAttribute("onClick");

    if (attr in fun) {
      btn.onclick = (event) => fun[attr](event);
    }
  });
};
