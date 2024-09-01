  /* Quando redimensionar a tela para menos de x valor, o carrossel de fotos vai sumir, quando volta para um certo tamanho, ele volta para a tela,
  porém, está bugado, ele volta por baixo do footer e os botões não funcionam, não tenho experiência suficiente para resolver o problema do meu código :( */
  
  /* Carousel */
    let carouselCopy = '';
    const carousel = document.getElementsByClassName('carousel')[0];

    function initializeCarousel() {
      const carousel = document.getElementsByClassName('carousel')[0];

      if(carousel) {
        carouselCopy = carousel.outerHTML;
      }
    }

    function hasDiv() {
      const carousel = document.getElementsByClassName('carousel')[0];

      if(window.matchMedia('(max-width: 480px)').matches) {
        if(carousel) {
          carousel.remove();
          
        } 
      } else {
        if(!carousel) {
          document.body.insertAdjacentHTML('beforeend',carouselCopy);
        } 
      }
    }
    
    window.addEventListener('resize', hasDiv);
    window.addEventListener('load', () => {
      initializeCarousel();
      hasDiv();
    });

    let indexImg = 0;

    const pathImg = ['./img.png','./img2.png','./img3.jpg']

    function previusImg() {
      const index = getIndex(add=false, sub=true);
      carousel.style.backgroundImage  =`url('./${pathImg[index]}')`;
    }

    function nextImg() {
      const index = getIndex(add=true, sub=false);
      carousel.style.backgroundImage  =`url('./${pathImg[index]}')`;
    }

    function getIndex(add, sub) {
      if(add) {
        indexImg +=1;

        const newIndex = indexImg > 2 ? 0 : indexImg;
        indexImg = newIndex;
        return indexImg;
    }

      if(sub) {
        indexImg -=1;

        const newIndex = indexImg < 0 ? 2 : indexImg;
        indexImg = newIndex;
        return indexImg;
    }
  }
  /* Fim Carousel */