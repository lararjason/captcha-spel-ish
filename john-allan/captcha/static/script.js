function showLoader() {
    const loader = document.createElement("span");
    loader.classList.add("loader");
    const captcha = document.querySelector(".captcha");
    const captchaCopy = copyCaptchaContainer();
    const container = document.querySelector(".container");

    captcha.innerHTML = '';
    captcha.appendChild(loader);
    setTimeout(function() {
        container.removeChild(captcha);
        container.removeChild(document.getElementById("solution"));
        container.removeChild(document.querySelector(".message"));
        container.appendChild(captchaCopy);
    }, 3000);
}

function copyCaptchaContainer() {
    const captcha = document.querySelector(".container");
    const copiedCaptchaContainer = captcha.cloneNode(true);

    const question = copiedCaptchaContainer.querySelector("#question");
    const solution = copiedCaptchaContainer.querySelector("#solution");
    const newSubmitButton = copiedCaptchaContainer.querySelector(".submit-button");

    newSubmitButton.addEventListener("click", function() {
        showLoader();
    });
    //question.textContent = "{{ data[0] }}";
    //solution.textContent = " {{ data[1] }}";

    return copiedCaptchaContainer;
}

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", function() {
    showLoader();
});

