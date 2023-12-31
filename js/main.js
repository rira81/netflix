const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
// Select tab content Item
function selectItem(e) {
    //remove border
    removeBorder();
    removeShow();

    // Add border to current tab
    this.classList.add('tab-border');

    // Grab content items from Dom
    console.log(this.id);
    const tabContentItem = document.querySelector(`${this.id}-content`);
    // Add show class
    console.log(tabContentItem);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
