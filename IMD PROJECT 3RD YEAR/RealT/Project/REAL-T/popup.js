document.addEventListener("DOMContentLoaded", () => {

    chrome.storage.local.get("selectedText", data => {
        document.getElementById("text").innerText =
            data.selectedText || "No text selected.";
    });

    document.getElementById("checkBtn").addEventListener("click", async () => {

        chrome.storage.local.get("selectedText", async data => {
            const text = data.selectedText;

            if (!text) {
                alert("Please select some text on the webpage first!");
                return;
            }

            // ✅ USE YOUR EXACT NGROK URL + ROUTE
            const API_URL = "https://quarriable-declivous-nick.ngrok-free.dev/api/fake_review";

            try {
                const res = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ text })
                });

                const result = await res.json();

                const box = document.getElementById("result");
                box.innerHTML = result.label;
                box.className =
                    "result-box " + (result.label === "Fake" ? "fake" : "real");

            } catch (error) {
                console.error("API ERROR:", error);
                alert("Unable to reach Flask server. Is ngrok still running?");
            }
        });
    });
});
