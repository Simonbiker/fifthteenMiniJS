//using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(function (q) {
    // console.log(q);
    const btn = q.querySelector('.question-btn');
    btn.addEventListener('click', function () {

        questions.forEach(function (item) {
            if (item !== q) {
                item.classList.remove('show-text');
            }
        })
        q.classList.toggle("show-text");
    })
})



// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     })
// })