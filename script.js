async function loadBoldMap() {
    const response = await fetch('bold_map.json');
    const boldMap = await response.json();
    return boldMap;
}

async function convertText() {
    const inputText = document.getElementById('inputText').value;
    const boldMap = await loadBoldMap();
    let boldedText = '';

    for (let char of inputText) {
        boldedText += boldMap[char] || char; 
    }

    document.getElementById('boldedText').textContent = boldedText;
}
