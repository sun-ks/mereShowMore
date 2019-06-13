const mereShowMore = (obj) => {

    const el = document.getElementById(obj.elId),
        btn = el.querySelector('.mere-show-more--label-js'),
        fullCont = el.querySelector('.mere-show-more--cont-full-js'),

        btnTemplate = () => `<input type="checkbox" id="toggle-${id}" class="mere-show-more--input">
          <label class="mere-show-more--label mere-show-more--label-js" for="toggle-${id}">
            <span class="mere-show-more--more">${showMoreText}</span>
            <span class="mere-show-more--less">${showLessTExt}</span>
          </label>`,

        fullContHeight = fullCont.offsetHeight,

        showMoreText = obj.showMoreText || 'Show more',
        showLessTExt = obj.showLessTExt || 'Show less',

        heightBlock = obj.heightBlock || 100;

    let hiddenCont = null;

    if (fullContHeight > heightBlock) {

        el.insertAdjacentHTML('afterbegin', btnTemplate(showMoreText, showLessTExt, id = obj.elId));

        hiddenCont = el.querySelector('.mere-show-more--cont-hidden-js');

        hiddenCont.style.height = heightBlock + 'px';
    }
}
