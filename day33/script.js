const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  // set all tabs aria-selected to false
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  })
  // set all tabpanel to hidden
  tabPanels.forEach(panel => {
    panel.hidden = true;
  })
  // show the click tab
  e.currentTarget.setAttribute('aria-selected', true);
  // accosicate tabbutton and tabpanel
  // step 1 looking for id of tab
  const id = e.currentTarget.id
  console.log(id);
  // step 2 assiate tab id and tabpanel
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  console.log(tabPanel);
  tabPanel.hidden = false;
};

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
