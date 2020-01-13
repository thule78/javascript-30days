const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tablist"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {

  //turn off all tab
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  })

  // turn off all tabpanel
  tabPanels.forEach(panel => {
    panel.hidden = true;
  })

  // turn tab tha selected
  e.currentTarget.setAttribute('aria-selected', true);
  //accsociate tab and tabpanel
  // 1 looking for tab id
  const id = e.currentTarget.id
  console.log(id);
  //accsociate tabpanel match with id
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`)
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
