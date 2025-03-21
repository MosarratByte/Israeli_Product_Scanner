let products = [];

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
    });

function searchProduct() {
    let input = document.getElementById("productInput").value.toLowerCase().trim();
    let resultDiv = document.getElementById("result");
    let netanyahuImage = document.getElementById("netanyahuImage");

    if (input === "") {
        resultDiv.innerHTML = "";
        netanyahuImage.style.display = "none";
        return;
    }

    let foundProduct = products.find(product => product.name.toLowerCase() === input);

    if (foundProduct) {
        if (foundProduct.isIsraeli) {
            resultDiv.innerHTML = `<span style="color: red;">⚠️ এটি একটি ইসরায়েলি পণ্য! 🚫</span><br>💡 বিকল্প: ${foundProduct.alternative}`;
            netanyahuImage.style.display = "block";
        } else {
            resultDiv.innerHTML = `<span style="color: green;">✅ এটি ইসরায়েলি পণ্য নয়!</span>`;
            netanyahuImage.style.display = "none";
        }
    } else {
        resultDiv.innerHTML = `<span style="color: gray;">❌ তথ্য পাওয়া যায়নি!</span>`;
        netanyahuImage.style.display = "none";
    }
}