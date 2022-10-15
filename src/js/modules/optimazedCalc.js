function calc(promocode, blockSize, blockMaterial, blockOptions, price, button) {
  const promocod = document.querySelectorAll(promocode),
        size = document.querySelectorAll(blockSize),
        sizeElem = size[0].querySelectorAll('option'),
        material = document.querySelectorAll(blockMaterial),
        meterialElem = material[0].querySelectorAll('option'),
        options = document.querySelectorAll(blockOptions),
        optionsElem = options[0].querySelectorAll('option'),
        calcPrice = document.querySelector(price),
        buttonForm = document.querySelector(button);

    buttonForm.disabled = true;

    let product = {},
        productPrice = {};

    function calculatingPrice() {
      if (!productPrice.size || productPrice.size == '' ||)
    }

  

}