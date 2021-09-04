const $toggle = document.querySelector('.toggleContainer')
const $html = document.querySelector('html')
const $span = document.querySelector('.toggleContainer > span')


const moveTheme = () => {
  if($span.classList.contains('oneTheme')) {
    $html.classList.remove('oneTheme')
    $span.classList.remove('oneTheme')
    $html.classList.add('twoTheme')
    $span.classList.add('twoTheme')

  } else if ($span.classList.contains('twoTheme')) {
    $html.classList.remove('twoTheme')
    $span.classList.remove('twoTheme')
    $html.classList.add('threeTheme')
    $span.classList.add('threeTheme')

  } else {
    $html.classList.remove('threeTheme')
    $span.classList.remove('threeTheme')
    $html.classList.add('oneTheme')
    $span.classList.add('oneTheme')
  }
}


$toggle.addEventListener('click', moveTheme)