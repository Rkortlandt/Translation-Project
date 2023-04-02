export default function toggleTab (tabIndex, tabBtns, tabContents) {
      // Remove active class from all tab buttons and contents
  tabBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  tabContents.forEach((content) => {
    content.classList.remove('active');
  });

  // Add active class to clicked tab button and content
  tabBtns[tabIndex].classList.add('active');
  tabContents[tabIndex].classList.add('active');
}