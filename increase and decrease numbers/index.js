    let countEl = document.getElementById("count-el");
    let count = 0;
    let saveEl = document.getElementById("previous-el")

    function increase() {
        count = count + 1;
        countEl.innerText = count;
    }

    function decrease() {
        count = count - 1;
        countEl.innerText = count;
    }
    function save() {
        let countStr = count + " / "
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
    }




