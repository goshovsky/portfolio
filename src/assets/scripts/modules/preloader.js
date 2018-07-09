export default function preloader() {
  const loader = document.querySelector(".preloader");
  return {
    loaded() {
      loader.classList.add("hide");
      return;
    }
  };
}
