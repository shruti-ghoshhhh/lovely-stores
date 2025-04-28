// data.js - Product and Category Data for Lovely Stores

const lovelyStoresData = {
    categories: [
        // --- Eyeshadows ---
        {
            id: 'eyeshadows',
            name: 'Eyeshadows',
            description: 'Vibrant shades for dazzling looks.',
            imageUrl: 'https://i.pinimg.com/474x/08/6e/0a/086e0aceb12d61b3ae09519bef5e914f.jpg', // Kept original category image
            products: [
                { id: 'eyeshadows-item-1', name: 'Maybelline New York The Nudes Eyeshadow Palette', brand: 'Maybelline', description: '12 versatile nude shades in matte & shimmer finishes.', price: 904, imageUrl: 'https://imgs.search.brave.com/tNneNFiw-huU5nT6P17evJABax7IAmzdmMhccMmyWfo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTEwOWhCMDVWcUwu/anBn' },
                { id: 'eyeshadows-item-2', name: 'Wet n Wild Color Icon Eyeshadow 10 Pan Palette - Rose In The Air', brand: 'Wet n Wild', description: '10 richly pigmented shades in matte, satin, shimmer, and metallic finishes.', price: 599, imageUrl: 'https://imgs.search.brave.com/kn3bFNJI-R3ovF4dLVpAjm73hWMOp7DqFwKlmaspOcU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTEuZmxpeGNh/cnQuY29tL2ltYWdl/LzQxNi80MTYva3Nx/ZWt5ODAvZXllLXNo/YWRvdy85L20vbS85/LXRvLTUtZXllLWNv/bG9yLXF1YXJ0ZXQt/ZXllLXNoYWRvdy1s/YWttZS1vcmlnaW5h/bC1pbWFnNjg2aHRn/N2RkYmp6LmpwZWc_/cT03MA' },
                { id: 'eyeshadows-item-3', name: 'Makeup Revolution Re-Loaded Palette - Velvet Rose', brand: 'Makeup Revolution', description: '15 smooth, blendable shades from essential mattes to glam shimmers.', price: 950, imageUrl: 'https://imgs.search.brave.com/NK2k1TGTFf3JmgdMCJs37kCcPGLjgZkEsvoytwEHwrk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFTSWVOM0pKOUwu/anBn' },
                { id: 'eyeshadows-item-4', name: 'Huda Beauty Nude Obsessions Eyeshadow Palette - Medium', brand: 'Huda Beauty', description: '9 versatile nude shades in matte, metallic, and shimmer finishes.', price: 2700, imageUrl: 'https://imgs.search.brave.com/mNozkGkD56Z0qggKk66OYMb_UPUzmvHp8GSXxU-8gOk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE0ZFZ5dm83Tkwu/anBn' },
                { id: 'eyeshadows-item-5', name: 'Kay Beauty Eyeshadow Palette - Pure Bloom', brand: 'Kay Beauty', description: '9 pan palette with matte, metallic and foil finishes.', price: 1199, imageUrl: 'https://imgs.search.brave.com/5FG1mZ0qThiljMYMpfR6YDbjB99My7jzVm5XAsghXa4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFTLVEyQVNLSUwu/anBn' },
                { id: 'eyeshadows-item-6', name: 'Swiss Beauty Ultimate 9 Pigmented Colors Eyeshadow Palette - Shade 06', brand: 'Swiss Beauty', description: '9 highly pigmented, blendable matte & shimmer finishes.', price: 249, imageUrl: 'https://imgs.search.brave.com/sWtD4RxbG44LEKN5yAm-neiXz1ZjkxT6B3RJm01Z5sw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmVhdXR5YnVtYmxl/LmNvbS9jZG4vc2hv/cC9wcm9kdWN0cy9C/Ql9TQl8wOS5qcGc_/dj0xNjc0MzA3NTgw/JndpZHRoPTE5NDY' },
                { id: 'eyeshadows-item-7', name: 'Lakme Absolute Spotlight Eyeshadow Palette - Smokin Glam', brand: 'Lakme', description: '12 intensely pigmented, blendable shimmer and matte shades.', price: 1100, imageUrl: 'https://imgs.search.brave.com/WlUqImU9kS679XQLTERLE99JBUDX3KHVjdcrArpIm3Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jMS5z/dGF0aWNmbGlja3Iu/Y29tLzUvNDI2NS8z/NTMzMDI5MDMwMV8x/OTNiMTBjMjg0Lmpw/Zw' },
                { id: 'eyeshadows-item-8', name: 'NYX Professional Makeup Ultimate Shadow Palette - Warm Neutrals', brand: 'NYX Professional Makeup', description: '16 pro-level neutral shades in mattes, satins, shimmers, and metallics.', price: 1999, imageUrl: 'https://imgs.search.brave.com/jJ0e3tzkxUbqU-NP6qw5WMLAiexSI7GB82BPzeEIuQY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy1kZ2Jj/NWx6YjBwL2ltYWdl/cy9zdGVuY2lsLzcy/OHg3MjgvcHJvZHVj/dHMvNzAxMi8yMDE0/My9VcmJhbl9EZWNh/eV9OYWtlZF9SZWxv/YWRlZF9QYWxldHRl/X185OTYxNC4xNTky/NDk3NDEzLmpwZz9j/PTI' },
                { id: 'eyeshadows-item-9', name: 'e.l.f. Cosmetics Bite Size Eyeshadow - Cream & Sugar', brand: 'e.l.f. Cosmetics', description: 'Ultra-pigmented, creamy quad with matte and shimmer shades.', price: 350, imageUrl: 'https://imgs.search.brave.com/4ciOBRK8qttOhpLSzkGLpeokqnUgjZM-HWfmaK8cMg0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVtcHRhbGlhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wMy90b28tZmFj/ZWRfbmF0dXJhbC1l/eWVzXzAwMV9wYWxl/dHRlLmpwZw' },
                { id: 'eyeshadows-item-10', name: 'Faces Canada Ultime Pro Eyeshadow Palette - Nude 01', brand: 'Faces Canada', description: '10 versatile matte, shimmer & glitter textures for day to night looks.', price: 999, imageUrl: 'https://imgs.search.brave.com/1rypMKShos2JGRLQP1A-U9UjQROtAjRY8L9H9en9_J4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE4YTgtQkRBRUwu/anBn' }
            ]
        },
        // --- Lipsticks ---
        {
            id: 'lipsticks',
            name: 'Lipsticks',
            description: 'Bold, matte, and glossy shades.',
            imageUrl: 'https://i.pinimg.com/736x/84/7a/60/847a602e4158ce09508780ef702c18a1.jpg', // Example category image
            products: [
                { id: 'lipsticks-item-1', name: 'Maybelline New York Super Stay Matte Ink Liquid Lipstick - Ruler', brand: 'Maybelline', description: 'Intense ink color concentration, 16-hour matte finish.', price: 699, imageUrl: 'https://m.media-amazon.com/images/I/51u4dhZMQbL._SL1120_.jpg' },
                { id: 'lipsticks-item-2', name: 'M.A.C Retro Matte Lipstick - Ruby Woo', brand: 'M.A.C', description: 'Iconic vivid blue-red shade with a long-wearing matte finish.', price: 1950, imageUrl: 'https://m.media-amazon.com/images/I/616JoI7VN+L._AC_UF1000,1000_QL80_.jpg' },
                { id: 'lipsticks-item-3', name: 'Lakme 9 to 5 Primer + Matte Lip Color - MP19 Rosy Sunday', brand: 'Lakme', description: 'Built-in primer for a smooth, long-lasting matte finish.', price: 500, imageUrl: 'https://guide.lakmeindia.com/cdn/shop/files/P_M-Rosy-Sunday-Lifestyle_c95ac0f6-52a0-413a-831a-bbcbd4c370fb_1000x.jpg?v=1719493085   ' },
                { id: 'lipsticks-item-4', name: 'Nykaa Matte Luxe Lipstick - Truffle', brand: 'Nykaa', description: 'Velvet matte finish with a luxurious, comfortable feel.', price: 799, imageUrl: 'https://m.media-amazon.com/images/I/41BFOP-mEpL.jpg' },
                { id: 'lipsticks-item-5', name: 'SUGAR Cosmetics Matte Attack Transferproof Lipstick - 07 Peachwood Mac', brand: 'SUGAR Cosmetics', description: 'Highly pigmented, transfer-proof lipstick in a crayon format.', price: 699, imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20220128/0471/61f2fdadf997dd66234148e9/-473Wx593H-4923681880-07peachwoodmac-MODEL2.jpg' },
                { id: 'lipsticks-item-6', name: 'Kay Beauty Matte Drama Lipstick - Snapshot', brand: 'Kay Beauty', description: 'Long-lasting, hydrating matte formula in a range of shades.', price: 1099, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/4/c/4cc62f78904330901506_1.jpg?tr=w-344,h-344,cm-pad_resize' },
                { id: 'lipsticks-item-7', name: 'Huda Beauty Power Bullet Matte Lipstick - Interview', brand: 'Huda Beauty', description: 'Intensely pigmented, full-coverage matte lipstick.', price: 2200, imageUrl: 'https://www.makeupblushstudio.com/cdn/shop/files/IMG-3543.jpg?v=1708659543' },
                { id: 'lipsticks-item-8', name: 'L\'Oreal Paris Rouge Signature Matte Liquid Lipstick - 115 I Am Worth It', brand: 'L\'Oreal Paris', description: 'Lightweight matte lip ink, feels like nothing on the lips.', price: 799, imageUrl: 'https://img.tatacliq.com/images/i8/437Wx649H/MP000000012667295_437Wx649H_202203310953453.jpeg' },
                { id: 'lipsticks-item-9', name: 'Colorbar Velvet Matte Lipstick - Bare', brand: 'Colorbar', description: 'Creamy matte lipstick enriched with Vitamin E.', price: 349, imageUrl: 'https://cdn.zivame.com/ik-seo/media/zcmsimages/configimages/CBB080-Bare/1_large/colorbar-velvet-matte-lipstick-bare-058-4-2-gm.jpg?t=1623827026' },
                { id: 'lipsticks-item-10', name: 'Faces Canada Weightless Matte Finish Lipstick - Subtle Mauve 10', brand: 'Faces Canada', description: 'Lightweight texture with a powder matte smooth finish.', price: 325, imageUrl: 'https://m.media-amazon.com/images/I/61H904FvKVL._AC_UF1000,1000_QL80_.jpg' }
            ]
        },
        // --- Brushes ---
        {
            id: 'brushes',
            name: 'Brushes',
            description: 'Smooth and soft for seamless blending.',
            imageUrl: 'https://i.pinimg.com/474x/3b/ac/e7/3bace76bf92ac228ef6cf5f0f193a1f5.jpg', // Example category image
            products: [
                { id: 'brushes-item-1', name: 'Real Techniques Everyday Essentials Set', brand: 'Real Techniques', description: '4 brushes + sponge for foundation, blush, bronzer, highlighter & concealer.', price: 2199, imageUrl: 'https://ezcwbtuecsw.exactdn.com/wp-content/uploads/2020/08/Real-techniques-everyday-essential-set3-website.jpg?strip=all&lossy=1&ssl=1' },
                { id: 'brushes-item-2', name: 'PAC Eyeshadow Blending Brush - 203', brand: 'PAC', description: 'Fluffy brush for seamless eyeshadow blending in the crease.', price: 485, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgJzQvA-vquD2NVStLlCk1SyqwFEd_vGPaQ&s' },
                { id: 'brushes-item-3', name: 'Sigma Beauty F80 Flat Kabuki Brush', brand: 'Sigma Beauty', description: 'Dense flat top brush for buffing liquid or cream foundation.', price: 2400, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCUsaOH5B156riYklGU7yYCLlTELJ-bXLiA&s' },
                { id: 'brushes-item-4', name: 'Wet n Wild Pro Brush Line - Tapered Highlighting Brush', brand: 'Wet n Wild', description: 'Ergonomically designed brush for precise highlighter application.', price: 899, imageUrl: 'https://m.media-amazon.com/images/I/41RT9+IpBRL.jpg' },
                { id: 'brushes-item-5', name: 'Morphe M439 Deluxe Buffer Brush', brand: 'Morphe', description: 'A full, domed brush perfect for applying and buffing foundation.', price: 1700, imageUrl: 'https://images-cdn.ubuy.co.in/63500ec596f1cd62e65de981-morphe-m439-deluxe-buffer-makeup.jpg' },
                { id: 'brushes-item-6', name: 'e.l.f. Cosmetics Pointed Powder Brush', brand: 'e.l.f. Cosmetics', description: 'Tapered brush for precise powder application, contouring or highlighting.', price: 600, imageUrl: 'https://images-cdn.ubuy.co.in/66b65424687fa92bb56032f6-e-l-f-cosmetics-pointed-powder-brush.jpg' },
                { id: 'brushes-item-7', name: 'Proarte Mini Brush Set (Set Of 5)', brand: 'Proarte', description: 'Travel-friendly set including face and eye brushes.', price: 1250, imageUrl: 'https://m.media-amazon.com/images/I/71mHWKAkkbL._AC_UF1000,1000_QL80_.jpg' },
                { id: 'brushes-item-8', name: 'BS-MALL Makeup Brushes Premium Synthetic Foundation Powder Concealers Eye Shadows Set (14 Pcs)', brand: 'BS-MALL', description: 'Affordable comprehensive set for a full face makeup application.', price: 999, imageUrl: 'https://m.media-amazon.com/images/I/717ZSDMNdvL.jpg' },
                { id: 'brushes-item-9', name: 'Vega Foundation Brush (PB-17)', brand: 'Vega', description: 'Flat foundation brush for even application of liquid or cream products.', price: 350, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/1/b/1b73aa88904086310508_1.jpg' },
                { id: 'brushes-item-10', name: 'Nykaa BlendMaster All-rounder Makeup Blender Sponge', brand: 'Nykaa', description: 'Versatile makeup sponge for blending foundation, concealer, and powder.', price: 449, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/w/i/with-carton_1_.jpg' }
            ]
        },
        // --- Foundation ---
        {
            id: 'foundation',
            name: 'Foundation',
            description: 'Flawless coverage for all skin types.',
            imageUrl: 'https://i.pinimg.com/474x/b7/d7/83/b7d78310fea0e8c17df7e77485c9b8cf.jpg', // Example category image
            products: [
                { id: 'foundation-item-1', name: 'Maybelline New York Fit Me Matte+Poreless Liquid Foundation', brand: 'Maybelline', description: 'Lightweight mattifying foundation, ideal for normal to oily skin.', price: 629, imageUrl: 'https://m.media-amazon.com/images/I/711t9wxyobL._AC_UF1000,1000_QL80_.jpg' },
                { id: 'foundation-item-2', name: 'L\'Oreal Paris Infallible 24H Fresh Wear Foundation', brand: 'L\'Oreal Paris', description: 'Long-wearing, breathable foundation with medium-to-full coverage.', price: 1099, imageUrl: 'https://m.media-amazon.com/images/I/51gsnl9yDPL.jpg' },
                { id: 'foundation-item-3', name: 'M.A.C Studio Fix Fluid SPF 15', brand: 'M.A.C', description: 'Buildable medium-to-full coverage foundation with a natural matte finish.', price: 3300, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/7/a/7ac6ecf773602642878_1.jpg' },
                { id: 'foundation-item-4', name: 'Kay Beauty Hydrating Foundation', brand: 'Kay Beauty', description: 'Hydrating formula for a natural, dewy finish. Suitable for normal to dry skin.', price: 1200, imageUrl: 'https://m.media-amazon.com/images/I/51On72oA4tL.jpg' },
                { id: 'foundation-item-5', name: 'Lakme Absolute Skin Natural Mousse', brand: 'Lakme', description: 'Feather-light mousse foundation with a matte finish and SPF 8.', price: 875, imageUrl: 'https://cdn.grofers.com/app/assets/products/sliding_images/jpeg/ae375d7a-90f3-444d-93f6-01529666bdf4.jpg?ts=1709107390' },
                { id: 'foundation-item-6', name: 'Nykaa SKINgenius Skincare Foundation', brand: 'Nykaa', description: 'Hydrating foundation with colour-adapting technology for a natural glow.', price: 599, imageUrl: 'https://m.media-amazon.com/images/I/51dpZ-U2kWL._AC_UF1000,1000_QL80_.jpg' },
                { id: 'foundation-item-7', name: 'Estee Lauder Double Wear Stay-in-Place Makeup Foundation SPF 10', brand: 'Estee Lauder', description: '24-hour long-wear, flawless matte finish foundation.', price: 4300, imageUrl: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/1/12/033c231a-8350-473c-9e90-b64d7ae72e6c1705074634248-compressed_57413_0.jpg' },
                { id: 'foundation-item-8', name: 'Wet n Wild Photo Focus Foundation - Dewy', brand: 'Wet n Wild', description: 'Light-adjusting complex for photo-ready skin with a dewy finish.', price: 699, imageUrl: 'https://m.media-amazon.com/images/I/71cR6CJmlGL.jpg' },
                { id: 'foundation-item-9', name: 'Huda Beauty #FauxFilter Luminous Matte Foundation', brand: 'Huda Beauty', description: 'Full coverage foundation with a luminous matte finish, 24-hour wear.', price: 3650, imageUrl: 'https://golamarket.com/cdn/shop/files/1_c281eb90-6f04-47e1-8ce1-d73a371f9c4a.png?v=1699962387' },
                { id: 'foundation-item-10', name: 'Mamaearth Glow Serum Foundation with Vitamin C & Turmeric', brand: 'Mamaearth', description: 'Lightweight serum foundation offering buildable coverage and a dewy glow.', price: 599, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/3/6/36047888906087778288_1.jpg?tr=w-500' }
            ]
        },
        // --- Concealer ---
        {
            id: 'concealer',
            name: 'Concealer',
            description: 'Hide imperfections with ease.',
            imageUrl: 'https://i.pinimg.com/474x/ff/f1/21/fff1218fa30bd8aa59bff28f8fab56d5.jpg', // Example category image
            products: [
                { id: 'concealer-item-1', name: 'Maybelline New York Fit Me Concealer', brand: 'Maybelline', description: 'Natural coverage, oil-free concealer that matches skin tones.', price: 529, imageUrl: 'https://thesparkleindia.com/cdn/shop/products/41554247725.1.jpg?v=1679589833' },
                { id: 'concealer-item-2', name: 'L.A. Girl Pro Conceal HD', brand: 'L.A. Girl', description: 'Crease-resistant, opaque coverage in a creamy, lightweight texture.', price: 695, imageUrl: 'https://m.media-amazon.com/images/I/61RPeSifXqL.jpg' },
                { id: 'concealer-item-3', name: 'Swiss Beauty Liquid Concealer', brand: 'Swiss Beauty', description: 'Blendable, full coverage concealer with a lightweight feel.', price: 229, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/6/2/622c299NYSWISSB00316_3.jpg?tr=w-500' },
                { id: 'concealer-item-4', name: 'Maybelline New York Instant Age Rewind Eraser Dark Circles Concealer', brand: 'Maybelline', description: 'Super-concentrated formula with a micro-corrector applicator for dark circles.', price: 720, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/4/7/47c1c186902395487432_1.jpg?tr=w-500' },
                { id: 'concealer-item-5', name: 'e.l.f. Cosmetics Hydrating Camo Concealer', brand: 'e.l.f. Cosmetics', description: 'Long-wear liquid concealer with a satin finish, provides full coverage and hydrates.', price: 700, imageUrl: 'https://m.media-amazon.com/images/I/51MjdOA3WcL.jpg' },
                { id: 'concealer-item-6', name: 'Kay Beauty HD Liquid Concealer', brand: 'Kay Beauty', description: 'High definition liquid concealer with hydrating properties.', price: 850, imageUrl: 'https://media-uk.landmarkshops.in/cdn-cgi/image/h=1125,w=1125,q=85,fit=cover/lifestyle/1000011293318-1000011293317_01-2100.jpg' },
                { id: 'concealer-item-7', name: 'M.A.C Studio Fix 24-Hour Smooth Wear Concealer', brand: 'M.A.C', description: 'Lightweight fluid concealer with a natural matte finish and medium-to-full buildable coverage.', price: 2600, imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20210915/LaQ1/6141209baeb269a26893d7b3/-1117Wx1400H-4919419180-nc30-MODEL.jpg' },
                { id: 'concealer-item-8', name: 'Too Faced Born This Way Super Coverage Multi-Use Sculpting Concealer', brand: 'Too Faced', description: 'Hydrating, full-coverage, weightless 4-in-1 concealer.', price: 2650, imageUrl: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1107604/z7rB_GkR-n-1107604_1.jpg' },
                { id: 'concealer-item-9', name: 'NARS Radiant Creamy Concealer', brand: 'NARS', description: 'Award-winning concealer corrects, contours, highlights, and perfects with creamy medium-to-buildable coverage.', price: 3100, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/e/0/e0b44ac607845012351_1.jpg?tr=w-500' },
                { id: 'concealer-item-10', name: 'Lakme Absolute Creme Concealer', brand: 'Lakme', description: 'Creamy texture that blends easily to cover spots and blemishes.', price: 600, imageUrl: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/20877070/2023/2/21/734e9aaf-71d2-458c-818b-2be2955985871676970039499LakmeAbsoluteCremeConcealertoConcealDarkSpots39g-Cinnamon301.jpg' }
            ]
        },
         // --- Hair Machines ---
        {
            id: 'hair-machines',
            name: 'Hair Machines',
            description: 'Styling tools for every hair type.',
            imageUrl: 'https://i.pinimg.com/474x/0d/cf/b3/0dcfb3b9525ca468b1e4a47f6a60debb.jpg', // Example category image
            products: [
                { id: 'hair-machines-item-1', name: 'Philips Hair Dryer - BHD318/00 (1600W)', brand: 'Philips', description: '1600W dryer with ThermoProtect attachment for quick, protected drying.', price: 1895, imageUrl: 'https://cdn01.pharmeasy.in/dam/products_otc/K31196/philips-hair-dryer-bhd318-00-1600w-thermoprotect-airflower-advanced-6.4-1671743372.jpg?dim=480x480&q=75' },
                { id: 'hair-machines-item-2', name: 'Vega Keratin Glow Hair Straightener (VHSH-19)', brand: 'Vega', description: 'Keratin-infused ceramic coated plates for smooth, shiny hair.', price: 1599, imageUrl: 'https://m.media-amazon.com/images/I/51BTkXpnFrL.jpg' },
                { id: 'hair-machines-item-3', name: 'Ikonic Professional Curling Tong - CT28 (28mm)', brand: 'Ikonic Professional', description: 'Ceramic barrel curling tong for creating defined curls or waves.', price: 2800, imageUrl: 'https://niram.in/cdn/shop/products/02-ikonic-professional-curling-tong-28mm-ct-28-pixies-chennai.jpg?v=1598313917' },
                { id: 'hair-machines-item-4', name: 'Alan Truman Hot Stick Hair Straightening Brush', brand: 'Alan Truman', description: 'Straightening brush with tourmaline-ceramic bristles for smooth, frizz-free hair.', price: 2999, imageUrl: 'https://alantruman.com/cdn/shop/files/9_a3e7d0b8-3287-48ff-bf84-8fd1ced33728.png?v=1741286454' },
                { id: 'hair-machines-item-5', name: 'Dyson Airwrap™ Multi-Styler Complete Long (Vinca Blue/Rosé)', brand: 'Dyson', description: 'Curl, shape, smooth, and hide flyaways with no extreme heat.', price: 49900, imageUrl: 'https://m.media-amazon.com/images/I/41jObQGjqxL._AC_UF1000,1000_QL80_.jpg' },
                { id: 'hair-machines-item-6', name: 'Havells Hair Dryer - HD3151 (1200W)', brand: 'Havells', description: 'Compact foldable 1200W hair dryer, ideal for travel.', price: 1199, imageUrl: 'https://havells.com/media/catalog/product/cache/844a913d283fe95e56e39582c5f2767b/g/h/ghpdhibbbl12s_india_3_.jpg' },
                { id: 'hair-machines-item-7', name: 'Revlon One-Step Hair Dryer & Volumizer Hot Air Brush', brand: 'Revlon', description: 'Dries and volumizes in one step for less heat damage.', price: 5999, imageUrl: 'https://5.imimg.com/data5/SELLER/PDFImage/2024/6/428244090/ND/QC/GC/180446284/revlon-salon-one-step-hair-dryer-and-volumizer-rvdr5222.png' },
                { id: 'hair-machines-item-8', name: 'Syska Hair Dryer - HD1600 Trendsetter (1000W)', brand: 'Syska', description: 'Lightweight 1000W hair dryer with heat balance technology.', price: 799, imageUrl: 'https://img.tatacliq.com/images/i18//437Wx649H/MP000000003503983_437Wx649H_202406262148091.jpeg' },
                { id: 'hair-machines-item-9', name: 'Babyliss Curl Secret Hair Curler - C1300E', brand: 'Babyliss', description: 'Automatic hair curler with adjustable settings for different curl types.', price: 14999, imageUrl: 'https://m.media-amazon.com/images/I/71M78AaLLKL.jpg' },
                { id: 'hair-machines-item-10', name: 'Gorgio Professional Hair Straightener - HS-7020', brand: 'Gorgio Professional', description: 'Ceramic plate hair straightener with adjustable temperature.', price: 999, imageUrl: 'https://m.media-amazon.com/images/I/41kj7JGAbaL.jpg' }
            ]
        },
         // --- Blushes ---
        {
            id: 'blushes',
            name: 'Blushes',
            description: 'Rosy cheeks with a natural glow.',
            imageUrl: 'https://img.cosmeticsandtoiletries.com/files/base/allured/all/image/2022/05/dreamstime_xxl_194623514.627c0ce8c8d9b.png?auto=format%2Ccompress&q=70&rect=0%2C102%2C1920%2C1077&w=700', // Example category image
            products: [
                { id: 'blushes-item-1', name: 'Maybelline New York Fit Me Blush - Wine 50', brand: 'Maybelline', description: 'Lightweight powder blush that delivers natural all-day color.', price: 449, imageUrl: 'https://m.media-amazon.com/images/I/81b7v0f5KQL._AC_UF1000,1000_QL80_.jpg' },
                { id: 'blushes-item-2', name: 'Kay Beauty Creme Blush - Flirty Nude', brand: 'Kay Beauty', description: 'Creamy, blendable blush with a natural, dewy finish.', price: 799, imageUrl: 'https://guptacosmetic.com/wp-content/uploads/2024/10/515BHvt1s5L._SX522_.webp' },
                { id: 'blushes-item-3', name: 'SUGAR Cosmetics Contour De Force Mini Blush - 01 Peach Peak', brand: 'SUGAR Cosmetics', description: 'Lightweight, buildable powder blush in a travel-friendly size.', price: 349, imageUrl: 'https://www.allurecosmetics.in/cdn/shop/products/SUGAR-Contour-De-Force-Mini-Blush-01-Peach-Peak_20-1.jpg?v=1667826455' },
                { id: 'blushes-item-4', name: 'Milani Baked Blush - Luminoso', brand: 'Milani', description: 'Richly pigmented baked blush providing radiance and a cheeky glow.', price: 1325, imageUrl: 'https://m.media-amazon.com/images/I/71QlXptcXML.jpg' },
                { id: 'blushes-item-5', name: 'Benefit Cosmetics Benetint Rose Tinted Lip & Cheek Stain', brand: 'Benefit Cosmetics', description: 'Iconic rose-tinted stain for lips and cheeks, sheer and buildable.', price: 1950, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDHLk97iZumXnBS-9BdrT0gS5REkCxIu5Qw&s' },
                { id: 'blushes-item-6', name: 'e.l.f. Cosmetics Putty Blush - Turks And Caicos', brand: 'e.l.f. Cosmetics', description: 'Creamy putty-to-powder blush that blends seamlessly into skin.', price: 700, imageUrl: 'https://m.media-amazon.com/images/I/61c-OiCaVHL.jpg' },
                { id: 'blushes-item-7', name: 'Lakme 9 to 5 Weightless Matte Mousse Lip & Cheek Color - Blush Velvet', brand: 'Lakme', description: 'Versatile mousse formula for a matte finish on lips and cheeks.', price: 675, imageUrl: 'https://m.media-amazon.com/images/I/41sBnt4Y0JL.jpg' },
                { id: 'blushes-item-8', name: 'Nudestix Nudies Matte Lux All Over Face Blush Color - Rosy Posy', brand: 'Nudestix', description: 'Soft matte cream blush stick for cheeks, eyes, and lips.', price: 3400, imageUrl: 'https://m.media-amazon.com/images/I/61wPAiKh2tL._AC_UF1000,1000_QL80_.jpg' },
                { id: 'blushes-item-9', name: 'Wet n Wild Color Icon Blush - Pearlescent Pink', brand: 'Wet n Wild', description: 'Silky-smooth powder blush with a subtle shimmer finish.', price: 399, imageUrl: 'https://www.wetnwildbeauty.com/wp-content/uploads/sites/6/2022/10/Color_Icon_Blush-1111555.jpg' },
                { id: 'blushes-item-10', name: 'Makeup Revolution Blusher Reloaded - Lovestruck', brand: 'Makeup Revolution', description: 'Highly pigmented pressed powder blush for a natural flush.', price: 550, imageUrl: 'https://www.revolutionbeauty.com/dw/image/v2/BCZJ_PRD/on/demandware.static/-/Sites-revbe-master-catalog/default/dw7c44b12b/images/hi-res/1121668_3.jpg?sw=660&sh=660&sm=fit&strip=false' }
            ]
        },
        // --- Bronzers ---
        {
            id: 'bronzers',
            name: 'Bronzers',
            description: 'Sun-kissed warmth year-round.',
            imageUrl: 'https://www.muastore.co.uk/cdn/shop/files/Bronzed-Cream-Bronzers.jpg?v=1739371268&width=1080', // Example category image
            products: [
                { id: 'bronzers-item-1', name: 'Physicians Formula Murumuru Butter Bronzer - Bronzer', brand: 'Physicians Formula', description: 'Ultra-luxurious bronzer with Murumuru Butter for a radiant glow.', price: 1400, imageUrl: 'https://images-cdn.ubuy.co.in/635e7c3b4ad20b775d79b1e4-physicians-formula-murumuru-butter.jpg' },
                { id: 'bronzers-item-2', name: 'Benefit Cosmetics Hoola Matte Bronzer', brand: 'Benefit Cosmetics', description: 'Award-winning matte bronzing powder for a natural-looking tan.', price: 3100, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/8/e/8e79020602004138620_1.jpg?tr=w-500' },
                { id: 'bronzers-item-3', name: 'Wet n Wild Color Icon Bronzer - Sunset Striptease', brand: 'Wet n Wild', description: 'Gel-infused long-wearing formula leaves skin looking luminous.', price: 599, imageUrl: 'https://www.jiomart.com/images/product/original/963527/wet-n-wild-color-icon-bronzer-sunset-striptease-11-gm-prod-963527-1-202111121230.jpg?im=Resize=(600,600)' },
                { id: 'bronzers-item-4', name: 'SUGAR Cosmetics Contour De Force Mini Bronzer - 01 Taupe Topper', brand: 'SUGAR Cosmetics', description: 'Subtle matte bronzer perfect for contouring and adding warmth.', price: 399, imageUrl: 'https://smytten-image.gumlet.io/discover_product/1669639795_DSGR0055CB1.jpg' },
                { id: 'bronzers-item-5', name: 'Kay Beauty Matte Bronzer - Caramel Moment', brand: 'Kay Beauty', description: 'Silky matte powder bronzer for a sun-kissed sculpted look.', price: 899, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/9/1/91a09a38904330901933_20.jpg?tr=w-500' },
                { id: 'bronzers-item-6', name: 'NYX Professional Makeup Matte Bronzer - Medium', brand: 'NYX Professional Makeup', description: 'Achieve a natural-looking honey glow with this matte finish bronzer.', price: 1099, imageUrl: 'https://images-cdn.ubuy.co.in/647f47ebe71075278f51f492-nyx-professional-makeup-matte-bronzer.jpg' },
                { id: 'bronzers-item-7', name: 'Makeup Revolution Mega Bronzer - 01 Cool', brand: 'Makeup Revolution', description: 'Large matte bronzer for an all-over natural bronze.', price: 850, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT368vxoy2tw9rYAjmdH-fC_EZiIyAVnwTQdA&s' },
                { id: 'bronzers-item-8', name: 'e.l.f. Cosmetics Putty Bronzer - Tan Lines', brand: 'e.l.f. Cosmetics', description: 'Creamy putty-to-powder bronzer for a natural, sun-kissed glow.', price: 700, imageUrl: 'https://m.media-amazon.com/images/I/719yj5BUy3L.jpg' },
                { id: 'bronzers-item-9', name: 'theBalm Bahama Mama Bronzer', brand: 'theBalm', description: 'Matte bronzer that creates beautifully bronzed skin, doubles as contour.', price: 1899, imageUrl: 'https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//t/h/thebalm-bahama-mama-bronzer-7-08g_1.jpg' },
                { id: 'bronzers-item-10', name: 'Rimmel Natural Bronzer - Sun Bronze', brand: 'Rimmel', description: 'Waterproof bronzing powder with a velvety soft texture.', price: 499, imageUrl: 'https://m.media-amazon.com/images/I/61wudV8myEL.jpg' }
            ]
        },
        //  // --- Nails ---
        // {
        //     id: 'nails',
        //     name: 'Nails',
        //     description: 'Nail the Look with Our Stunning Collection.',
        //     imageUrl: 'https://images-static.nykaa.com/uploads/tr:w-264,/79138597-a61a-4172-bf35-5c9b1045946c.jpg', // Example category image
        //     products: [
        //         { id: 'nails-item-1', name: 'O.P.I Nail Lacquer - Big Apple Red', brand: 'O.P.I', description: 'Iconic bright, shiny red nail polish.', price: 850, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/1/619828063766_1.jpg' },
        //         { id: 'nails-item-2', name: 'Lakme Absolute Gel Stylist Nail Color - Scarlet Red', brand: 'Lakme', description: 'High color delivery with a reflective shimmer finish.', price: 450, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8901030944783_1.jpg' },
        //         { id: 'nails-item-3', name: 'Nykaa Nail Enamel Polish - Matte Nail Lacquer - Pink Meringue 151', brand: 'Nykaa', description: 'Trendy matte finish nail polish in various shades.', price: 199, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8904245707082_1.jpg' },
        //         { id: 'nails-item-4', name: 'Colorbar Nail Lacquer - Haute Latte 101', brand: 'Colorbar', description: 'Chip-resistant, non-yellowing nail lacquer for long-lasting color.', price: 199, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8904052401013_1.jpg' },
        //         { id: 'nails-item-5', name: 'Sally Hansen Insta-Dri Anti-Chip Top Coat', brand: 'Sally Hansen', description: 'Dries nail polish in 60 seconds and prevents chipping.', price: 575, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/7/074170232189_1.jpg' },
        //         { id: 'nails-item-6', name: 'Faces Canada Ultime Pro Splash Nail Enamel - Cherry Burst 43', brand: 'Faces Canada', description: 'High-performing nail enamel providing a plump, gel-like finish.', price: 139, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8903380147438_1.jpg' },
        //         { id: 'nails-item-7', name: 'Plum Color Affair Nail Polish - Berry Sorbet 134', brand: 'Plum', description: 'Vegan nail polish with high shine and chip-resistant formula.', price: 195, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8904311902141_1.jpg' },
        //         { id: 'nails-item-8', name: 'Colorbar Arteffects Nail Lacquer - Glare', brand: 'Colorbar', description: 'Glitter nail polish for a dazzling, party-ready effect.', price: 399, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8904052420175_1.jpg' },
        //         { id: 'nails-item-9', name: 'Kara Nail Polish Remover Wipes - Rose (30 Wipes)', brand: 'Kara', description: 'Acetone-free wipes enriched with Vitamin E for easy polish removal.', price: 110, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8904066301424_1.jpg' },
        //         { id: 'nails-item-10', name: 'Sally Hansen Hard As Nails Hardener', brand: 'Sally Hansen', description: 'Helps strengthen soft, fragile nails and prevents chipping.', price: 525, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/7/074170011689_1.jpg' }
        //     ]
        // },
        // // --- Skincare ---
        // {
        //     id: 'skincare',
        //     name: 'Skincare',
        //     description: 'Nourish and protect your skin.',
        //     imageUrl: 'https://images-static.nykaa.com/uploads/tr:w-264,/b16a6601-46f4-4a9c-813a-e74f6c08a019.jpg', // Example category image
        //     products: [
        //         { id: 'skincare-item-1', name: 'Cetaphil Gentle Skin Cleanser', brand: 'Cetaphil', description: 'Mild, non-irritating cleanser for sensitive and dry skin.', price: 333, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/3/9318637060312_1.jpg' },
        //         { id: 'skincare-item-2', name: 'Minimalist Niacinamide 10% + Zinc Serum', brand: 'Minimalist', description: 'Reduces acne marks, controls sebum production, and improves skin barrier.', price: 599, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/3/f394131MINIM00000004_1.jpg' },
        //         { id: 'skincare-item-3', name: 'Neutrogena Hydro Boost Water Gel', brand: 'Neutrogena', description: 'Oil-free gel moisturizer with Hyaluronic Acid for intense hydration.', price: 1150, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/0/70501110589_1.jpg' },
        //         { id: 'skincare-item-4', name: 'Plum Green Tea Pore Cleansing Face Wash', brand: 'Plum', description: 'Gentle foaming face wash for oily, acne-prone skin.', price: 345, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/p/l/plum-green-tea-pore-cleansing-face-wash-75ml_1.jpg' },
        //         { id: 'skincare-item-5', name: 'The Ordinary Hyaluronic Acid 2% + B5', brand: 'The Ordinary', description: 'Hydration support formula with ultra-pure, vegan Hyaluronic Acid.', price: 700, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/6/769915190199_1.jpg' },
        //         { id: 'skincare-item-6', name: 'La Roche-Posay Anthelios UVMune 400 Invisible Fluid SPF50+', brand: 'La Roche-Posay', description: 'Broad-spectrum sunscreen with high protection, suitable for sensitive skin.', price: 1999, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/3/3337875797597.jpg' },
        //         { id: 'skincare-item-7', name: 'Bioderma Sensibio H2O Micellar Water', brand: 'Bioderma', description: 'Gentle micellar water for cleansing and removing makeup from sensitive skin.', price: 425, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/3/4/3401395376706_1.jpg' },
        //         { id: 'skincare-item-8', name: 'Laneige Lip Sleeping Mask EX - Berry', brand: 'Laneige', description: 'Intensive care lip mask that moisturizes and nourishes lips overnight.', price: 1280, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/8/8809643042766_1.jpg' },
        //         { id: 'skincare-item-9', name: 'COSRX Advanced Snail 96 Mucin Power Essence', brand: 'COSRX', description: 'Lightweight essence with snail mucin to hydrate and repair skin.', price: 1450, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/8/8809416470006_1.jpg' },
        //         { id: 'skincare-item-10', name: 'Innisfree Volcanic Pore Cleansing Foam EX', brand: 'Innisfree', description: 'Pore cleansing foam with Jeju volcanic clusters to absorb sebum and purify pores.', price: 800, imageUrl: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/8/8809707256050_1.jpg' }
        //     ]
        // }
    ]
        
}
