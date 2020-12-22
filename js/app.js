  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  let rightBtn = document.querySelector('.btn-right')
  let leftBtn = document.querySelector('.btn-left')
  let containerImage = document.querySelector('.img-container')

  let count = 0;

  rightBtn.addEventListener('click', function(){
    if(count < pictures.length -1){
      count++
      containerImage.style.setProperty("background", `url('../img/${pictures[count]}.jpeg') center/cover fixed no-repeat`)
    } else {
      count = 0
      containerImage.style.setProperty("background", `url('../img/${pictures[count]}.jpeg') center/cover fixed no-repeat`)
    }
    
  })

  leftBtn.addEventListener('click', function(){
    if(count == 0){
      count = 5
    }
    count--
    containerImage.style.setProperty("background", `url('../img/${pictures[count]}.jpeg') center/cover fixed no-repeat`)
      
  })