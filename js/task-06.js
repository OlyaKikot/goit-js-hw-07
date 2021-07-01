const refs ={
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener( 'blur', onInputBlur);


function onInputBlur (){

    if(refs.input.value.split('').length === 6) {
        if(refs.input.classList.contains('invalid'))
        { 
            refs.input.classList.remove('invalid');
        }
     
        refs.input.classList.add('valid');
    }
    else { 
        if(refs.input.classList.contains('valid'))
        { 
            refs.input.classList.remove('valid');
        }

        refs.input.classList.add('invalid');

    }

};


