tinymce.init({
    selector: 'textarea#editor',
    height: 500,
    menubar: false,
    plugins: [
      'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
      'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
      'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
 
    ],
    toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
      'alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
  });


  const mobMenu = document.querySelector('#mobby')
  const ham = document.querySelector('#ham')
  const mobUl = document.querySelector(".mobUl")
  const closeIcon = document.querySelector(".closeIcon")

  ham?.addEventListener('click',()=>{
    mobMenu.classList.add('open')
    mobMenu.style.animation = "mymove 1s 1"
	if(mobMenu.classList.contains('open')){
		document.body.classList.add('bodyStiff')
	}else{
		document.body.classList.remove('bodyStiff')
	}
  })

  mobMenu?.addEventListener('click', (e)=>{
    e.stopPropagation()
    mobMenu.classList.toggle('open')
  })

  mobUl?.addEventListener('click', (e)=>{
    e.stopPropagation()
  })

  closeIcon?.addEventListener('click', ()=>{
    mobMenu.style.animation = "mymoveopposite 1s 1"
    setTimeout(()=>{
      mobMenu.classList.toggle('open')
    },1000)
  })
  
  



