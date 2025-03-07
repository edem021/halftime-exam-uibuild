document.querySelector("#root").insertAdjacentHTML("beforeend", `
  <form>
    <h1>Visszajelzés</h1>
    <input type="text" placeholder="Tárgy" name="tárgy">
    <textarea placeholder="Megjegyzés" name="megjegyzés"></textarea>
      <div class="checkbox-container">
        <input type="checkbox" id="terms">
        <label for="terms">Elolvastam és elfogadom az <u>Adatkezelési Tájékoztatót</u></label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="newsletter">
        <label for="newsletter">Szeretnék hírlevelet kapni</label>
      </div>
    <button>Mentés</button>
  </form>
`);