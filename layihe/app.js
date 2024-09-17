document.addEventListener("DOMContentLoaded", function() {
    let mainDropdownButton = document.getElementById("mainDropdownButton");
    let mainDropdownMenu = document.getElementById("mainDropdownMenu");
    let mainButtonIcon = document.getElementById("mainButtonIcon");
    let categoriesIcon = document.getElementById("categoriesIcon");
    let subcategoryDropdownMenu = document.getElementById("subcategoryDropdownMenu");
    let menuLinks = document.querySelectorAll(".dropdown-content a");
    let categoryContainer = document.querySelector(".category-container");
    let isMainMenuOpen = false;
    let isSubMenuOpen = false;

    if (mainDropdownButton) {
        mainDropdownButton.addEventListener("click", function(event) {
            event.stopPropagation();

            // Submenu açık ise kapat
            if (isSubMenuOpen) {
                subcategoryDropdownMenu.classList.remove("showw");
                isSubMenuOpen = false;
                categoriesIcon.src = "photo/sag.png";
                categoryContainer.classList.remove("move-left");
            }

            // Ana menü açık ise kapat, değilse aç
            if (isMainMenuOpen) {
                mainDropdownMenu.classList.remove("show");
                mainButtonIcon.src = "photo/Icon.png";
                menuLinks.forEach(link => link.classList.remove("move-left"));
            } else {
                mainDropdownMenu.classList.add("show");
                mainButtonIcon.src = "photo/x.png";
            }
            isMainMenuOpen = !isMainMenuOpen;
        });
    }

    if (categoryContainer) {
        categoryContainer.addEventListener("mouseover", function(event) {
            event.stopPropagation();
            subcategoryDropdownMenu.classList.add("showw");
            categoriesIcon.src = "photo/2pt-stroke.png";
            menuLinks.forEach(link => link.classList.add("move-left"));
            categoryContainer.classList.add("move-left");
            isSubMenuOpen = true;
        });

        categoryContainer.addEventListener("mouseout", function(event) {
            if (!subcategoryDropdownMenu.contains(event.relatedTarget)) {
                subcategoryDropdownMenu.classList.remove("showw");
                categoriesIcon.src = "photo/sag.png";
                menuLinks.forEach(link => link.classList.remove("move-left"));
                categoryContainer.classList.remove("move-left");
                isSubMenuOpen = false;
            }
        });
    }

    if (subcategoryDropdownMenu) {
        subcategoryDropdownMenu.addEventListener("mouseleave", function(event) {
            subcategoryDropdownMenu.classList.remove("showw");
            categoriesIcon.src = "photo/sag.png";
            menuLinks.forEach(link => link.classList.remove("move-left"));
            categoryContainer.classList.remove("move-left");
            isSubMenuOpen = false;
        });
    }

    window.addEventListener("click", function(event) {
        if (!event.target.matches('#mainDropdownButton') && !event.target.matches('#mainButtonIcon') && !event.target.matches('#categoriesIcon')) {
            if (mainDropdownMenu && mainDropdownMenu.classList.contains('show')) {
                mainDropdownMenu.classList.remove('show');
                mainButtonIcon.src = "photo/Icon.png";
                isMainMenuOpen = false;
            }
            if (subcategoryDropdownMenu && subcategoryDropdownMenu.classList.contains('showw')) {
                subcategoryDropdownMenu.classList.remove('showw');
                isSubMenuOpen = false;
            }
            if (categoriesIcon) categoriesIcon.src = "photo/sag.png";
            menuLinks.forEach(link => link.classList.remove("move-left"));
            if (categoryContainer) categoryContainer.classList.remove("move-left");
        }
    });
});


// F A Q
document.addEventListener("DOMContentLoaded", function() {
    let faqItems = document.querySelectorAll(".faq-items");
    
    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
            
            item.classList.toggle("active");
        });
    });
});

// S L I D E R
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const leftButton = document.querySelector('.slider-btn.left');
    const rightButton = document.querySelector('.slider-btn.right');
    const indicatorsContainer = document.querySelector('.indicator-container');

    if (sliderWrapper && leftButton && rightButton && indicatorsContainer) {
        let currentIndex = 0;
        const cards = sliderWrapper.children;

        for (let i = 0; i < cards.length; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active');
            indicatorsContainer.appendChild(indicator);
        }

        const indicators = document.querySelectorAll('.indicator');

        leftButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        rightButton.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                updateSlider();
            }
        });

        function updateSlider() {
            const offset = -currentIndex * 100;
            sliderWrapper.style.transform = `translateX(${offset}%)`;
            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }
    }
});

