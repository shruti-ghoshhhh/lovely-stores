// ==========================================
// Lovely Stores - app.js
// ==========================================

const App = {
    // --- Configuration & State ---
    config: {
        cartKey: 'lovelyStoresCart_v1', // Use versioning for easier updates
        currency: 'INR',
        currencySymbol: '₹',
        featuredProductIds: [
            'eyeshadows-item-1', // Maybelline The Nudes Palette
            'lipsticks-item-1',  // Velvet Matte Lipstick
            'brushes-item-1'     // Pro Makeup Brush Set (10pc)
            // You can add more valid IDs here if you want more bestsellers displayed
        ],
        maxQuantityPerItem: 5,
    },
    state: {
        cart: [],
        categories: [], // Will be populated from data
        products: [], // Will be populated from data (flattened for easy lookup)
        currentCategory: null, // Store the currently viewed category ID
    },

    // --- Initialization ---
    init() {
        console.log('Lovely Stores App Initializing...');
        this.loadData(); // Load data first
        this.loadCart();
        this.renderHeader();
        this.renderFooter();
        this.routePage();
        this.attachGlobalListeners();
        this.observeFadeInElements();
        console.log('Lovely Stores App Ready!');
    },

    // --- MODIFIED loadData function ---
    loadData() {
        // Check if the global data object exists
        if (typeof lovelyStoresData === 'undefined' || !lovelyStoresData.categories) {
             console.error("Error: lovelyStoresData is not defined. Make sure data.js is included before app.js.");
             this.state.categories = [];
             this.state.products = [];
             return; // Exit if data isn't loaded
        }

        this.state.categories = lovelyStoresData.categories; // Use global data

        // Flatten products (same logic as before)
        this.state.products = this.state.categories.reduce((acc, category) => {
            const productsWithCategory = category.products.map(p => ({ ...p, categoryId: category.id }));
            return acc.concat(productsWithCategory);
        }, []);

        console.log(`Loaded ${this.state.categories.length} categories and ${this.state.products.length} products from data.js.`);
    },

    // --- Cart Management ---
    // ... (rest of cart functions: loadCart, saveCart, addToCart, etc. remain unchanged) ...
    loadCart() {
        const savedCart = localStorage.getItem(this.config.cartKey);
        this.state.cart = savedCart ? JSON.parse(savedCart) : [];
        this.updateHeaderCartCount();
        console.log('Cart loaded:', this.state.cart);
    },

    saveCart() {
        localStorage.setItem(this.config.cartKey, JSON.stringify(this.state.cart));
        this.updateHeaderCartCount();
    },

    addToCart(productId) {
        const product = this.getProductById(productId);
        if (!product) {
            console.error(`Product with ID ${productId} not found.`);
            return;
        }

        const existingItemIndex = this.state.cart.findIndex(item => item.id === productId);

        if (existingItemIndex > -1) {
            const currentItem = this.state.cart[existingItemIndex];
            if (currentItem.quantity < this.config.maxQuantityPerItem) {
                currentItem.quantity++;
                this.showToast(`${product.name} quantity updated to ${currentItem.quantity}.`);
            } else {
                this.showToast(`Maximum quantity (${this.config.maxQuantityPerItem}) reached for ${product.name}.`, 'warning');
                return;
            }
        } else {
            this.state.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
                quantity: 1
            });
             this.showToast(`${product.name} added to cart!`);
        }

        this.saveCart();
        if (document.body.id === 'page-cart') {
            this.renderCartPage();
        }
    },

    updateQuantity(productId, change) {
        const itemIndex = this.state.cart.findIndex(item => item.id === productId);
        if (itemIndex === -1) return;

        const item = this.state.cart[itemIndex];
        const newQuantity = item.quantity + change;

        if (newQuantity < 1) {
            if (confirm(`Remove ${item.name} from cart?`)) {
                this.removeFromCart(productId);
            }
            return;
        } else if (newQuantity > this.config.maxQuantityPerItem) {
             this.showToast(`Maximum quantity (${this.config.maxQuantityPerItem}) reached for ${item.name}.`, 'warning');
            return;
        } else {
             item.quantity = newQuantity;
             this.showToast(`${item.name} quantity updated to ${newQuantity}.`);
        }

        this.saveCart();
        if (document.body.id === 'page-cart') {
            this.renderCartPage();
        }
    },

    removeFromCart(productId) {
        const itemIndex = this.state.cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
             const itemName = this.state.cart[itemIndex].name;
             this.state.cart = this.state.cart.filter(item => item.id !== productId);
             this.saveCart();
             this.showToast(`${itemName} removed from cart.`);
             if (document.body.id === 'page-cart') {
                 this.renderCartPage();
             }
        }
    },

    getCartTotal() {
        return this.state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    getCartItemCount() {
        return this.state.cart.reduce((total, item) => total + item.quantity, 0);
    },


    // --- Rendering ---
    // ... (renderHeader, renderFooter, renderProductCard, etc. remain unchanged) ...
        renderHeader() {
        const header = document.getElementById('site-header');
        if (!header) return;
        header.innerHTML = `
            <div class="container mx-auto flex items-center justify-between px-6 py-3">
                <a href="index.html" class="text-2xl font-bold tracking-wide">Lovely Stores</a>
                <nav class="hidden md:flex items-center space-x-6 text-sm font-semibold">
                    <a href="index.html" class="hover:text-pink-200 transition">Home</a>
                    <a href="products.html" class="hover:text-pink-200 transition">Products</a>
                    <a href="index.html#about-section" class="hover:text-pink-200 transition">About</a>
                    <a href="#site-footer" class="hover:text-pink-200 transition">Contact</a>
                    <a href="cart.html" class="relative hover:text-pink-200 transition">
                    <i class="fas fa-shopping-cart text-xl"></i>
                    <span id="header-cart-count" class="cart-count" style="display: none;">0</span>
                    </a>
                    <a href="signup.html" class="hover:text-pink-200 transition">Sign Up</a>
                </nav>
                <button id="mobile-menu-button" class="md:hidden text-2xl">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <!-- Mobile Menu (Hidden by default) -->
            <div id="mobile-menu" class="hidden md:hidden bg-brand-medium pb-4">
                <nav class="flex flex-col items-center space-y-4 text-base pt-2">
                    <a href="index.html" class="hover:text-pink-200 transition">Home</a>
                    <a href="products.html" class="hover:text-pink-200 transition">Products</a>
                    <a href="index.html#about-section" class="hover:text-pink-200 transition">About</a>
                    <a href="#site-footer" class="hover:text-pink-200 transition">Contact</a>
                    <a href="cart.html" class="relative hover:text-pink-200 transition">
                        <i class="fas fa-shopping-cart text-lg mr-1"></i> Cart (<span id="mobile-cart-count">0</span>)
                    </a>
                </nav>
            </div>
        `;
         this.updateHeaderCartCount();
         this.attachHeaderListeners();
    },

     renderFooter() {
        const footer = document.getElementById('site-footer');
        const currentYear = new Date().getFullYear();
        if (!footer) return;
        footer.innerHTML = `
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <!-- Contact Info -->
                    <div>
                        <h4 class="font-semibold text-white mb-3 text-base border-b border-pink-800 pb-1">Contact Us</h4>
                        <p class="mb-1">Lovely Stores HQ</p>
                        <p class="mb-1">K-3 Ext, Nawada, Delhi</p>
                        <p class="mb-1">Email: <a href="mailto:support@lovelystores.example" class="hover:underline">support@lovelystores.example</a></p>
                        <p>Phone: <a href="tel:+919876543210" class="hover:underline">+91 98765 43210</a></p>
                    </div>
                    <!-- Quick Links -->
                    <div>
                        <h4 class="font-semibold text-white mb-3 text-base border-b border-pink-800 pb-1">Quick Links</h4>
                        <ul class="space-y-1">
                            <li><a href="index.html" class="hover:underline">Home</a></li>
                            <li><a href="products.html" class="hover:underline">Products</a></li>
                            <li><a href="index.html#about-section" class="hover:underline">About Us</a></li>
                            <li><a href="cart.html" class="hover:underline">Your Cart</a></li>
                        </ul>
                    </div>
                    <!-- Follow Us -->
                    <div>
                         <h4 class="font-semibold text-white mb-3 text-base border-b border-pink-800 pb-1">Follow Us</h4>
                        <div class="flex space-x-4 mt-2">
                            <a href="#" target="_blank" rel="noopener noreferrer" title="Instagram" class="text-xl hover:text-white transition"><i class="fab fa-instagram"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook" class="text-xl hover:text-white transition"><i class="fab fa-facebook-square"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" title="Pinterest" class="text-xl hover:text-white transition"><i class="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                    <!-- Newsletter -->
                    <div>
                        <h4 class="font-semibold text-white mb-3 text-base border-b border-pink-800 pb-1">Stay Updated</h4>
                        <p class="mb-3">Get the latest beauty news & offers.</p>
                        <form id="newsletter-form-footer" class="flex">
                            <input type="email" name="email" class="flex-grow p-2 rounded-l-md text-sm text-gray-800 focus:ring-brand-accent focus:ring-2" placeholder="Enter your email" required>
                            <button type="submit" class="bg-brand-light text-brand-dark px-4 py-2 rounded-r-md text-sm font-semibold hover:bg-opacity-90 transition">Sign Up</button>
                        </form>
                    </div>
                </div>
                <!-- Copyright -->
                <div class="text-center text-xs text-pink-300 mt-10 pt-6 border-t border-pink-800">
                    © ${currentYear} Lovely Stores. All Rights Reserved.
                </div>
            </div>
        `;
        this.attachNewsletterListeners();
    },

    renderProductCard(product) {
        return `
            <div class="item-card bg-white rounded-lg shadow overflow-hidden flex flex-col group fade-in">
                <div class="relative overflow-hidden">
                    <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out">
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    ${product.brand ? `<p class="text-xs text-gray-500 mb-1 uppercase tracking-wider">${product.brand}</p>` : ''}
                    <h3 class="text-lg font-semibold text-brand-dark mb-2 leading-tight">${product.name}</h3>
                    <p class="text-sm text-gray-600 mb-4 flex-grow">${product.description}</p>
                    <div class="flex justify-between items-center mt-auto">
                        <span class="text-xl font-bold text-brand-medium">${this.formatCurrency(product.price)}</span>
                        <button data-product-id="${product.id}" class="add-to-cart-button bg-brand-dark text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition duration-300 transform hover:scale-105 flex items-center whitespace-nowrap">
                            <i class="fas fa-plus mr-1 text-xs"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

     renderCategoryCard(category) {
        return `
            <a href="products.html?category=${category.id}" class="item-card bg-white rounded-lg shadow overflow-hidden flex flex-col group block fade-in">
                <div class="relative overflow-hidden">
                     <img src="${category.imageUrl}" alt="${category.name}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out">
                </div>
                <div class="p-4 text-center">
                    <h3 class="text-xl font-semibold text-brand-dark mb-1">${category.name}</h3>
                    <p class="text-sm text-gray-600 mb-3">${category.description}</p>
                    <span class="text-brand-medium font-semibold hover:underline">View Products →</span>
                </div>
            </a>
        `;
    },

     renderCartPage() {
        const container = document.getElementById('cart-items-container');
        const summaryContainer = document.getElementById('cart-summary');
        const emptyMsg = document.getElementById('empty-cart-message');
        const checkoutBtn = document.getElementById('checkout-button');
        const totalPriceEl = document.getElementById('summary-total-price');

        if (!container || !summaryContainer || !emptyMsg || !checkoutBtn || !totalPriceEl) {
            console.error("Cart page elements not found.");
            return;
        }

        container.innerHTML = '';

        if (this.state.cart.length === 0) {
            emptyMsg.style.display = 'block';
            summaryContainer.style.display = 'none';
            checkoutBtn.disabled = true;
        } else {
            emptyMsg.style.display = 'none';
            summaryContainer.style.display = 'block';
            checkoutBtn.disabled = false;

            const headerRow = document.createElement('div');
            headerRow.className = 'hidden md:grid grid-cols-6 gap-4 items-center font-semibold text-sm text-gray-500 border-b pb-2 mb-4';
            headerRow.innerHTML = `
                <div class="col-span-3">Product</div>
                <div class="text-center">Price</div>
                <div class="text-center">Quantity</div>
                <div class="text-right">Total</div>
            `;
            container.appendChild(headerRow);


            this.state.cart.forEach(item => {
                container.innerHTML += this.renderCartItem(item);
            });

            totalPriceEl.textContent = this.formatCurrency(this.getCartTotal());
        }
    },

    renderCartItem(item) {
        const itemTotal = item.price * item.quantity;
        return `
            <div class="grid grid-cols-4 md:grid-cols-6 gap-4 items-center border-b py-4 cart-item-row">
                <div class="col-span-4 md:col-span-3 flex items-center space-x-3">
                    <img src="${item.imageUrl}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                    <div>
                        <h4 class="font-semibold text-brand-dark leading-tight">${item.name}</h4>
                        <button data-product-id="${item.id}" class="remove-from-cart-button text-xs text-red-600 hover:underline mt-1">Remove</button>
                    </div>
                </div>
                <div class="hidden md:block text-center text-gray-700">
                    ${this.formatCurrency(item.price)}
                </div>
                <div class="col-span-2 md:col-span-1 flex items-center justify-center space-x-1">
                    <button data-product-id="${item.id}" class="quantity-decrease quantity-btn bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                    <input type="number" value="${item.quantity}" min="1" max="${this.config.maxQuantityPerItem}" data-product-id="${item.id}" class="quantity-input border-gray-300 rounded text-center text-sm p-1 focus:ring-brand-accent focus:border-brand-accent" readonly>
                    <button data-product-id="${item.id}" class="quantity-increase quantity-btn bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50" ${item.quantity >= this.config.maxQuantityPerItem ? 'disabled' : ''}>+</button>
                </div>
                <div class="col-span-2 md:col-span-1 text-right font-semibold text-brand-dark">
                    ${this.formatCurrency(itemTotal)}
                </div>
            </div>
        `;
    },

    renderFeaturedProducts() {
        const grid = document.getElementById('featured-product-grid');
        if (!grid) return;
        grid.innerHTML = '';
        this.config.featuredProductIds.forEach(id => {
            const product = this.getProductById(id);
            if (product) {
                grid.innerHTML += this.renderProductCard(product);
            }
        });
    },

    renderProductListing(categoryId) {
        const category = this.getCategoryById(categoryId);
        const grid = document.getElementById('item-grid');
        const title = document.getElementById('page-title');
        const breadcrumb = document.getElementById('breadcrumb-current');
        const backButtonContainer = document.getElementById('back-button-container');


        if (!category || !grid || !title || !breadcrumb || !backButtonContainer) {
             console.error("Required elements for product listing not found or category invalid.");
             this.renderCategoryListing();
             return;
        }

        this.state.currentCategory = categoryId;
        title.textContent = category.name;
        document.title = `${category.name} - Lovely Stores`;
        breadcrumb.textContent = category.name;
        backButtonContainer.style.display = 'block';

        grid.innerHTML = '';
        if (category.products.length === 0) {
            grid.innerHTML = `<p class="col-span-full text-center text-gray-500">No products found in this category yet.</p>`;
        } else {
            category.products.forEach(product => {
                grid.innerHTML += this.renderProductCard(product);
            });
        }
    },

    renderCategoryListing() {
        const grid = document.getElementById('item-grid');
        const title = document.getElementById('page-title');
         const breadcrumb = document.getElementById('breadcrumb-current');
         const backButtonContainer = document.getElementById('back-button-container');

        if (!grid || !title || !breadcrumb || !backButtonContainer) {
            console.error("Required elements for category listing not found.");
            return;
        }

        this.state.currentCategory = null;
        title.textContent = 'Product Categories';
        document.title = 'Products - Lovely Stores';
        breadcrumb.textContent = 'Products';
        backButtonContainer.style.display = 'none';

        grid.innerHTML = '';
        if (this.state.categories.length === 0) {
            grid.innerHTML = `<p class="col-span-full text-center text-gray-500">No categories found.</p>`;
        } else {
            this.state.categories.forEach(category => {
                grid.innerHTML += this.renderCategoryCard(category);
            });
        }
    },


    // --- Routing & Page Specific Logic ---
    // ... (routePage, initHomePage, initProductsPage, initCartPage remain unchanged) ...
     routePage() {
        const bodyId = document.body.id;
        switch (bodyId) {
            case 'page-home':
                this.initHomePage();
                break;
            case 'page-products':
                this.initProductsPage();
                break;
            case 'page-cart':
                this.initCartPage();
                break;
        }
    },

    initHomePage() {
        console.log('Initializing Home Page');
        this.initHeroSlider();
        this.renderFeaturedProducts();
    },

    initProductsPage() {
        console.log('Initializing Products Page');
        const urlParams = new URLSearchParams(window.location.search);
        const categoryId = urlParams.get('category');

        if (categoryId && this.getCategoryById(categoryId)) {
            this.renderProductListing(categoryId);
        } else {
            this.renderCategoryListing();
        }
    },

    initCartPage() {
        console.log('Initializing Cart Page');
        this.renderCartPage();
         const checkoutBtn = document.getElementById('checkout-button');
         if (checkoutBtn) {
             checkoutBtn.addEventListener('click', () => {
                 if (this.state.cart.length > 0) {
                     alert(`Proceeding to checkout with ${this.getCartItemCount()} items. Total: ${this.formatCurrency(this.getCartTotal())}\n(Checkout functionality not implemented)`);
                 } else {
                     alert('Your cart is empty.');
                 }
             });
         }
    },


    // --- Event Listeners ---
    // ... (attachGlobalListeners, attachHeaderListeners, attachNewsletterListeners remain unchanged) ...
    attachGlobalListeners() {
        document.body.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart-button')) {
                e.preventDefault();
                const button = e.target.closest('.add-to-cart-button');
                const productId = button.dataset.productId;
                if (productId) {
                    this.addToCart(productId);
                }
            }
        });

         const cartContainer = document.getElementById('cart-items-container');
         if (cartContainer) {
             cartContainer.addEventListener('click', (e) => {
                 const target = e.target;
                 const button = target.closest('button');

                 if (!button) return;

                 const productId = button.dataset.productId;
                 if (!productId) return;

                 if (button.classList.contains('quantity-increase')) {
                     this.updateQuantity(productId, 1);
                 } else if (button.classList.contains('quantity-decrease')) {
                     this.updateQuantity(productId, -1);
                 } else if (button.classList.contains('remove-from-cart-button')) {
                     if (confirm(`Are you sure you want to remove this item from your cart?`)) {
                         this.removeFromCart(productId);
                     }
                 }
             });
         }

         window.addEventListener('storage', (event) => {
             if (event.key === this.config.cartKey) {
                 console.log('Cart updated in another tab. Reloading cart.');
                 this.loadCart();
                 if (document.body.id === 'page-cart') {
                     this.renderCartPage();
                 }
             }
         });

         window.addEventListener('pageshow', (event) => {
             if (event.persisted) {
                 console.log('Page loaded from back/forward cache. Updating cart count.');
                 this.updateHeaderCartCount();
             }
         });
    },

    attachHeaderListeners() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenuButton.querySelector('i').classList.toggle('fa-bars');
                mobileMenuButton.querySelector('i').classList.toggle('fa-times');
            });
        }
    },

     attachNewsletterListeners() {
        const handleSubscription = (event) => {
            event.preventDefault();
            this.showToast('Subscribing...', 'info', 1500);
            setTimeout(() => {
                 window.location.href = "subscription-success.html";
            }, 1500);
        };

        const formCta = document.getElementById('newsletter-form-cta');
        const formFooter = document.getElementById('newsletter-form-footer');

        if (formCta) {
            formCta.addEventListener('submit', handleSubscription);
        }
        if (formFooter) {
            formFooter.addEventListener('submit', handleSubscription);
        }
    },

    // --- UI Helpers ---
    // ... (updateHeaderCartCount, formatCurrency, getProductById, getCategoryById, etc. remain unchanged) ...
        updateHeaderCartCount() {
        const count = this.getCartItemCount();
        const countElements = document.querySelectorAll('#header-cart-count, #mobile-cart-count');
        countElements.forEach(el => {
            if (el) {
                el.textContent = count;
                el.style.display = count > 0 ? 'inline-flex' : 'none';
            }
        });
    },

    formatCurrency(amount) {
        try {
            return Number(amount).toLocaleString('en-IN', {
                style: 'currency',
                currency: this.config.currency,
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
            });
        } catch (e) {
            console.error("Error formatting currency:", e);
            return `${this.config.currencySymbol}${Number(amount).toFixed(2)}`;
        }
    },

    getProductById(id) {
        return this.state.products.find(p => p.id === id);
    },

    getCategoryById(id) {
        return this.state.categories.find(c => c.id === id);
    },

    initHeroSlider() {
        const sliderContainer = document.getElementById('hero-slider');
        if (!sliderContainer) return;

        const slides = sliderContainer.querySelectorAll('.slider');
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        let currentSlideIndex = 0;
        let slideInterval;

        function showSlide(index) {
            if (slides.length === 0) return;
            slides.forEach(slide => slide.classList.replace('opacity-100', 'opacity-0'));
            currentSlideIndex = (index + slides.length) % slides.length;
            slides[currentSlideIndex].classList.replace('opacity-0', 'opacity-100');
        }

        function nextSlide() { showSlide(currentSlideIndex + 1); }
        function prevSlide() { showSlide(currentSlideIndex - 1); }

        function startSliderInterval() {
            stopSliderInterval();
            if (slides.length > 1) {
                slideInterval = setInterval(nextSlide, 5000);
            }
        }

        function stopSliderInterval() {
            clearInterval(slideInterval);
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                startSliderInterval();
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                startSliderInterval();
            });
        }

        if (slides.length > 0) showSlide(0);
        startSliderInterval();
    },

    observeFadeInElements() {
        const fadeEls = document.querySelectorAll('.fade-in');
        if (!fadeEls.length) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    // observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeEls.forEach(el => observer.observe(el));
    },

    showToast(message, type = 'success', duration = 3000) {
        let toastContainer = document.getElementById('toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'toast-container';
            toastContainer.className = 'fixed bottom-5 right-5 z-[100] space-y-2';
            document.body.appendChild(toastContainer);
        }

        const toastId = `toast-${Date.now()}`;
        const toast = document.createElement('div');
        toast.id = toastId;
        let bgColor, textColor, iconClass;

        switch (type) {
            case 'warning': bgColor = 'bg-yellow-500'; textColor = 'text-white'; iconClass = 'fa-solid fa-exclamation-triangle'; break;
            case 'error': bgColor = 'bg-red-600'; textColor = 'text-white'; iconClass = 'fa-solid fa-times-circle'; break;
             case 'info': bgColor = 'bg-blue-500'; textColor = 'text-white'; iconClass = 'fa-solid fa-info-circle'; break;
            case 'success': default: bgColor = 'bg-brand-dark'; textColor = 'text-white'; iconClass = 'fa-solid fa-check-circle'; break;
        }

        toast.className = `${bgColor} ${textColor} px-4 py-3 rounded-md shadow-lg flex items-center space-x-2 text-sm transition-opacity duration-300 opacity-0`;
        toast.innerHTML = `<i class="${iconClass}"></i><span>${message}</span>`;
        toastContainer.appendChild(toast);
        toast.offsetHeight;
        toast.classList.replace('opacity-0', 'opacity-100');

        setTimeout(() => {
             toast.classList.replace('opacity-100', 'opacity-0');
             toast.addEventListener('transitionend', () => {
                toast.remove();
                 if (toastContainer.childElementCount === 0) {
                     // Optional: toastContainer.remove();
                 }
             }, { once: true });
        }, duration);
    }
};

// --- Run the App ---
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});