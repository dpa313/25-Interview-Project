const data = [
  {
    id: 1,
    question: "What is an accordion in web design?",
    answer:
      "An accordion is a vertically stacked list of items that can be expanded to reveal more content.",
  },
  {
    id: 2,
    question: "How does an accordion improve UX?",
    answer:
      "It helps organize content into collapsible sections, making the interface cleaner and easier to navigate.",
  },
  {
    id: 3,
    question: "Can I have multiple accordion sections open at once?",
    answer:
      "Yes, depending on the implementation, you can allow one or multiple sections to be open simultaneously.",
  },
  {
    id: 4,
    question: "Is an accordion accessible?",
    answer:
      "When implemented properly with ARIA roles and keyboard support, accordions can be accessible to all users.",
  },
];


// ACCORDION DATA SHOW
const accordionWrapper = document.querySelector(".accordion");

function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (dataItem) => `
        <div class="accordion-item">
          <div class="accordion-title">
            <h2>${dataItem.question}</h2>
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          <div class="accordion-content">
            <p>${dataItem.answer}</p>
          </div>
        </div>  `
    )
    .join(" ");
}
createAccordionData();


// ACCORDION BEHAVIOUR
const getAccordionTitles = document.querySelectorAll('.accordion-title')

getAccordionTitles.forEach(currentItem =>{
  currentItem.addEventListener('click', (event)=>{
    if(currentItem.classList.contains('active')){
      currentItem.classList.remove('active')
    }else{
      // THIS SHOWS IF ONE ITEM IS CLICKED OTHER ITEM WILL AUTOMATICALLY HIDE
      let getAlreadyAddedActiveClass = document.querySelectorAll('.active');
      getAlreadyAddedActiveClass.forEach(currentActiveItem=>{
        currentActiveItem.classList.remove('active')
      })
      // =====================================================================
      currentItem.classList.add('active')
    }
  })
})
