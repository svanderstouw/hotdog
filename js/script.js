(function () {

    setUpPage();

    function setUpPage() {
        stickyNavBar();
        noDragImgs();
        addModalEventListeners();
    }

    //Make Nav Bar sticky
    function stickyNavBar() {
         
        window.onscroll = function () { checkNav() };

        let navbar = document.getElementById("navbar");
        let sticky = navbar.offsetTop;

        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function checkNav() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }

    //Make all images not draggable
    function noDragImgs() {
        const allImgs = document.getElementsByTagName('img');

        for (eachImg of allImgs) {
            eachImg.draggable = false;
        }
    }

    // Modal can be opened
    function addModalEventListeners() {

        const modalTriggerElement = document.querySelector('#modal-trigger');

        const modalTriggerClickHandler = function () {
            document.body.classList.add('modal-open');
        };

        modalTriggerElement.addEventListener('click', modalTriggerClickHandler);

        // Modal can be closed
        const modalCloseButton = document.querySelector('#modal a');
        const modalBackground = document.querySelector('#backdrop');

        const modalCloseButtonClickHandler = function () {
            document.body.classList.remove('modal-open');
        };

        modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
        modalBackground.addEventListener('click', modalCloseButtonClickHandler);
    };


})();