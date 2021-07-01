const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}

 
refs.input.addEventListener( 'input', onInputChange);
function onInputChange(){
    refs.span.setAttribute('style',`font-size:${refs.input.value}px`);
};