// 1 select the element
const btn = document.querySelector('#click-me');
// 2 add event listener
// btn.addEventListener('event', CALLBACK)
btn.addEventListener('click', (event) => {
  // 3 implement the callback
  // console.log(event);
  // console.log(event.currentTarget);
  // console.log(event.currentTarget === btn);
  event.currentTarget.innerText = 'Clicked! Wait please...';
});