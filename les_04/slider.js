function Slider() {
    this.imagesUrls = [];
    this.currentImageIndex = 0;
    this.showPrevButton = null;
    this.showNextButton = null;
    this.slideImage = null;
    this.start = function (elId) {
        let that = this;

        let elSelector = "#" + elId;
        let el = document.querySelector(elSelector);

        this.showPrevButton = el.querySelector(".show-prev-btn");
        this.showNextButton = el.querySelector(".show-next-btn");
        this.slideImage = el.querySelector(".slide-img");

        // subscribe to events
        this.showPrevButton.addEventListener("click", function (event) {
            that.onShowPrevButtonClick(event)
        });
        this.showNextButton.addEventListener("click", function (event) {
            that.onShowNextButtonClick(event);
        });
        // images array
        this.imagesUrls.push(
            "https://www.ubackground.com/_ph/84/412205731.jpg"
        );
        this.imagesUrls.push(
            "https://www.gran-turismo.com/images/c/i1aK6SAWBSUO6.jpg"
        );
        this.imagesUrls.push(
            "https://www.thesupercarblog.com/wp-content/uploads/2020/02/Bugatti-W16-GT-Rembrandt-Concept-1.jpg"
        );
        this.imagesUrls.push(
            "https://cdn.hiconsumption.com/wp-content/uploads/2013/01/Bugatti-Gangloff-Supercar-Concept-1.jpg"
        );
        // button disabler
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevButton.disabled = true;
    };
    this.onShowPrevButtonClick = function (event) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextButton.disabled = false;
        // disable prev button
        if (this.currentImageIndex === 0) {
            this.showPrevButton.disabled = true;
        }
    };
    this.onShowNextButtonClick = function (event) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevButton.disabled = false;
        // disable next button
        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextButton.disabled = true;
        }
    };
};