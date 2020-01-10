const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  // hide all tab panels
  tabPanels.forEach(function(panel) {
    panel.hidden = true ;
  })
  // mark all tabs as unselected
  tabButtons.forEach(function(tab) {
    //tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);
  })
  // mark the clicked tab as selected
  e.currentTarget.setAttribute('aria-selected', true);
  // find the associated tabPanel and show it;
  // 1 find the tab id
  const { id } = e.currentTarget
  console.log(id);

  // 2 asssociated
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`)
  console.log(tabPanel);
  tabPanel.hidden = false;

}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
