function mobNav() {
  let div = document.createElement("div");
  div.classList = "fl fl-col justify-center align-center w-100 mob-nav";
  div.innerHTML = `
          <a href="#how">
                    <li>How it works</li>
                </a>
                <a href="#meals">
                    <li>Meals</li>
                </a>
                <a href="#testimonials">
                    <li>Testimonials</li>
                </a>
                <a href="pricing">
                    <li>Pricing</li>
                </a>
                <a href="try">
                    <button class="btn-hover pointer" id="try-free-button">Try for free</button>
                </a>

    `;
  return div;
}

export default mobNav;
