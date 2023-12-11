const sharebuttons = document.querySelectorAll('.fa-share-from-square')


sharebuttons.forEach(element => {
    element.addEventListener('click', () => {
    const linkbox = document.querySelector('.hidden')
    const link = document.querySelector('#link')
    const a = element.parentElement
    const linktext = a.querySelector('a').href
    link.innerHTML = linktext
    if(linkbox != null) {
    linkbox.classList.remove('hidden')}
    setTimeout(() => { 
    const slidein = document.querySelector('#sharelink')
    slidein.classList.add('slidein')}, 1)
   
    })
    

});

closebutton = document.querySelector('#closebutton')
closebutton.addEventListener('click', () => {
    const linkbox = document.querySelector('#sharelink')
    linkbox.classList.remove('slidein')
    setTimeout(() => {
        linkbox.classList.add('hidden')
    }, 150)
})