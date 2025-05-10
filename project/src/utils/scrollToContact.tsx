export const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const target = document.getElementById('contact');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', '#contact');
  }
}