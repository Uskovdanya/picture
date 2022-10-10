const checkTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(input => {
    let value = input.value;
    input.addEventListener('input', () => {
      if (input.value.match(/[^а-яё\s]/ig)) {
        input.value = value;
      } else {
        value = input.value;
      }
    });
  });
};

export default checkTextInputs;