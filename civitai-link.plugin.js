(function() {
    console.log("[CivitAI Plugin] Loaded");

    function addButton() {
        const input = document.querySelector("#stable_diffusion_model");
        if (!input) {
            console.log("[CivitAI Plugin] Model input not found yet");
            return false;
        }

        if (document.querySelector("#civitai-btn")) {
            return true;
        }

        const btn = document.createElement("button");
        btn.id = "civitai-btn";
        btn.innerText = "CivitAI";

        // styling
        btn.style.display = "block";          // NEW → button goes on its own line
        btn.style.marginTop = "8px";          // NEW → spacing under input
        btn.style.padding = "6px 12px";
        btn.style.cursor = "pointer";
        btn.style.border = "1px solid #444";
        btn.style.borderRadius = "4px";
        btn.style.background = "#333";
        btn.style.color = "#fff";
        btn.style.fontWeight = "bold";
        btn.style.width = "fit-content";

        btn.onclick = () => {
            let modelName = input.value.trim();
            if (!modelName) {
                alert("Žádný model není vybrán.");
                return;
            }

            modelName = modelName
                .replace(".safetensors", "")
                .replace(".ckpt", "")
                .toLowerCase();

            const url =
                "https://civitai.red/search/models?sortBy=models_v9&query=" +
                encodeURIComponent(modelName);

            window.open(url, "_blank");
        };

        // INSERT BUTTON UNDER THE INPUT
        input.parentElement.insertAdjacentElement("beforeend", btn);

        console.log("[CivitAI Plugin] Button added under input");
        return true;
    }

    const interval = setInterval(() => {
        if (addButton()) {
            clearInterval(interval);
        }
    }, 1000);

})();
