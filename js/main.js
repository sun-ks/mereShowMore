const mereShowMore = (obj) => {

    const el = document.querySelector(obj.elClass),
        btn = el.querySelector('.mere-show-more--label-js'),

        fullCont = el.querySelector('.mere-show-more--cont-full-js'),

        btnTemplate = () => `<input type="checkbox" id="toggle">
          <label class="mere-show-more--label-js" for="toggle">
            <span class="more">${showMoreText}</span>
            <span class="less">${showLessTExt}</span>
          </label>`,

        fullContHeight = fullCont.offsetHeight,

        showMoreText = obj.showMoreText || 'Show more',
        showLessTExt = obj.showLessTExt || 'Show less',

        heightBlock = obj.heightBlock || 100;

    let hiddenCont = null;

    if (fullContHeight > heightBlock) { console.log('11');


        el.insertAdjacentHTML('afterbegin', btnTemplate(showMoreText, showLessTExt));

        hiddenCont = el.querySelector('.mere-show-more--cont-hidden-js');

        hiddenCont.style.height = heightBlock + 'px';
    }
}
