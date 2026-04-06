    const textInput = document.getElementById("textInput");
    const translationInput = document.getElementById("translationInput");
    const translateBtn = document.getElementById("translateBtn");

async function translation(){
        const res = await fetch("http://127.0.0.1:5000/translate", {
        method: "POST",
        body: JSON.stringify({
            q: textInput.value,
            source: "en",
            target: "fr",
            format: "text"
        }),
        headers: { "Content-Type": "application/json" }
    });

    return await res.json();
}


translateBtn.addEventListener("click", async function(){
    const data = await translation();
    translationInput.value = data.translatedText;
})