// Step Handling
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('.next-step');

    nextButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const currentStep = button.closest('.step');
            const nextStep = document.querySelector(`.${button.dataset.nextStep}`);

            if (currentStep && nextStep) {
                currentStep.classList.remove('active');
                nextStep.classList.add('active');
            }
        });
    });
});


// step #00CC96

document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('.next-step');
    const sectionIcons = document.querySelectorAll('.section2_icon, .h4_4');

    sectionIcons[0].style.color = '#00CC96';
    sectionIcons[0].querySelector('h4').style.backgroundColor = '#00CC96';
    sectionIcons[0].querySelector('h4').style.color = '#F7FAFC';
    if (sectionIcons[0].querySelector('p')) {
        sectionIcons[0].querySelector('p').style.backgroundColor = '#00CC96';
    }

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            for (let i = 0; i <= index + 1; i++) {
                if (sectionIcons[i]) {
                    sectionIcons[i].style.color = '#00CC96';
                    sectionIcons[i].querySelector('h4').style.backgroundColor = '#00CC96';
                    sectionIcons[i].querySelector('h4').style.color = '#F7FAFC';
                    if (sectionIcons[i].querySelector('p')) {
                        sectionIcons[i].querySelector('p').style.backgroundColor = '#00CC96';
                    }
                }
            }

            const currentStep = document.querySelector('.step.active');
            const nextStep = document.querySelector(`.${button.dataset.nextStep}`);
            if (currentStep && nextStep) {
                currentStep.classList.remove('active');
                nextStep.classList.add('active');
            }
        });
    });
});


// dinamik product

const products = [
    {
        imgSrc: "photo/Product_2.png",
        shadowSrc: "photo/Shadow_1.png",
        name: "Eye Mask Gel 60 g",
        originalPrice: "$26",
        discountedPrice: "$21"
    },
    {
        imgSrc: "photo/Product_1.png",
        shadowSrc: "photo/Shadow_1.png",
        name: "Day Eye Cream 510 ml",
        price: "$180"
    }
];

let total = 0;

function loadCartProducts() {
    const cartContainer = document.querySelector('.my_cart');
    const totalElement = document.querySelector('.total p');

    cartContainer.querySelectorAll('.product__detail').forEach(item => item.remove());

    total = 0; 

    products.forEach(product => {
        const productDetail = document.createElement('div');
        productDetail.classList.add('product__detail');

        const originalPrice = product.originalPrice ? parseFloat(product.originalPrice.replace('$', '')) : 0;
        const discountedPrice = product.discountedPrice ? parseFloat(product.discountedPrice.replace('$', '')) : 0;
        const price = product.price ? parseFloat(product.price.replace('$', '')) : 0;

        const displayPrice = discountedPrice > 0 ? discountedPrice : price;
        total += displayPrice;

        productDetail.innerHTML = `
            <div class="photo__cart">
                <img src="${product.imgSrc}" alt="${product.name}">
                <div class="shadow_1"> <img src="${product.shadowSrc}" alt="Shadow"></div>
            </div>
            <div class="detail_s"> 
                <h3>${product.name}</h3>
                <div class="detail_s_p">
                    ${discountedPrice > 0 ? `<p class="pp">${product.originalPrice}</p>` : ''}
                    <p>${product.discountedPrice || product.price}</p>
                </div>
            </div>
            <div class="my_cart_icon">
                <i class="fa-solid fa-x" onclick="removeProduct(event)"></i>
            </div>
        `;

        cartContainer.insertBefore(productDetail, cartContainer.querySelector('.total'));
    });

    totalElement.textContent = `$${total.toFixed(2)}`;
}

function removeProduct(event) {
    const productDetail = event.target.closest('.product__detail');
    const priceText = productDetail.querySelector('.detail_s_p p').textContent;
    const price = parseFloat(priceText.replace('$', ''));

    total -= price;

    if (total < 0) {
        total = 0;
    }

    productDetail.remove();

    document.querySelector('.total p').textContent = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', loadCartProducts);
