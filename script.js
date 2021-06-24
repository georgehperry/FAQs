
const accordionItems = document.querySelectorAll(".accordion > section");
const accordionItemText = document.querySelectorAll(".accordion .faq-content");
const faqIcons = document.querySelectorAll(".icon-vertical");

accordionItems.forEach(function(item, index) {
  item.addEventListener('click', function() {
    toggleVisibility(accordionItemText[index]);
    toggleVisibility(faqIcons[index]);
  });
});

function toggleVisibility(element) {
  element.classList.toggle('hidden');
}