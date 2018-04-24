import { fillFormEdit } from './admin-processing.js'
import { resetSelectIcon, resetSelectColor, formSubmitButtonElement, formUpdateButtonElement } from './modal-processing.js'

const modal = document.getElementById('new-module-form-container')

// display modal
export const setup = () => {
  if (document.isAdmin) {
    const plusBlock = document.getElementById('block-plus')
    plusBlock.addEventListener('click', () => displayModal())
  }
}

export const SubmitToUpdateAndReverse = (btn1, btn2) => {
  btn1.type = 'hidden'
  btn2.type = 'submit'
}

export const displayModal = (data) => {
  modal.style.display = 'block'
  // form pré-remplit
  //reset opacity of button icon
  resetSelectIcon()
  // reset border of button color
  resetSelectColor()
  if (data) {
    // change btn submit
    SubmitToUpdateAndReverse(formSubmitButtonElement, formUpdateButtonElement)
    fillFormEdit(data)
    return
  }
  SubmitToUpdateAndReverse(formUpdateButtonElement, formSubmitButtonElement)
}

export const hideModal = () => {
  modal.style.display = 'none'
}

const updateModal = () => {
  const user_agent =/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  const modalContent = document.getElementById('modal-content')

  // portrait
  if (user_agent && (window.innerHeight > window.innerWidth) && (modal.style.display === 'block')) {
    modalContent.style.width = '100%'
    modalContent.style.marginTop = '0%'
    modal.style.overflow = 'hidden'
  }
  // payasage
  else if (user_agent && (window.innerHeight < window.innerWidth) && (modal.style.display === 'block')) {
    modalContent.style.marginTop = '1%'
    modalContent.style.width = '70%'
    modal.style.overflow = 'scroll'
  }
  else {
    // on pc
    modalContent.style.marginTop = '5%'
    modalContent.style.width = '400px'
  }
}

// When the user clicks on <span> (x), close the modal
document.getElementById('new-module-form-cancel-button').onclick = () => {
  modal.style.display = 'none'
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

// IF MOBILE RESIZE portrait/paysage
window.addEventListener('resize', updateModal)
