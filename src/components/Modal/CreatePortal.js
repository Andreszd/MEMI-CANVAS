import ReactDOM from 'react-dom'

const PopUp = document.querySelector('#PopUp')

export default ({ content, isOpened }) => (isOpened ? ReactDOM.createPortal(content, PopUp) : null)
