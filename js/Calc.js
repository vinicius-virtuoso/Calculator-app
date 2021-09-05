const screenResult = document.querySelector('.screenNumber p')
const insert =  (num) => {
    if(num !== undefined && num !== '' && num !== null) {
      screenResult.innerHTML += num
    } else {
      screenResult.innerHTML = ''
    }
}
const reset = () => {
  screenResult.innerHTML = ''
}
const del = () => {
  screenResult.innerHTML = screenResult.innerHTML.substring(0,screenResult.innerHTML.length - 1)
  console.log(screenResult.innerHTML.substring(0,screenResult.innerHTML.length - 1))
}
const calcular = () => {
  const screenResult = document.querySelector('.screenNumber p').innerHTML
  if(screenResult) {
    document.querySelector('.screenNumber p').innerHTML = +eval(screenResult).toFixed(6)
  }
}

calcular()
del()
reset()
insert()