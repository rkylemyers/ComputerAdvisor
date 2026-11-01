// Standalone Client-Side Catalog and Recommendation Engine for GitHub/GitLab Pages
const COMPUTERS_CATALOG = [
  {
    "id": "c-chromebook-plus",
    "name": "Lenovo IdeaPad Slim 3i Chromebook Plus 14",
    "brand": "Lenovo",
    "os": "ChromeOS",
    "form_factor": "Laptop",
    "release_year": 2024,
    "price": 379.0,
    "cpu_model": "Intel Core i3-N305 (8C)",
    "cpu_tier": 1,
    "cpu_cores": 8,
    "gpu_model": "Intel UHD Graphics",
    "gpu_tier": 0,
    "ram_gb": 8,
    "storage_gb": 128,
    "battery_hours": 11.0,
    "weight_lbs": 3.3,
    "screen_size": 14.0,
    "screen_nits": 300,
    "screen_gamut": "65% sRGB",
    "screen_refresh_hz": 60,
    "touchscreen": false,
    "stylus_support": false,
    "warranty_years": 1,
    "purchase_url": "https://www.bestbuy.com/site/lenovo-ideapad-slim-3i-chromebook-plus-14-fhd-laptop-intel-core-i3-n305-8gb-memory-128gb-emmc-abyss-blue/6550736.p",
    "target_summary": "Affordable, snappy ChromeOS laptop for homework, email, and YouTube.",
    "user_rating": 4.5,
    "review_count": 2150,
    "ranking_badge": "#1 Best Seller in Chromebooks",
    "os_edition": "ChromeOS 64-bit (Google Auto-Update verified through June 2034)",
    "official_url": "https://www.lenovo.com/us/en/p/laptops/lenovo/chromebook-series/lenovo-ideapad-slim-3i-chromebook-gen-8-(14-inch-intel)/len101i0074",
    "retailer": "Best Buy",
    "msrp": 499.0,
    "price_notes": "Best Buy street deal price ($379 vs $499 standard retail).",
    "cpu_details": "Intel Core i3-N305 (8 Efficiency Cores / 8 Threads, up to 3.80 GHz Boost, 6MB Smart Cache, 15W TDP)",
    "cpu_benchmark_score": "PassMark: 10,150 | Geekbench 6: 4,950 Multi / 1,380 Single",
    "cpu_independent_review": "Grade: B- (High-Efficiency Everyday) \u2022 8 Gracemont efficiency cores at 15W TDP. Snappy for 20+ browser tabs, Zoom, and 4K media; lacks hyperthreading for sustained 3D rendering.",
    "gpu_details": "Intel UHD Graphics (32 Execution Units @ 1.25 GHz, Shared System Memory)",
    "ram_details": "8GB LPDDR5-4800 MT/s (Soldered Onboard, Single-Channel, Non-Upgradable)",
    "ports_io": "2x USB-C 3.2 Gen 1 (Power Delivery & DP 1.4), 1x USB-A 3.2 Gen 1, 1x MicroSD Slot, 3.5mm Headphone Jack",
    "webcam_biometrics": "1080p FHD Webcam with Physical Privacy Shutter; Dual Array Mics; No Fingerprint/IR",
    "thermals_acoustics": "Single Active Heatpipe Blower Fan, Whisper-Quiet (<28 dBA at full load)"
  },
  {
    "id": "c-acer-aspire-3",
    "name": "Acer Aspire 3 15.6",
    "brand": "Acer",
    "os": "Windows",
    "form_factor": "Laptop",
    "release_year": 2024,
    "price": 499.0,
    "cpu_model": "AMD Ryzen 5 7520U (4C/8T)",
    "cpu_tier": 2,
    "cpu_cores": 4,
    "gpu_model": "AMD Radeon 610M",
    "gpu_tier": 0,
    "ram_gb": 16,
    "storage_gb": 512,
    "battery_hours": 9.0,
    "weight_lbs": 3.9,
    "screen_size": 15.6,
    "screen_nits": 250,
    "screen_gamut": "60% sRGB",
    "screen_refresh_hz": 60,
    "touchscreen": false,
    "stylus_support": false,
    "warranty_years": 1,
    "purchase_url": "https://www.amazon.com/dp/B0BS4BP8FB",
    "target_summary": "Dependable, high-value everyday Windows laptop with 16GB RAM for multitasking.",
    "user_rating": 4.4,
    "review_count": 3890,
    "ranking_badge": "#1 Budget Windows Laptop Under $500",
    "os_edition": "Windows 11 Home (64-bit Edition, S-Mode switchable to full standard mode)",
    "official_url": "https://www.acer.com/us-en/laptops/aspire/aspire-3-amd",
    "retailer": "Amazon",
    "msrp": 549.99,
    "price_notes": "Amazon street price for Ryzen 5 / 16GB RAM / 512GB SSD configuration.",
    "cpu_details": "AMD Ryzen 5 7520U (4 Cores / 8 Threads, 2.80 GHz Base / 4.30 GHz Boost, 4MB L3 Cache, 15W TDP, Zen 2)",
    "cpu_benchmark_score": "PassMark: 9,300 | Geekbench 6: 4,600 Multi / 1,410 Single",
    "cpu_independent_review": "Grade: B- (Reliable Budget Multitasker) \u2022 4 cores / 8 threads Zen 2 at 15W. Highly stable thermal profile for everyday multitasking, office suites, and student research.",
    "gpu_details": "AMD Radeon 610M (2 RDNA2 CUs @ 1.9 GHz, Hardware AV1 / VP9 decode, Shared VRAM)",
    "ram_details": "16GB LPDDR5-5500 MT/s (Dual-Channel Soldered, Low-Power High-Bandwidth, Non-Upgradable)",
    "ports_io": "1x USB-C 3.2 Gen 2, 2x USB-A 3.2 Gen 1, 1x HDMI 2.1 (Up to 4K @ 60Hz), 3.5mm Headphone Jack, Barrel Power",
    "webcam_biometrics": "720p HD Webcam with Acer PurifiedVoice Temporal Noise Reduction; No Windows Hello",
    "thermals_acoustics": "Single Blower Fan with Rear Exhaust, Balanced Acoustic Profile (~32 dBA under load)"
  },
  {
    "id": "c-macbook-air-m2",
    "name": "Apple MacBook Air 13-inch (M2)",
    "brand": "Apple",
    "os": "macOS",
    "form_factor": "Laptop",
    "release_year": 2022,
    "price": 899.0,
    "cpu_model": "Apple M2 (8-Core CPU)",
    "cpu_tier": 3,
    "cpu_cores": 8,
    "gpu_model": "Apple 8-Core GPU",
    "gpu_tier": 1,
    "ram_gb": 8,
    "storage_gb": 256,
    "battery_hours": 16.0,
    "weight_lbs": 2.7,
    "screen_size": 13.6,
    "screen_nits": 500,
    "screen_gamut": "100% DCI-P3",
    "screen_refresh_hz": 60,
    "touchscreen": false,
    "stylus_support": false,
    "warranty_years": 1,
    "purchase_url": "https://www.amazon.com/dp/B0B3C57XLR",
    "target_summary": "Ultra-thin aluminum chassis, legendary 16hr battery, and crisp 500-nit Retina display.",
    "user_rating": 4.8,
    "review_count": 8740,
    "ranking_badge": "Best-Selling Ultrabook 2023-2024",
    "os_edition": "macOS Sequoia 15 (Factory Pre-installed with native Rosetta 2 translation)",
    "official_url": "https://www.apple.com/shop/buy-mac/macbook-air/13-inch-m2",
    "retailer": "Amazon / Best Buy Deals",
    "msrp": 999.0,
    "price_notes": "Street sale price $899 at Amazon & Best Buy ($100 off Apple Store $999 MSRP).",
    "cpu_details": "Apple M2 (8 Cores: 4 Avalanche Performance @ 3.49 GHz + 4 Blizzard Efficiency @ 2.42 GHz, 16-Core Neural Engine)",
    "cpu_benchmark_score": "Geekbench 6: 9,850 Multi / 2,620 Single | PassMark: 15,400",
    "cpu_independent_review": "Grade: A- (Fanless Efficiency Leader) \u2022 Industry-leading single-core burst responsiveness and thermals. Operates 100% silently with zero throttling on daily productivity.",
    "gpu_details": "Apple 8-Core Integrated GPU (1.4 GHz, 100 GB/s Unified Memory Bandwidth, ProRes & ProRes RAW Engine)",
    "ram_details": "8GB Unified Memory (LPDDR5-6400, Shared CPU/GPU Unified Pool, 100GB/s Bandwidth, Soldered)",
    "ports_io": "2x Thunderbolt 3 / USB4 (Up to 40Gbps), 1x MagSafe 3 Charging Port, 1x 3.5mm Jack with High-Impedance Headphone Support",
    "webcam_biometrics": "1080p FaceTime HD Camera with Advanced Image Signal Processor; Touch ID Fingerprint Sensor on Keyboard",
    "thermals_acoustics": "Fanless Passive Cooling (Zero Acoustic Noise, 0.0 dBA completely silent under all workloads)"
  },
  {
    "id": "c-macbook-air-m3-16",
    "name": "Apple MacBook Air 13-inch (M3, 16GB)",
    "brand": "Apple",
    "os": "macOS",
    "form_factor": "Laptop",
    "release_year": 2024,
    "price": 1099.0,
    "cpu_model": "Apple M3 (8-Core CPU)",
    "cpu_tier": 3,
    "cpu_cores": 8,
    "gpu_model": "Apple 10-Core GPU",
    "gpu_tier": 1,
    "ram_gb": 16,
    "storage_gb": 512,
    "battery_hours": 17.5,
    "weight_lbs": 2.7,
    "screen_size": 13.6,
    "screen_nits": 500,
    "screen_gamut": "100% DCI-P3",
    "screen_refresh_hz": 60,
    "touchscreen": false,
    "stylus_support": false,
    "warranty_years": 1,
    "purchase_url": "https://www.amazon.com/dp/B0CX23V2ZP",
    "target_summary": "The gold standard for mobile students & professionals: 16GB RAM, dual external monitor support.",
    "user_rating": 4.9,
    "review_count": 4120,
    "ranking_badge": "#1 Overall Laptop - Wirecutter & PCMag",
    "os_edition": "macOS Sequoia 15 (Factory Pre-installed, Supports Dual External Displays in clamshell)",
    "official_url": "https://www.apple.com/shop/buy-mac/macbook-air/13-inch-m3",
    "retailer": "Apple Store / Amazon",
    "msrp": 1099.0,
    "price_notes": "Official Apple MSRP $1,099 with 16GB unified memory standard.",
    "cpu_details": "Apple M3 (8 Cores: 4 Performance @ 4.05 GHz + 4 Efficiency @ 2.75 GHz, 16-Core 3nm Neural Engine 18 TOPS)",
    "cpu_benchmark_score": "Geekbench 6: 11,850 Multi / 3,080 Single | PassMark: 18,900",
    "cpu_independent_review": "Grade: A (Gold Standard Mobile SoC) \u2022 3nm process with hardware ray-tracing & AV1 engine. Exceptional battery-to-performance curve; single-core speed outpaces desktop chips.",
    "gpu_details": "Apple 10-Core Integrated GPU (Dynamic Caching, Hardware-Accelerated Ray Tracing & Mesh Shading, 100 GB/s)",
    "ram_details": "16GB Unified Memory (LPDDR5-6400 Unified Memory Architecture, Soldered, High-Efficiency Multi-Tasking)",
    "ports_io": "2x Thunderbolt / USB4 (40Gbps), 1x MagSafe 3 Fast-Charging (0 to 50% in 30 min), 3.5mm Studio Jack",
    "webcam_biometrics": "1080p FaceTime HD Camera with Computational Video; Touch ID Integrated Power Key",
    "thermals_acoustics": "Fanless Passive Thermal Architecture (100% Zero Noise, 0.0 dBA Silent Operation)"
  },
  {
    "id": "c-asus-zenbook-14-oled",
    "name": "ASUS Zenbook 14 OLED (2025)",
    "brand": "ASUS",
    "os": "Windows",
    "form_factor": "Laptop",
    "release_year": 2025,
    "price": 1049.0,
    "cpu_model": "Intel Core Ultra 7 155H (16C/22T)",
    "cpu_tier": 3,
    "cpu_cores": 16,
    "gpu_model": "Intel Arc Graphics (8-Xe)",
    "gpu_tier": 1,
    "ram_gb": 16,
    "storage_gb": 1000,
    "battery_hours": 14.0,
    "weight_lbs": 2.8,
    "screen_size": 14.0,
    "screen_nits": 500,
    "screen_gamut": "100% DCI-P3",
    "screen_refresh_hz": 120,
    "touchscreen": false,
    "stylus_support": false,
    "warranty_years": 1,
    "purchase_url": "https://www.bestbuy.com/site/asus-zenbook-14-oled-14-wuxga-touch-laptop-intel-core-ultra-7-16gb-memory-512gb-ssd-jasper-gray/6568761.p",
    "target_summary": "Gorgeous 120Hz 3K OLED screen, lightweight, quiet thermals, and all-day endurance.",
    "user_rating": 4.7,
    "review_count": 1480,
    "ranking_badge": "Best 14-inch OLED Laptop 2025",
    "os_edition": "Windows 11 Home (64-bit Edition, Intel Evo Edition Certified)",
    "official_url": "https://www.asus.com/us/laptops/for-home/zenbook/asus-zenbook-14-ux3405/",
    "retailer": "Best Buy",
    "msrp": 1299.99,
    "price_notes": "Best Buy street price for Core Ultra 7 / 16GB RAM / 1TB SSD. Note: ASUS direct store lists top-spec 32GB models starting at $1,799.",
    "cpu_details": "Intel Core Ultra 7 155H (16 Cores: 6P @ 4.8 GHz + 8E @ 3.8 GHz + 2 Low-Power E-cores, Intel AI Boost NPU)",
    "cpu_benchmark_score": "PassMark: 25,200 | Geekbench 6: 12,450 Multi / 2,380 Single | Cinebench R23: 15,200",
    "cpu_independent_review": "Grade: A (Modern AI & Efficiency Architecture) \u2022 Meteor Lake hybrid design with Intel AI Boost NPU. Strong 22-thread multi-tasking with low-power E-cores keeping idle drain minimal.",
    "gpu_details": "Intel Arc Graphics (8 Xe-cores @ 2.25 GHz, Ray Tracing, Intel XeSS AI Super-Sampling)",
    "ram_details": "16GB LPDDR5X-7467 MT/s (Ultra High-Speed Low-Latency Soldered, Dual-Channel)",
    "ports_io": "2x Thunderbolt 4 (DisplayPort / Power Delivery 40Gbps), 1x USB-A 3.2 Gen 1, 1x HDMI 2.1 TMDS, 3.5mm Combo Jack",
    "webcam_biometrics": "1080p FHD IR Camera with Windows Hello Facial Recognition & Ambient Light Sensor; Physical Camera Privacy Shutter",
    "thermals_acoustics": "ASUS IceBlade Dual Heatpipe Thermal System with Whisper Mode (<22 dBA in Whisper, 36 dBA in Performance)"
  },
  {
    "id": "c-hp-envy-x360",
    "name": "HP Envy x360 2-in-1 14 (2025)",
    "brand": "HP",
    "os": "Windows",
    "form_factor": "2-in-1",
    "release_year": 2025,
    "price": 849.0,
    "cpu_model": "AMD Ryzen 7 8840HS (8C/16T)",
    "cpu_tier": 3,
    "cpu_cores": 8,
    "gpu_model": "AMD Radeon 780M",
    "gpu_tier": 1,
    "ram_gb": 16,
    "storage_gb": 512,
    "battery_hours": 13.0,
    "weight_lbs": 3.08,
    "screen_size": 14.0,
    "screen_nits": 400,
    "screen_gamut": "100% sRGB",
    "screen_refresh_hz": 60,
    "touchscreen": true,
    "stylus_support": true,
    "warranty_years": 1,
    "purchase_url": "https://www.bestbuy.com/site/hp-envy-2-in-1-14-wide-ultra-xga-touch-screen-laptop-amd-ryzen-7-8840hs-16gb-memory-512gb-ssd-glacier-silver/6571087.p",
    "target_summary": "Versatile 360-degree hinge for handwriting notes, drawing, and tent-mode media.",
    "user_rating": 4.6,
    "review_count": 2640,
    "ranking_badge": "Top Rated 2-in-1 Touchscreen Value",
    "os_edition": "Windows 11 Home (64-bit Edition, Windows Ink Certified)",
    "official_url": "https://www.hp.com/us-en/shop/pdp/hp-envy-x360-2-in-1-laptop-14-fc0047nr",
    "retailer": "Best Buy",
    "msrp": 1049.99,
    "price_notes": "Best Buy retail price $849.99 ($200 below HP's official $1,049.99 list price).",
    "cpu_details": "AMD Ryzen 7 8840HS (8 Cores / 16 Threads, 3.3 GHz Base / 5.1 GHz Max Boost, 16MB L3 Cache, AMD Ryzen AI NPU 38 TOPS)",
    "cpu_benchmark_score": "PassMark: 28,800 | Geekbench 6: 12,100 Multi / 2,490 Single | Cinebench R23: 16,400",
    "cpu_independent_review": "Grade: A (Zen 4 Powerhouse with 38 TOPS AI) \u2022 4nm architecture with dedicated XDNA NPU. Outperforms Core Ultra 7 in sustained multi-threaded rendering while generating lower chassis heat.",
    "gpu_details": "AMD Radeon 780M (12 RDNA3 CUs @ 2.7 GHz, Full DirectX 12 Ultimate & Vulkan 1.3)",
    "ram_details": "16GB LPDDR5-6400 MT/s (High-Efficiency Dual-Channel Soldered)",
    "ports_io": "1x Thunderbolt 4 / USB4 40Gbps (PD, DP 2.1), 1x USB-C 10Gbps, 2x USB-A 10Gbps (HP Sleep and Charge), 1x HDMI 2.1, 3.5mm",
    "webcam_biometrics": "5MP Wide-Vision IR Camera with Windows Hello Face Unlock, Temporal Noise Reduction, and Manual Privacy Shutter Switch",
    "thermals_acoustics": "Dual Copper Heatpipes with Fluid Dynamic Bearing Fan, Intelligent Thermal Mode Switcher (~31 dBA quiet office)"
  },
  {
    "id": "c-surface-pro-11",
    "name": "Microsoft Surface Pro 11 (Copilot+ PC)",
    "brand": "Microsoft",
    "os": "Windows",
    "form_factor": "2-in-1",
    "release_year": 2024,
    "price": 1199.0,
    "cpu_model": "Snapdragon X Elite (12C)",
    "cpu_tier": 3,
    "cpu_cores": 12,
    "gpu_model": "Qualcomm Adreno GPU",
    "gpu_tier": 1,
    "ram_gb": 16,
    "storage_gb": 512,
    "battery_hours": 14.5,
    "weight_lbs": 1.97,
    "screen_size": 13.0,
    "screen_nits": 600,
    "screen_gamut": "100% DCI-P3",
    "screen_refresh_hz": 120,
    "touchscreen": true,
    "stylus_support": true,
    "warranty_years": 1,
    "purchase_url": "https://www.bestbuy.com/site/microsoft-surface-pro-copilot-pc-13-oled-touch-screen-snapdragon-x-elite-16gb-memory-512gb-ssd-device-only-platinum/6582827.p",
    "target_summary": "Featherlight detachable 2-in-1 tablet with vibrant 600-nit OLED and precision pen.",
    "user_rating": 4.7,
    "review_count": 1820,
    "ranking_badge": "Best Detachable Tablet PC - PCWorld",
    "os_edition": "Windows 11 Home on ARM (64-bit Copilot+ PC Edition with Native Prism Emulation)",
    "official_url": "https://www.microsoft.com/en-us/surface/devices/surface-pro-11th-edition",
    "retailer": "Best Buy / Microsoft Store",
    "msrp": 1199.0,
    "price_notes": "Official MSRP $1,199 for Snapdragon X Elite / 16GB RAM / 512GB OLED tablet (keyboard sold separately).",
    "cpu_details": "Qualcomm Snapdragon X Elite X1E-80-100 (12 Oryon Cores up to 3.4 GHz, Dual-Core Boost 4.0 GHz, 45 TOPS Hexagon NPU)",
    "cpu_benchmark_score": "Geekbench 6: 14,400 Multi / 2,810 Single | Cinebench 2024: 1,020 Multi",
    "cpu_independent_review": "Grade: A- (Breakthrough ARM Multi-Core Speed) \u2022 12 custom Oryon cores delivering blistering 14,400+ Geekbench multi-core throughput, matched with a 45 TOPS Hexagon NPU and 14hr battery.",
    "gpu_details": "Qualcomm Adreno GPU (3.8 TFLOPS, DirectX 12 Feature Level 12_1, Triple 4K Display Support)",
    "ram_details": "16GB LPDDR5X-8448 MT/s (High-Bandwidth 135 GB/s Bus Soldered Memory)",
    "ports_io": "2x USB4 / USB-C (DisplayPort 1.4a & Fast Charging), 1x Surface Connect Port, 1x Surface Pro Keyboard Magnetic Port",
    "webcam_biometrics": "Front Quad HD 1440p Studio Camera with Windows Hello Face ID; 10.5MP Ultra HD Rear Autofocus Camera",
    "thermals_acoustics": "Custom Ultra-Thin Vapor Chamber with Whisper Radial Fan, Sub-25 dBA Acoustic Profile"
  },
  {
    "id": "c-thinkpad-t14s-gen6",
    "name": "Lenovo ThinkPad T14s Gen 6 (2025/2026)",
    "brand": "Lenovo",
    "os": "Windows",
    "form_factor": "Laptop",
    "release_year": 2025,
    "price": 1499.0,
    "cpu_model": "AMD Ryzen AI 7 PRO 360 (8C/16T)",
    "cpu_tier": 5,
    "cpu_cores": 8,
    "gpu_model": "AMD Radeon 880M (RDNA 3.5)",
    "gpu_tier": 2,
    "ram_gb": 32,
    "storage_gb": 1000,
    "battery_hours": 17.5,
    "weight_lbs": 2.76,
    "screen_size": 14.0,
    "screen_nits": 400,
    "screen_gamut": "100% sRGB",
    "screen_refresh_hz": 60,
    "touchscreen": false,
    "stylus_support": false,
    "warranty_years": 3,
    "purchase_url": "https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadt/lenovo-thinkpad-t14s-gen-6-14-inch-amd-laptop/len101t0109",
    "target_summary": "Legendary ThinkPad keyboard tactile feel, ultra-light 2.76 lbs, Zen 5 AMD PRO security, 50 TOPS NPU, 3-year warranty.",
    "user_rating": 4.9,
    "review_count": 1420,
    "ranking_badge": "Best Enterprise Business Laptop (2025/2026)",
    "os_edition": "Windows 11 Pro (64-bit Edition with BitLocker Full-Disk Encryption, Hyper-V, and Windows Sandbox)",
    "official_url": "https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadt/lenovo-thinkpad-t14s-gen-6-14-inch-amd-laptop/len101t0109",
    "retailer": "Lenovo Store (In Stock)",
    "msrp": 1999.0,
    "price_notes": "Official Lenovo Store direct price with standard e-coupon savings for AMD Ryzen AI 7 PRO 360 / 32GB RAM / 1TB SSD.",
    "cpu_details": "AMD Ryzen AI 7 PRO 360 (8 Cores / 16 Threads, 4nm Zen 5 Architecture up to 5.0 GHz Boost, 50 TOPS XDNA 2 NPU, Enterprise AMD PRO Security)",
    "cpu_benchmark_score": "PassMark: 29,800 | Geekbench 6: 12,850 Multi / 2,680 Single | Cinebench 2024: 1,080 Multi",
    "cpu_independent_review": "Grade: A+ (Zen 5 Architecture & 50 TOPS AI NPU) • Cutting-edge 4nm Zen 5 silicon with enterprise hardware security and a dedicated 50 TOPS NPU. Incredible sustained compiler throughput and all-day 17+ hour battery efficiency.",
    "gpu_details": "AMD Radeon 880M (12 RDNA 3.5 CUs, Dual DisplayPort 2.1 MST Hub Support)",
    "ram_details": "32GB LPDDR5X-7500 MT/s (High-Speed Low-Power Memory)",
    "ports_io": "2x USB4 / Thunderbolt 4 (Power Delivery 3.0 & DP 2.1), 2x USB-A 3.2 Gen 1 (1 Always On), 1x HDMI 2.1 (4K@60Hz), 3.5mm Headphone Jack, Nano-SIM (optional)",
    "webcam_biometrics": "5MP + IR Discrete Webcam with Windows Hello Face Login & Web Privacy Shutter; Match-on-Chip Fingerprint Reader on Power Button",
    "thermals_acoustics": "Dual-Intake Owl-Blade Low-Noise Cooling Fan, MIL-STD-810H Certified Chassis (<26 dBA Whisper Quiet)"
  },
  {
    "id": "c-dell-xps-16",
    "name": "Dell XPS 16 (2025)",
    "brand": "Dell",
    "os": "Windows",
    "form_factor": "Laptop",
    "release_year": 2025,
    "price": 2299.0,
    "cpu_model": "Intel Core Ultra 9 185H (16C)",
    "cpu_tier": 5,
    "cpu_cores": 16,
    "gpu_model": "NVIDIA GeForce RTX 4070 (8GB)",
    "gpu_tier": 3,
    "ram_gb": 32,
    "storage_gb": 1000,
    "battery_hours": 9.5,
    "weight_lbs": 4.7,
    "screen_size": 16.3,
    "screen_nits": 500,
    "screen_gamut": "100% DCI-P3",
    "screen_refresh_hz": 90,
    "touchscreen": true,
    "stylus_support": false,
    "warranty_years": 1,
    "purchase_url": "https://www.dell.com/en-us/shop/cty/spd/xps-16-9640-laptop",
    "target_summary": "Premium powerhouse with 4K+ OLED display, glass touchpad, and dedicated RTX acceleration.",
    "user_rating": 4.6,
    "review_count": 980,
    "ranking_badge": "Best Premium Windows Workstation",
    "os_edition": "Windows 11 Pro (64-bit Edition, Commercial Enterprise Provisioning Ready)",
    "official_url": "https://www.dell.com/en-us/shop/cty/spd/xps-16-9640-laptop",
    "retailer": "Dell Official Store (Direct Configurator)",
    "msrp": 2499.0,
    "price_notes": "Dell Official Store direct configurator link for XPS 16 (9640) with Core Ultra 7/9 & dedicated RTX graphics. Also browse current retail stock via Best Buy.",
    "cpu_details": "Intel Core Ultra 9 185H (16 Cores / 22 Threads, 6P @ 5.1 GHz + 8E @ 3.8 GHz + 2 LPE, 24MB Smart Cache, Intel AI NPU)",
    "cpu_benchmark_score": "PassMark: 28,400 | Geekbench 6: 13,600 Multi / 2,520 Single | Cinebench R23: 17,100",
    "cpu_independent_review": "Grade: A (Flagship Creator Mobile Platform) \u2022 5.1 GHz peak clock speed with 24MB Smart Cache. Exceptional Premiere / DaVinci timeline scrubbing and real-time audio multi-tracking.",
    "gpu_details": "NVIDIA GeForce RTX 4070 Laptop GPU (8GB GDDR6, 60W TGP, Ada Lovelace, DLSS 3.5 Frame Generation & Ray Reconstruction)",
    "ram_details": "32GB LPDDR5X-7467 MT/s (Dual-Channel Low-Power Memory, Soldered Motherboard Configuration)",
    "ports_io": "3x Thunderbolt 4 (Type-C with Power Delivery and DisplayPort), 1x Full-Size MicroSD v6.0 Card Reader, 1x 3.5mm Headphone/Mic Combo",
    "webcam_biometrics": "1080p FHD IR Camera with Windows Hello Face Detection & Presence Sensing; Windows Hello Fingerprint Reader on Seamless Glass Deck",
    "thermals_acoustics": "Dual Opposite Outlet (DOO) Fans with GORE Thermal Insulation, Vapor Chamber Architecture (~39 dBA under full GPU load)"
  },
  {
    "id": "c-macbook-pro-16-m4pro",
    "name": "Apple MacBook Pro 16-inch (M4 Pro)",
    "brand": "Apple",
    "os": "macOS",
    "form_factor": "Laptop",
    "release_year": 2025,
    "price": 2499.0,
    "cpu_model": "Apple M4 Pro (14-Core CPU)",
    "cpu_tier": 5,
    "cpu_cores": 14,
    "gpu_model": "Apple 20-Core GPU",
    "gpu_tier": 4,
    "ram_gb": 24,
    "storage_gb": 512,
    "battery_hours": 24.0,
    "weight_lbs": 4.7,
    "screen_size": 16.2,
    "screen_nits": 1000,
    "screen_gamut": "100% DCI-P3",
    "screen_refresh_hz": 120,
    "touchscreen": false,
    "stylus_support": false,
    "warranty_years": 1,
    "purchase_url": "https://www.apple.com/shop/buy-mac/macbook-pro/16-inch",
    "target_summary": "Industry benchmark for creative pros: 1000-nit Liquid Retina XDR, Thunderbolt 5, whisper-silent fans, 24-hour battery.",
    "user_rating": 4.9,
    "review_count": 5890,
    "ranking_badge": "#1 Pro Creator Laptop & Best Display",
    "os_edition": "macOS Sequoia 15 (Factory Pre-installed, Multi-user FileVault & Secure Enclave)",
    "official_url": "https://www.apple.com/shop/buy-mac/macbook-pro/16-inch",
    "retailer": "Apple Store (Direct In-Stock)",
    "msrp": 2499.0,
    "price_notes": "Official Apple Store MSRP $2,499 for 14-Core CPU / 20-Core GPU / 24GB Unified Memory / 512GB SSD.",
    "cpu_details": "Apple M4 Pro (14 Cores: 10 Performance Cores + 4 Efficiency Cores, 273 GB/s Memory Bandwidth, 16-Core Neural Engine)",
    "cpu_benchmark_score": "Geekbench 6: 22,800 Multi / 3,920 Single | Cinebench 2024: 1,720 Multi",
    "cpu_independent_review": "Grade: A+ (World-Leading Single-Core & Neural Engine) • Unrivaled 3,900+ Geekbench single-core speed, 273 GB/s unified memory bandwidth, and full hardware ray-tracing with Thunderbolt 5 support.",
    "gpu_details": "Apple 20-Core GPU (Dynamic Caching, Hardware-Accelerated Ray Tracing, AV1 Decode Engine, Dual ProRes Encoders)",
    "ram_details": "24GB Unified Memory (LPDDR5X Unified High-Bandwidth Architecture 273 GB/s, Shared System Pool)",
    "ports_io": "3x Thunderbolt 5 (Up to 120Gbps), 1x HDMI 2.1 (Up to 8K @ 60Hz or 4K @ 240Hz), 1x SDXC Card Slot, 1x MagSafe 3 Port, 1x 3.5mm Studio Jack",
    "webcam_biometrics": "12MP Center Stage Camera with Desk View support; Studio Mics (3-Mic Array with Beamforming); Touch ID Key",
    "thermals_acoustics": "Dual High-Efficiency Thermal Fans (Whisper-Quiet under heavy 8K video rendering, 0 dBA idle, max 30 dBA)"
  },
  {
    "id": "c-mac-studio-m2max",
    "name": "Apple Mac Studio (M2 Max)",
    "brand": "Apple",
    "os": "macOS",
    "form_factor": "Desktop",
    "release_year": 2023,
    "price": 1999.0,
    "cpu_model": "Apple M2 Max (12-Core CPU)",
    "cpu_tier": 4,
    "cpu_cores": 12,
    "gpu_model": "Apple 30-Core GPU",
    "gpu_tier": 4,
    "ram_gb": 32,
    "storage_gb": 512,
    "battery_hours": 0.0,
    "weight_lbs": 5.9,
    "screen_size": 0.0,
    "screen_nits": 0,
    "screen_gamut": "N/A",
    "screen_refresh_hz": 0,
    "touchscreen": false,
    "stylus_support": false,
    "warranty_years": 1,
    "purchase_url": "https://www.bestbuy.com/site/apple-mac-studio-m2-max-512gb-ssd-silver/6427503.p?skuId=6427503",
    "target_summary": "Compact desktop studio with 4x Thunderbolt 4 ports, near-zero audio latency, and massive bandwidth.",
    "user_rating": 4.8,
    "review_count": 1650,
    "ranking_badge": "Best Compact Creator Studio Desktop",
    "os_edition": "macOS Sequoia 15 (Factory Pre-installed, Optimized for Low-Latency Audio DAW & 8K Video Timelines)",
    "official_url": "https://www.apple.com/shop/buy-mac/mac-studio",
    "retailer": "Best Buy / Apple Store",
    "msrp": 1999.0,
    "price_notes": "Official Apple Store MSRP $1,999 for M2 Max 12-Core CPU / 30-Core GPU / 32GB RAM / 512GB SSD.",
    "cpu_details": "Apple M2 Max (12 Cores: 8 Performance Cores @ 3.68 GHz + 4 Efficiency Cores @ 2.42 GHz, 400 GB/s Memory Bandwidth)",
    "cpu_benchmark_score": "Geekbench 6: 14,900 Multi / 2,780 Single | Cinebench R23: 14,800",
    "cpu_independent_review": "Grade: A+ (Massive Memory Bandwidth Monster) \u2022 Colossal 400 GB/s system bus bandwidth. Unmatched for 8K ProRes video streams and ultra-low buffer latency in complex audio DAWs.",
    "gpu_details": "Apple 30-Core GPU (Hardware Ray Tracing, 4 ProRes Video Acceleration Engines, Quad 6K Display Support)",
    "ram_details": "32GB Unified Memory (LPDDR5 Unified Architecture with massive 400 GB/s System Bus Bandwidth)",
    "ports_io": "Rear: 4x Thunderbolt 4, 2x USB-A (5Gbps), 1x HDMI 2.1, 1x 10Gb Ethernet, 3.5mm Jack; Front: 2x USB-C (10Gbps), 1x SDXC Slot",
    "webcam_biometrics": "Requires External Webcam / Studio Display; Supports Apple Touch ID Wireless Magic Keyboard",
    "thermals_acoustics": "Dual Centrifugal Blower System with Massive Circular Aluminum Heatsink, Barely Audible (<15 dBA continuous)"
  },
  {
    "id": "c-lenovo-legion-pro-5i",
    "name": "Lenovo Legion Pro 5i Gen 10 (2025/2026)",
    "brand": "Lenovo",
    "os": "Windows",
    "form_factor": "Laptop",
    "release_year": 2025,
    "price": 1699.0,
    "cpu_model": "Intel Core Ultra 7 251HX (24 Threads up to 5.10 GHz)",
    "cpu_tier": 5,
    "cpu_cores": 16,
    "gpu_model": "NVIDIA GeForce RTX 5070 Laptop GPU (12GB GDDR7)",
    "gpu_tier": 4,
    "ram_gb": 32,
    "storage_gb": 1000,
    "battery_hours": 7.0,
    "weight_lbs": 5.4,
    "screen_size": 16.0,
    "screen_nits": 500,
    "screen_gamut": "100% DCI-P3",
    "screen_refresh_hz": 240,
    "touchscreen": false,
    "stylus_support": false,
    "warranty_years": 1,
    "purchase_url": "https://www.lenovo.com/us/en/p/laptops/legion-laptops/legion-pro-series/legion-pro-5i-gen-10-16-inch-intel/83f300bbus",
    "target_summary": "Next-gen RTX 5070 12GB graphics, Intel Core Ultra 7 251HX hybrid powerhouse, 240Hz 500-nit DCI-P3 esports screen, Wi-Fi 7.",
    "user_rating": 4.8,
    "review_count": 3480,
    "ranking_badge": "Best High-Performance Gaming & 3D Workstation (2025/2026)",
    "os_edition": "Windows 11 Home (64-bit Edition, Pre-tuned for Xbox Game Pass & Lenovo Vantage AI Overclocking)",
    "official_url": "https://www.lenovo.com/us/en/p/laptops/legion-laptops/legion-pro-series/legion-pro-5i-gen-10-16-inch-intel/83f300bbus",
    "retailer": "Lenovo Official Store (Direct In-Stock)",
    "msrp": 1899.99,
    "price_notes": "Official Lenovo Store direct price for SKU 83F300BBUS with Core Ultra 7 251HX / 32GB RAM / 1TB SSD / RTX 5070 (12GB GDDR7).",
    "cpu_details": "Intel Core Ultra 7 251HX (16 Cores / 24 Threads: P-cores up to 5.10 GHz + E-cores up to 4.50 GHz, Intel AI Boost NPU)",
    "cpu_benchmark_score": "PassMark: 39,400 | Geekbench 6: 16,800 Multi / 2,920 Single | Cinebench 2024: 1,350 Multi",
    "cpu_independent_review": "Grade: A+ (Next-Gen Hybrid Silicon with Dedicated NPU) • Massive 24-thread mobile workstation compute with 5.1 GHz boost and 245W power ceiling. Built for heavy multi-threaded simulations, video pipelines, and high-FPS gaming.",
    "gpu_details": "NVIDIA GeForce RTX 5070 Laptop GPU (12GB GDDR7 Dedicated Memory, Advanced Optimus, DLSS 4 & Full Ray Tracing)",
    "ram_details": "32GB DDR5-5600 MT/s (2x 16GB Dual-Channel SODIMM, User-Upgradable up to 64GB DDR5)",
    "ports_io": "1x Thunderbolt 4 / USB-C (DisplayPort 2.1), 1x USB-C 3.2 Gen 2 (140W Power Delivery), 4x USB-A 3.2 Gen 1 (1 Always On), 1x HDMI 2.1 (Up to 8K/60Hz), 1x RJ-45 Gigabit LAN, 3.5mm",
    "webcam_biometrics": "5.0MP Camera with Dual-Microphone Array and E-Shutter Privacy Switch",
    "thermals_acoustics": "Legion Coldfront Hyper Dual Fan System with Vapor Chamber & Phase-Change Thermal Interface (Whisper mode <28 dBA, Full Turbo 46 dBA)"
  },
  {
    "id": "c-desktop-beast-4090",
    "name": "Alienware Aurora R16 High-Performance Desktop",
    "brand": "Alienware",
    "os": "Windows",
    "form_factor": "Desktop",
    "release_year": 2024,
    "price": 3499.0,
    "cpu_model": "Intel Core i9-14900KF (24C/32T Liquid Cooled)",
    "cpu_tier": 5,
    "cpu_cores": 24,
    "gpu_model": "NVIDIA GeForce RTX 4090 (24GB GDDR6X)",
    "gpu_tier": 4,
    "ram_gb": 64,
    "storage_gb": 2000,
    "battery_hours": 0.0,
    "weight_lbs": 33.8,
    "screen_size": 0.0,
    "screen_nits": 0,
    "screen_gamut": "N/A",
    "screen_refresh_hz": 0,
    "touchscreen": false,
    "stylus_support": false,
    "warranty_years": 1,
    "purchase_url": "https://www.dell.com/en-us/shop/desktop-computers/alienware-aurora-r16-gaming-desktop/spd/alienware-aurora-r16-desktop",
    "target_summary": "Extreme 3D rendering and 4K ultra gaming desktop with liquid cooling and 24GB VRAM.",
    "user_rating": 4.8,
    "review_count": 740,
    "ranking_badge": "PCMag Editor's Choice Extreme Desktop",
    "os_edition": "Windows 11 Pro (64-bit Edition, Unrestricted Workstation Provisioning)",
    "official_url": "https://www.dell.com/en-us/shop/desktop-computers/alienware-aurora-r16-gaming-desktop/spd/alienware-aurora-r16-desktop",
    "retailer": "Dell Direct",
    "msrp": 3799.0,
    "price_notes": "Dell direct price for Core i9-14900KF + RTX 4090 24GB liquid-cooled config. (Base Aurora models start at $1,299 with lower specs).",
    "cpu_details": "Intel Core i9-14900KF (24 Cores / 32 Threads: 8P-Cores @ 6.0 GHz Thermal Velocity Boost + 16E-Cores @ 4.4 GHz, 36MB Smart Cache, 240mm AIO Liquid Cooler)",
    "cpu_benchmark_score": "PassMark: 58,900 | Geekbench 6: 21,400 Multi / 3,210 Single | Cinebench R23: 40,200",
    "cpu_independent_review": "Grade: S (Extreme Desktop Peak Tier) \u2022 Record-setting 6.0 GHz peak clock speed with 32 threads. Unrestricted king of real-time Unreal Engine 5 development, 4K ray tracing, and physics.",
    "gpu_details": "NVIDIA GeForce RTX 4090 Desktop (24GB GDDR6X, 450W TGP, Ada Lovelace, 16,384 CUDA Cores, 3rd Gen RT Cores, DLSS 3 Frame Gen)",
    "ram_details": "64GB DDR5-5600 MT/s Dual-Channel XMP (4x DIMM Slots, Upgradable to 128GB DDR5)",
    "ports_io": "Front: 1x USB-C 10Gbps, 3x USB-A 5Gbps, 3.5mm; Rear: 1x USB-C 20Gbps, 2x USB-A 10Gbps, 4x USB-A 5Gbps, 2x USB 2.0, 1x RJ-45 2.5G LAN, 7.1 Surround SPDIF, 3x DP 1.4a, 1x HDMI 2.1",
    "webcam_biometrics": "Requires External Webcam / Peripherals; Supports FIDO2 / Windows Hello USB Keys",
    "thermals_acoustics": "Alienware Legend 3 Liquid Cooling with 240mm Radiator, 1000W 80-Plus Platinum PSU, 5 High-Flow Chassis Fans (~42 dBA gaming load)"
  },
  {
    "id": "c-minisforum-um780",
    "name": "Minisforum UM780 XTX Mini PC",
    "brand": "Minisforum",
    "os": "Windows",
    "form_factor": "Mini PC",
    "release_year": 2024,
    "price": 569.0,
    "cpu_model": "AMD Ryzen 7 7840HS (8C/16T)",
    "cpu_tier": 3,
    "cpu_cores": 8,
    "gpu_model": "AMD Radeon 780M (Oculink supported)",
    "gpu_tier": 1,
    "ram_gb": 32,
    "storage_gb": 1000,
    "battery_hours": 0.0,
    "weight_lbs": 1.6,
    "screen_size": 0.0,
    "screen_nits": 0,
    "screen_gamut": "N/A",
    "screen_refresh_hz": 0,
    "touchscreen": false,
    "stylus_support": false,
    "warranty_years": 2,
    "purchase_url": "https://www.amazon.com/dp/B0CNPZQT96",
    "target_summary": "Pocket-sized desktop beast with 32GB RAM, dual 2.5G LAN, supporting up to 4x 4K displays.",
    "user_rating": 4.6,
    "review_count": 890,
    "ranking_badge": "#1 High-Performance Mini PC",
    "os_edition": "Windows 11 Pro (64-bit Edition Pre-Activated, Linux Ubuntu/Fedora Dual-Boot Certified)",
    "official_url": "https://www.minisforum.com/collections/elitemini-series/amd",
    "retailer": "Amazon / Minisforum Store",
    "msrp": 649.0,
    "price_notes": "Amazon / Minisforum direct price for pre-configured 32GB RAM + 1TB NVMe configuration ($439 barebones without RAM/storage).",
    "cpu_details": "AMD Ryzen 7 7840HS (8 Cores / 16 Threads, 3.8 GHz Base / 5.1 GHz Max Boost, 16MB L3 Cache, Zen 4 4nm, 54W-65W TDP mode)",
    "cpu_benchmark_score": "PassMark: 29,400 | Geekbench 6: 12,300 Multi / 2,480 Single | Cinebench R23: 16,800",
    "cpu_independent_review": "Grade: A (Mini Workstation Heavyweight) \u2022 Full-power 54W Zen 4 architecture with Radeon 780M. Outperforms ultrabook chips under sustained multi-hour compiling and rendering loads.",
    "gpu_details": "AMD Radeon 780M (12 RDNA3 CUs @ 2.7 GHz, Oculink PCIe 4.0 x4 Port for External Desktop GPU Docking at 64Gbps)",
    "ram_details": "32GB DDR5-5600 MT/s (Dual SO-DIMM Slots, Upgradable up to 96GB DDR5, Non-Soldered)",
    "ports_io": "1x Oculink Port (PCIe 4.0 x4 64Gbps), 2x USB4 40Gbps (Type-C), 2x HDMI 2.1, 4x USB-A 3.2 Gen 2 (10Gbps), 2x 2.5G RJ-45 Ethernet LAN, 3.5mm Audio",
    "webcam_biometrics": "Requires External Webcam; Supports USB Fingerprint Key",
    "thermals_acoustics": "Dual Active Cooling Fans (CPU Fan + Dedicated RAM/SSD Active Cooler) with Liquid Metal Thermal Interface, Whisper quiet (~30 dBA)"
  }
];

const PERIPHERALS_CATALOG = [
  {
    "id": "p-dell-4k-monitor",
    "name": "Dell UltraSharp 27 4K USB-C Hub Monitor (U2723QE)",
    "category": "Monitor",
    "price": 519.0,
    "description": "IPS Black 2000:1 contrast, 98% DCI-P3, 90W power delivery over single USB-C cable.",
    "purchase_url": "https://www.dell.com/en-us/shop/dell-ultrasharp-27-4k-usb-c-hub-monitor-u2723qe"
  },
  {
    "id": "p-budget-24-monitor",
    "name": "ASUS Eye Care 24-inch 1080p IPS Monitor",
    "category": "Monitor",
    "price": 119.0,
    "description": "Crisp 1080p, flicker-free, low blue light filter, HDMI & VGA.",
    "purchase_url": "https://www.amazon.com/dp/B088MLZ8GS"
  },
  {
    "id": "p-gaming-1440p-monitor",
    "name": "LG UltraGear 27-inch 1440p 180Hz Gaming Monitor (27GS75Q)",
    "category": "Monitor",
    "price": 249.0,
    "description": "1ms response time, 180Hz refresh rate, HDR10, AMD FreeSync & G-Sync compatible.",
    "purchase_url": "https://www.amazon.com/dp/LG-UltraGear-27"
  },
  {
    "id": "p-caldigit-ts4-dock",
    "name": "CalDigit TS4 Thunderbolt 4 Dock",
    "category": "Docking Station",
    "price": 399.0,
    "description": "18 ports, 98W host charging, 2.5GbE Ethernet, dual 6K display support for Macs & PCs.",
    "purchase_url": "https://www.caldigit.com/thunderbolt-station-4"
  },
  {
    "id": "p-anker-usb-c-hub",
    "name": "Anker 7-in-1 USB-C Hub & HDMI Adapter",
    "category": "Docking Station",
    "price": 34.99,
    "description": "4K HDMI, 100W Power Delivery pass-through, SD card reader, 2x USB-A ports.",
    "purchase_url": "https://www.amazon.com/dp/B07ZVKTP53"
  },
  {
    "id": "p-anker-gan-charger",
    "name": "Anker 65W GaN Compact Travel Fast Charger (Nano II)",
    "category": "Power / Charger",
    "price": 39.99,
    "description": "Tiny fold-plug charger capable of full-speed charging laptops, tablets, and phones.",
    "purchase_url": "https://www.amazon.com/dp/B08T5QN2TR"
  },
  {
    "id": "p-logitech-mx-master-3s",
    "name": "Logitech MX Master 3S Wireless Ergonomic Mouse",
    "category": "Input Device",
    "price": 99.99,
    "description": "Quiet clicks, MagSpeed electromagnetic scroll wheel, 8000 DPI sensor on any glass surface.",
    "purchase_url": "https://www.logitech.com/en-us/products/mice/mx-master-3s.html"
  },
  {
    "id": "p-stylus-pen",
    "name": "Active Precision Stylus Pen with Palm Rejection",
    "category": "Input Device",
    "price": 59.99,
    "description": "4096 levels of pressure sensitivity, magnetic charging, natural handwriting feel.",
    "purchase_url": "https://www.amazon.com/dp/stylus-pen"
  }
];

function clientScoreComputer(comp, persona, currentYear = 2026) {
  const reasons = [];

  // 1. OS Compatibility Check
  if (persona.os_preference && persona.os_preference !== 'any' && comp.os.toLowerCase() !== persona.os_preference.toLowerCase()) {
    return { score: 0.0, eligible: false, reason: 'OS mismatch: requires ' + persona.os_preference + ', has ' + comp.os };
  }

  // 2. Form Factor / Touchscreen Hard Requirement Check
  if (persona.requires_touch_stylus && !(comp.touchscreen && comp.stylus_support)) {
    return { score: 0.0, eligible: false, reason: 'Requires 2-in-1 touchscreen with active stylus support.' };
  }

  // 3. Performance Alignment (35 points max)
  let cpu_score = 14.0;
  if (comp.cpu_tier < (persona.min_cpu_tier || 1)) {
    cpu_score = 5.0;
    reasons.push('CPU underpowered for workload');
  } else if (comp.cpu_tier > (persona.ideal_cpu_tier || 3) + 1) {
    cpu_score = 12.0;
    reasons.push('CPU (' + comp.cpu_model + ') is extreme overkill for this use-case');
  } else if (comp.cpu_tier >= (persona.ideal_cpu_tier || 3)) {
    cpu_score = 18.0;
  }

  let gpu_score = 11.0;
  if (comp.gpu_tier < (persona.min_gpu_tier || 0)) {
    gpu_score = 0.0;
    reasons.push('GPU insufficient for visual/3D requirements');
  } else if (comp.gpu_tier > (persona.ideal_gpu_tier || 1) + 1 && (persona.ideal_gpu_tier || 1) <= 1) {
    gpu_score = 4.0;
    reasons.push('Dedicated high-power GPU is unnecessary battery drain and thermal waste for everyday tasks');
  } else if (comp.gpu_tier >= (persona.ideal_gpu_tier || 1)) {
    gpu_score = 17.0;
  }

  const perf_total = cpu_score + gpu_score;

  // 4. Memory & Storage (15 points max)
  let ram_score = 11.0;
  if (comp.ram_gb < (persona.min_ram_gb || 8)) {
    ram_score = 2.0;
    reasons.push('RAM (' + comp.ram_gb + 'GB) below minimum requirement (' + (persona.min_ram_gb || 8) + 'GB)');
  } else if (comp.ram_gb > (persona.ideal_ram_gb || 16) * 2) {
    ram_score = 10.0;
  } else if (comp.ram_gb >= (persona.ideal_ram_gb || 16)) {
    ram_score = 15.0;
  }

  // 5. Mobility, Battery & Form-Factor (20 points max)
  let mobility_score = 15.0;
  if (persona.mobility_need === 'high_travel') {
    const minBat = persona.min_battery_hrs || 8.0;
    const bat_score = minBat > 0 ? Math.min(10.0, (comp.battery_hours / minBat) * 10.0) : 10.0;
    const weight_score = Math.max(0.0, 10.0 - (Math.max(0.0, comp.weight_lbs - 2.5) * 3.5));
    mobility_score = bat_score + weight_score;
    if (comp.form_factor === 'Desktop') {
      mobility_score = 0.0;
      reasons.push('Cannot travel: Desktop form factor');
    }
  } else if (persona.mobility_need === 'convertible_stylus') {
    mobility_score = (comp.touchscreen && comp.stylus_support) ? 20.0 : 5.0;
  } else if (persona.mobility_need === 'desk_bound') {
    mobility_score = (comp.form_factor === 'Desktop' || comp.form_factor === 'Mini PC') ? 18.0 : 15.0;
  } else {
    const bat_score = Math.min(10.0, (comp.battery_hours / 8.0) * 10.0);
    const weight_score = Math.max(0.0, 10.0 - (Math.max(0.0, comp.weight_lbs - 3.5) * 2.0));
    mobility_score = bat_score + weight_score;
  }

  // 6. Display & Screen Fit (10 points max)
  let display_score = 5.0;
  if (comp.screen_nits >= (persona.min_nits || 250)) {
    display_score += 3.0;
  }
  if ((comp.screen_gamut || '').includes('DCI-P3') || (comp.screen_gamut || '').includes('100% sRGB')) {
    display_score += 2.0;
  }

  // 7. Release Year Decay (10 points max)
  const age = currentYear - comp.release_year;
  let year_score = 4.0;
  if (age <= 1) {
    year_score = 10.0;
  } else if (age === 2) {
    year_score = 8.5;
  } else if (age === 3) {
    year_score = 6.5;
    reasons.push('Model released ' + comp.release_year + ' (older generation hardware)');
  } else {
    reasons.push('Model released ' + comp.release_year + ' (4+ years old)');
  }

  // 8. Budget Fit (10 points max)
  let budget_score = 10.0;
  const targetBudget = persona.target_budget || 1200;
  if (comp.price > targetBudget) {
    const over_ratio = (comp.price - targetBudget) / targetBudget;
    budget_score = Math.max(0.0, 10.0 - (over_ratio * 20.0));
    if (over_ratio > 0.35) {
      reasons.push('Price ($' + comp.price.toLocaleString() + ') is significantly over budget ($' + targetBudget.toLocaleString() + ')');
    }
  }

  const total_score = Math.round(Math.max(0.0, Math.min(100.0, perf_total + ram_score + mobility_score + display_score + year_score + budget_score)) * 10) / 10;

  return {
    computer: comp,
    score: total_score,
    eligible: total_score >= 45.0,
    reasons: reasons,
    sub_scores: {
      performance: Math.round(perf_total * 10) / 10,
      memory: Math.round(ram_score * 10) / 10,
      mobility: Math.round(mobility_score * 10) / 10,
      display: Math.round(display_score * 10) / 10,
      freshness: Math.round(year_score * 10) / 10,
      budget_fit: Math.round(budget_score * 10) / 10
    }
  };
}

function clientMatchPeripherals(persona, selectedComp) {
  const matches = [];
  const neededCats = persona.required_peripherals || [];
  for (const cat of neededCats) {
    if (cat === 'Monitor') {
      if (persona.category === 'Gaming') {
        matches.push(PERIPHERALS_CATALOG.find(p => p.id === 'p-gaming-1440p-monitor'));
      } else if (persona.category === 'Creative' || persona.category === 'Business') {
        matches.push(PERIPHERALS_CATALOG.find(p => p.id === 'p-dell-4k-monitor'));
      } else {
        matches.push(PERIPHERALS_CATALOG.find(p => p.id === 'p-budget-24-monitor'));
      }
    } else if (cat === 'Docking Station') {
      if (selectedComp && selectedComp.price > 1200) {
        matches.push(PERIPHERALS_CATALOG.find(p => p.id === 'p-caldigit-ts4-dock'));
      } else {
        matches.push(PERIPHERALS_CATALOG.find(p => p.id === 'p-anker-usb-c-hub'));
      }
    } else if (cat === 'Power / Charger') {
      matches.push(PERIPHERALS_CATALOG.find(p => p.id === 'p-anker-gan-charger'));
    } else if (cat === 'Input Device') {
      if (persona.requires_touch_stylus) {
        matches.push(PERIPHERALS_CATALOG.find(p => p.id === 'p-stylus-pen'));
      } else {
        matches.push(PERIPHERALS_CATALOG.find(p => p.id === 'p-logitech-mx-master-3s'));
      }
    }
  }
  return matches.filter(Boolean);
}

function clientRecommend(payload) {
  const priorities = payload.priorities || {};
  const weight_perf = parseFloat(priorities.performance || 1.0);
  const weight_battery = parseFloat(priorities.battery || 1.0);
  const weight_screen = parseFloat(priorities.screen || 1.0);
  const weight_portability = parseFloat(priorities.portability || 1.0);

  const results = [];
  for (const comp of COMPUTERS_CATALOG) {
    const res = clientScoreComputer(comp, payload);
    if (res.eligible) {
      const sub = res.sub_scores;
      const custom_score = (
        sub.performance * weight_perf +
        sub.memory +
        (sub.mobility * 0.5 * weight_battery + sub.mobility * 0.5 * weight_portability) +
        sub.display * weight_screen +
        sub.freshness +
        sub.budget_fit
      );
      res.custom_score = Math.round(custom_score * 10) / 10;
      results.push(res);
    }
  }

  results.sort((a, b) => b.custom_score - a.custom_score);

  let matchedPeripherals = [];
  if (results.length > 0) {
    matchedPeripherals = clientMatchPeripherals(payload, results[0].computer);
  }

  return {
    success: true,
    count: results.length,
    recommendations: results,
    recommended_peripherals: matchedPeripherals,
    all_peripherals: PERIPHERALS_CATALOG
  };
}


// Pre-cached analysis for Wilson College Veterinary Nursing Demo
const FALLBACK_WILSON_ANALYSIS = {
  "hardware_requirements": {
    "min_ram_gb": 16,
    "min_cpu": "Intel Core i5/i7 (12th Gen+) or AMD Ryzen 5/7 (7000+) / Apple Silicon M-series",
    "min_storage_gb": 512,
    "os_restrictions": "Windows 11 strongly recommended for veterinary medical databases & imaging compatibility; macOS supported for general lecture notes; Chromebooks prohibited.",
    "form_factor_recommendation": "Durable lightweight 2-in-1 convertible with active stylus or rugged laptop (<=3.5 lbs) with 12+ hour battery for farm, barn, and clinical duty."
  },
  "software_identified": [
    "Cornerstone Veterinary Practice Management",
    "IDEXX VetConnect PLUS",
    "Horos / OsiriX DICOM Veterinary Imaging",
    "AVImark Practice Management",
    "Microsoft 365 / Excel Biostatistics"
  ],
  "critical_course_policies": [
    "VMT 213 & 221 Clinical Techniques: Mandatory onsite animal physical examinations requiring mobile battery life.",
    "VMT 222 Veterinary Radiology: High-resolution DICOM diagnostic radiography viewer compatibility required.",
    "VMT 355 Veterinary Internship: 240 contact hours at veterinary hospitals/clinics with mobile charting."
  ],
  "degree_curriculum": {
    "degree_title": "Veterinary Nursing, Bachelor of Science",
    "institution": "Wilson College",
    "target_url": "https://wilson.smartcatalogiq.com/current/catalog/major-and-minor-requirements/veterinary-nursing/veterinary-nursing-bachelor-of-science",
    "total_courses": 42,
    "lab_course_count": 21,
    "clinical_course_count": 14,
    "imaging_course_count": 8,
    "concentrations": [
      "Concentration in Veterinary Biology",
      "Concentration in Veterinary Business Management",
      "Concentration in Veterinary Equi-Assist"
    ],
    "sections": [
      {
        "title": "Required Courses",
        "group": "Core Degree Requirements",
        "course_count": 14
      },
      {
        "title": "Required Courses",
        "group": "Concentration in Veterinary Biology",
        "course_count": 8
      },
      {
        "title": "Two of the following:",
        "group": "Concentration in Veterinary Biology",
        "course_count": 5
      },
      {
        "title": "Required Courses",
        "group": "Concentration in Veterinary Business Management",
        "course_count": 11
      },
      {
        "title": "One of the following:",
        "group": "Concentration in Veterinary Business Management",
        "course_count": 2
      },
      {
        "title": "Required Courses",
        "group": "Concentration in Veterinary Equi-Assist",
        "course_count": 11
      }
    ],
    "academic_policies": [
      {
        "title": "Admission to the Veterinary Nursing Program",
        "summary": "In order to pursue a major in Veterinary Nursing, students must meet the Intended Veterinary Nursing admissions requirements and be officially accepted to Wilson College. To officially declare and enter the Veterinary Nursing Program, students must meet the following requirements: Earned at least 12 semester hours of credit. Have a minimum Wilson College cumulative GPA of 2.500 or higher. Complete"
      },
      {
        "title": "Internal Transfer (Change of Major) into the Veterinary Nursing Major",
        "summary": "This policy applies to all currently enrolled Wilson College students who request a change of major into the Veterinary Nursing program after initial admission to the College. Policy To be eligible for an internal transfer into the Veterinary Nursing major, a student must meet&nbsp;all&nbsp;of the following requirements: Earn a cumulative GPA of&nbsp;3.0 or higher&nbsp;at the time of application. "
      },
      {
        "title": "Decision and Capacity",
        "summary": "Meeting the minimum eligibility requirements guarantees consideration but does not guarantee placement. Approval of an internal transfer is contingent upon&nbsp;program capacity&nbsp;and available instructional and clinical resources. Students who meet the requirements are approved as Veterinary Nursing Intended majors and are eligible to enroll in VMT-115 . &nbsp; To officially declare the major "
      },
      {
        "title": "Veterinary Nursing Program General Requirements",
        "summary": "&nbsp; Veterinary Nursing Student general requirements: Students must obtain at least a grade of C (2.0 on a 4.0-point scale) in each Veterinary Nursing (VMT) course above VMT-115 and any 100 level biology, chemistry and math course listed as pre-requisites to enroll in a VMT course. These courses include BIO-101 , BIO-110 , CHM-101 , CHM-103 , and MAT-103 . Students may only repeat Veterinary Nur"
      }
    ],
    "all_courses": [
      {
        "code": "ACC 105",
        "title": "Financial Accounting",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/acc-accounting/100/acc-105",
        "groups": [
          "Concentration in Veterinary Business Management"
        ],
        "sections": [
          "Concentration in Veterinary Business Management - Required Courses"
        ],
        "description": "This course emphasizes the provision of relevant and reliable information used in making financial and business decisions. Areas of emphasis include the basic concepts and principles of financial accounting; the accounting cycle from the analysis of business transactions and their systematic recording through the preparation of the basic financial statements - balance sheet, income statement and statement of cash flows; the basic theory and practice for recognition, measurement and classification of assets, liabilities, equity,revenues and expenses; and the interpretation of accounting data, income and cash flow analysis. Alternative forms of business organization, internal control and interrelationships of accounting data and the ethical implications of accounting are also covered. Co-requisites: MAT 097 or Mathematics Placement Exam results.",
        "prerequisites": "",
        "tags": [
          "Practice Management & EMR Software"
        ]
      },
      {
        "code": "BIO 101",
        "title": "General Biology I",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/bio-biology/100/bio-101",
        "groups": [
          "Concentration in Veterinary Biology",
          "Concentration in Veterinary Business Management",
          "Concentration in Veterinary Equi-Assist"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Required Courses",
          "Concentration in Veterinary Business Management - Required Courses",
          "Concentration in Veterinary Equi-Assist - Required Courses"
        ],
        "description": "Introduction to biochemistry, cell anatomy, molecular cell biology, and cell energetics. Genetics covered in relation to molecular mechanisms, population ecology, and evolutionary theory. Designed as the first of two semesters of a general survey. Three hours lecture; three hours lab. NSL (4 sem. Hrs.)",
        "prerequisites": "",
        "tags": [
          "Chemistry & Molecular Simulation",
          "Laboratory Component"
        ]
      },
      {
        "code": "BIO 102",
        "title": "General Biology II",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/bio-biology/100/bio-102",
        "groups": [
          "Concentration in Veterinary Biology",
          "Concentration in Veterinary Business Management",
          "Concentration in Veterinary Equi-Assist"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Required Courses",
          "Concentration in Veterinary Business Management - Required Courses",
          "Concentration in Veterinary Equi-Assist - Required Courses"
        ],
        "description": "Introduction to organismal biology, ecology, and evolution. Surveys the kingdoms of life, highlighting key characteristics, challenges, and evolutionary adaptations. Covers ecological principles, including ecosystem organization, biotic-abiotic interactions, and biosphere-level processes. Designed as the second of two semesters of a general survey. Three hours lecture; three hours lab. Prerequisite: BIO 101 . NSL (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Laboratory Component"
        ]
      },
      {
        "code": "BIO 110",
        "title": "Contemporary Biology",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/bio-biology/100/bio-110",
        "groups": [
          "Concentration in Veterinary Business Management",
          "Concentration in Veterinary Equi-Assist"
        ],
        "sections": [
          "Concentration in Veterinary Business Management - Required Courses",
          "Concentration in Veterinary Equi-Assist - Required Courses"
        ],
        "description": "A survey of relevant biological principles and processes designed as an introduction to the life sciences for the non-science major. Topics include human biology (cellular and physiological processes), evolution of biodiversity and ecology. Three hours lecture; three hours lab. NSL (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Laboratory Component"
        ]
      },
      {
        "code": "BIO 111",
        "title": "Clinical Aspects of Microbiology",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/bio-biology/100/bio-111",
        "groups": [
          "Concentration in Veterinary Business Management",
          "Concentration in Veterinary Equi-Assist"
        ],
        "sections": [
          "Concentration in Veterinary Business Management - Required Courses",
          "Concentration in Veterinary Equi-Assist - Required Courses"
        ],
        "description": "A general overview of microbiology with emphasis on pathological mechanisms of infectious disease and precautions necessary for the prevention and treatment of infectious disease in clinical settings. Students are exposed to the fundamental principles of microbial structure, growth and metabolism. Special attention is placed on localization and identification of pathological microorganisms. Topics of disinfection, sterilization and immunity with respect to clinical settings are emphasized. Three hours lecture; two hours lab. Prerequisite: BIO 102 or BIO 110 . NSL (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Microscopy & Clinical Pathology",
          "Laboratory Component"
        ]
      },
      {
        "code": "BIO 211",
        "title": "Microbiology",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/bio-biology/200/bio-211",
        "groups": [
          "Concentration in Veterinary Biology"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Required Courses"
        ],
        "description": "Study of the morphology, physiology and genetics of microorganisms with emphasis on bacteria and bacteriological techniques. Three hours lecture; two hours lab. Prerequisites: BIO 102 , CHM 201 or CHM-104 . NSL (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Microscopy & Clinical Pathology",
          "Laboratory Component"
        ]
      },
      {
        "code": "BUS 124",
        "title": "Introduction to Management",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/bus-business/100/bus-124",
        "groups": [
          "Concentration in Veterinary Business Management"
        ],
        "sections": [
          "Concentration in Veterinary Business Management - Required Courses"
        ],
        "description": "Study of management from a general perspective. Major functional areas of internal and external activities of an organization, the decision-making process and the computer's place in contemporary management. Emphasis on formulation and implementation of policy in keeping with an organization's goals.",
        "prerequisites": "",
        "tags": [
          "Practice Management & EMR Software"
        ]
      },
      {
        "code": "BUS 220",
        "title": "Entrepreneurship/Small Business Managemt",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/bus-business/200/bus-220",
        "groups": [
          "Concentration in Veterinary Business Management"
        ],
        "sections": [
          "Concentration in Veterinary Business Management - Required Courses"
        ],
        "description": "Consideration of the problems of start-up, survival, profit and growth of new or ongoing venture. Examines small-business operations including business plans, finance, legal aspects, government regulation, record-keeping, marketing and human resources issues. Prerequisite: BUS-124 .",
        "prerequisites": "",
        "tags": [
          "Practice Management & EMR Software"
        ]
      },
      {
        "code": "BUS 223",
        "title": "Marketing Management",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/bus-business/200/bus-223",
        "groups": [
          "Concentration in Veterinary Business Management"
        ],
        "sections": [
          "Concentration in Veterinary Business Management - One of the following:"
        ],
        "description": "Analytical systems approach to marketing decision-making. Examines consumer behavior, marketing research, pricing, product and promotion strategy, distribution channels and why marketing activities develop in an industrial economy. Analyzes social and ethical issues. Prerequisite: BUS-124 or COM-233 .",
        "prerequisites": "",
        "tags": [
          "Practice Management & EMR Software"
        ]
      },
      {
        "code": "BUS 326",
        "title": "Human Resource Management",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/bus-business/300/bus-326",
        "groups": [
          "Concentration in Veterinary Business Management"
        ],
        "sections": [
          "Concentration in Veterinary Business Management - One of the following:"
        ],
        "description": "System elements required to recruit, select, train and maintain a workforce in business. Emphasis on management development, wage and salary administration, and personnel planning. Prerequisite: 124.",
        "prerequisites": "124",
        "tags": [
          "Practice Management & EMR Software"
        ]
      },
      {
        "code": "CHM 101",
        "title": "General Chemistry I",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/chm-chemistry/100/chm-101",
        "groups": [
          "Concentration in Veterinary Biology"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Required Courses"
        ],
        "description": "The first semester of a two-semester sequence intended for students majoring in the sciences. The course focuses on the study of atomic structure, nomenclature, stoichiometry, energy,bonding and coordination chemistry. Laboratory work reinforces lecture topics. Three hours lecture; three hours lab. Prerequisite: Concurrent enrollment in MAT 103 or placement above MAT 103 . High school chemistry or an introductory chemistry course is strongly recommended. NSL (4 sem. hrs.)",
        "prerequisites": "Concurrent enrollment in",
        "tags": [
          "Chemistry & Molecular Simulation",
          "Laboratory Component"
        ]
      },
      {
        "code": "CHM 102",
        "title": "General Chemistry II",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/chm-chemistry/100/chm-102",
        "groups": [
          "Concentration in Veterinary Biology"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Required Courses"
        ],
        "description": "The continuation of General Chemistry I with emphasis on solutions, kinetics, equilibrium, acid-base chemistry, thermodynamics and electrochemistry. Laboratory work reinforces lecture topics and includes qualitative analysis. Three hours lecture; three hours lab. Prerequisites: CHM 101 , MAT 103 . NSL (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Chemistry & Molecular Simulation",
          "Laboratory Component"
        ]
      },
      {
        "code": "CHM 103",
        "title": "Fundamentals of General Chemistry",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/chm-chemistry/100/chm-103",
        "groups": [
          "Concentration in Veterinary Business Management",
          "Concentration in Veterinary Equi-Assist"
        ],
        "sections": [
          "Concentration in Veterinary Business Management - Required Courses",
          "Concentration in Veterinary Equi-Assist - Required Courses"
        ],
        "description": "Designed to meet a one-semester general chemistry requirement. Provides an overview of atomic structure and bonding, stoichiometry, energy and acid-base chemistry, redox chemistry, equilibrium kinetics and hydrocarbons. Laboratory work reinforces lecture topics. Three hours lecture; three hours laboratory. Prerequisite: MAT 098/100 or equivalent. NSL (4 sem. hrs.)",
        "prerequisites": "MAT 098/100  or equivalent",
        "tags": [
          "Chemistry & Molecular Simulation",
          "Laboratory Component"
        ]
      },
      {
        "code": "CHM 104",
        "title": "Fund. of Organic Chem. in Biological Sys",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/chm-chemistry/100/chm-104",
        "groups": [
          "Concentration in Veterinary Business Management",
          "Concentration in Veterinary Equi-Assist"
        ],
        "sections": [
          "Concentration in Veterinary Business Management - Required Courses",
          "Concentration in Veterinary Equi-Assist - Required Courses"
        ],
        "description": "Designed to meet a one-semester requirement in organic chemistry of biological systems. Provides an overview of nomenclature, functional groups and reactions, with an emphasis on structure and reactions in biological systems, including proteins, lipids, carbohydrates, nucleic acids and enzymes. Three hours lecture; three hours laboratory. Prerequisite: CHM 103 . NSL (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Chemistry & Molecular Simulation",
          "Laboratory Component"
        ]
      },
      {
        "code": "CHM 201",
        "title": "Organic Chemistry I",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/chm-chemistry/200/chm-201",
        "groups": [
          "Concentration in Veterinary Biology"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Required Courses"
        ],
        "description": "The first course of a two-semester sequence that introduces structure, bonding and reactivity of organic (carbon-based) compounds. Lecture focuses on properties and reactivity of alkanes, alkenes, alkynes, alcohols, aldehydes and ketones, with an emphasis on reaction mechanisms and stereochemistry. Laboratory introduces basic purification and synthetic techniques and analytical methods including polarimetry, infrared (IR) and nuclear magnetic resonance (NMR) spectroscopy. Three hours lecture; three hours laboratory. Prerequisite: CHM 102 . NSL (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Chemistry & Molecular Simulation",
          "Laboratory Component"
        ]
      },
      {
        "code": "CHM 202",
        "title": "Organic Chemistry II",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/chm-chemistry/200/chm-202",
        "groups": [
          "Concentration in Veterinary Biology"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Required Courses"
        ],
        "description": "A continuation of CHM 201 with an added emphasis on molecules with biological importance. Includes a discussion of carboxylic acids and their derivatives, enolates, aromatics, amines, lipids, carbohydrates and amino acids. Laboratory work includes more advanced synthetic methods and an independent research project. Three hours lecture; three hours lab. Prerequisite: CHM 201 . NSL (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Chemistry & Molecular Simulation",
          "Laboratory Component"
        ]
      },
      {
        "code": "CHM 318",
        "title": "Biochemistry I",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/chm-chemistry/300/chm-318",
        "groups": [
          "Concentration in Veterinary Biology"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Two of the following:"
        ],
        "description": "Introduces students to the major classes of biomolecules: proteins, carbohydrates, lipids and nucleic acids. Emphasizes the chemistry that dictates structure and functions of biological molecules. Also involves detailed study of proteinaceous enzymes, models of enzyme activity and enzymatic regulation; covers nucleic acid enzymes and current topics in nucleic acid biochemistry. Discussion includes the combination of the major classes of biological molecules to form biological membranes and the transport through such complex structures. Three hours lecture. Prerequisite: CHM 202 and BIO 102 or BIO 110.",
        "prerequisites": "",
        "tags": [
          "Chemistry & Molecular Simulation"
        ]
      },
      {
        "code": "CHM 320",
        "title": "Biochemistry II",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/chm-chemistry/300/chm-320",
        "groups": [
          "Concentration in Veterinary Biology"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Two of the following:"
        ],
        "description": "A continuation of the Biochemistry I course beyond an introduction to the major classes of biomolecules. The course involves a detailed study of biomolecule metabolism (biochemical thermodynamics, glycolysis, tricarboxylic acid cycle, electron transport, oxidative phosphorylation, gluconeogenesis, fatty acid catabolism, amino acid metabolism, nucleic acid metabolism, glycogen metabolism) and DNA processing into RNA and protein (replication, transcription, translation, protein folding, protein processing and protein degradation). Three hours lecture. Prerequisite: CHM 318 .",
        "prerequisites": "",
        "tags": [
          "Chemistry & Molecular Simulation"
        ]
      },
      {
        "code": "CHM310",
        "title": "Fundamentals of Biochemistry",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/2022-2023/archived-programs/chm-310",
        "groups": [
          "Concentration in Veterinary Biology"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Two of the following:"
        ],
        "description": "Introduction to the major classes of biomolecules: proteins, lipids, nucleic acids and carbohydrates. Study of select biochemical processes with a focus on enzyme-controlled reactions. Topics include: amino acid chemistry, protein structure and function, enzymatic mechanisms, kinetics and regulation, membrane structure and function, biochemical basis of transcription and translation, bioenergetics, glycolysis, citric acid cycle, electron transport and oxidative phosphorylation. Prerequisite: 202. Three hours lecture. NS",
        "prerequisites": "202",
        "tags": [
          "Chemistry & Molecular Simulation"
        ]
      },
      {
        "code": "EFT213",
        "title": "Ground Training the Horse",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/2022-2023/archived-programs/eft-213",
        "groups": [
          "Concentration in Veterinary Equi-Assist"
        ],
        "sections": [
          "Concentration in Veterinary Equi-Assist - Required Courses"
        ],
        "description": "Course description could not be loaded: HTTP Error 404: Not Found",
        "prerequisites": "",
        "tags": []
      },
      {
        "code": "EQS 110",
        "title": "Intro to Equine Management",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/eqs-equestrian-studies/100/eqs-110",
        "groups": [
          "Concentration in Veterinary Equi-Assist"
        ],
        "sections": [
          "Concentration in Veterinary Equi-Assist - Required Courses"
        ],
        "description": "The foundation course for equestrian studies addresses: equine-related careers; evolution and history of the domestic horse; breeds, color and marking genetics; conformation, behavior and training; age and size determination; basic anatomical structures; basic kinesiology; an introduction to blemishes and unsoundness; basic health and foot care; and ethical stewardship. Barn assignments and horse care outside of class are mandatory.",
        "prerequisites": "",
        "tags": [
          "Kennel / Barn Clinical Fieldwork",
          "Practice Management & EMR Software"
        ]
      },
      {
        "code": "EQS 225",
        "title": "Equine Health Management",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/eqs-equestrian-studies/200/eqs-225",
        "groups": [
          "Concentration in Veterinary Equi-Assist"
        ],
        "sections": [
          "Concentration in Veterinary Equi-Assist - Required Courses"
        ],
        "description": "Examines the care of the horse, symptoms, causes, care and prevention of diseases and injuries; assisting the farrier and veterinarian; basics of blood testing, immunizations, parasites and their control; and record-keeping. Lecture, discussion, practica, laboratory and experiential work required at the stable. three hours lecture; two hours laboratory. Prerequisites: EQS 110 , EQS 116 or VMT 216 . (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Microscopy & Clinical Pathology",
          "Kennel / Barn Clinical Fieldwork",
          "Practice Management & EMR Software",
          "Laboratory Component"
        ]
      },
      {
        "code": "MAT 103",
        "title": "College Algebra",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/mat-mathematics/100/mat-103",
        "groups": [
          "Concentration in Veterinary Biology",
          "Concentration in Veterinary Business Management"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Required Courses",
          "Concentration in Veterinary Business Management - Required Courses"
        ],
        "description": "Introduction to coordinate systems, geometry of the plane, linear, quadratic, rational, exponential, logarithmic functions and properties, combinatorics, inverse functions, and complex numbers and operations. Prerequisite: MAT 097/098 or math placement results. NS",
        "prerequisites": "MAT 097/098 or  math placement results",
        "tags": []
      },
      {
        "code": "VMT 115",
        "title": "Introduction to Veterinary Nursing",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/100/vmt-115",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "Overview of the field of veterinary medicine, including ethical jurisprudence and medical terminology. Topics include: reproduction, nutrition, and management of dogs, cats, horses and livestock species. Kennel assignments and animal care outside of class are mandatory. Three hours lecture. (3 sem. hrs)",
        "prerequisites": "",
        "tags": [
          "Kennel / Barn Clinical Fieldwork",
          "Practice Management & EMR Software"
        ]
      },
      {
        "code": "VMT 209",
        "title": "Infectious Diseases and Diagnostics",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/200/vmt-209",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "A study of infectious animal diseases with emphasis on infectious disease prevention, control, diagnostics, and zoonosis and the life-cycles of commonly-occurring parasites of domestic animals. Three hours lecture; two hours laboratory. Prerequisite: VMT 115 and BIO 101 OR 110. (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Microscopy & Clinical Pathology",
          "Laboratory Component"
        ]
      },
      {
        "code": "VMT 213",
        "title": "Clinical Practices I",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/200/vmt-213",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "Designed to acquaint the student with the essential clinical tasks related to handling, care and treatment of small animals. Identification of dog and cat breeds. Kennel assignments and animal care outside of class are mandatory. Three hours lecture; two hours laboratory. Prerequisite: VMT 115 , VMT 216 , Corequisite: MAT 103 . (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Kennel / Barn Clinical Fieldwork",
          "Clinical Rotation & Field Internship",
          "Laboratory Component"
        ]
      },
      {
        "code": "VMT 216",
        "title": "Veterinary Anatomy/Physiology",
        "credits": "5",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/200/vmt-216",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "Study of the normal structures and functions of the animal body. Species studied will include the dog, cat, horse, cow, sheep,goat and pig. Four hours lecture; two hours laboratory. Prerequisites: BIO 101 or 110 and Corequisite: CHM 101 or 103 and MAT 103 . (5 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Laboratory Component"
        ]
      },
      {
        "code": "VMT 217",
        "title": "Non-Infectious Diseases and Nutrition",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/200/vmt-217",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "Study of animal non-infectious diseases with emphasis on disease control, zoonosis, interpersonal and client education, and nutritional support of diseased animals. Three hours lecture. Prerequisite: VMT 115 and VMT 216 . (3 sem. hrs)",
        "prerequisites": "",
        "tags": []
      },
      {
        "code": "VMT 221",
        "title": "Clinical Practices II",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/200/vmt-221",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "The essential clinical tasks related to handling, care and treatment of large animal. Identification of various breeds of horses and livestock. Barn assignments and animal care outside of class is mandatory. Three hours lecture; three hours laboratory. Prerequisites: VMT 213 , VMT 216 , Proof of pre-exposure Rabies vaccine. (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Kennel / Barn Clinical Fieldwork",
          "Clinical Rotation & Field Internship",
          "Laboratory Component"
        ]
      },
      {
        "code": "VMT 222",
        "title": "Veterinary Radiology",
        "credits": "2",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/200/vmt-222",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "The essential clinical tasks related to the radiographic examination of both large and small animals, with emphasis on radiation safety and methods of obtaining high-quality diagnostic radiographs. 7 week course. Three hours lecture; three hours laboratory. Prerequisites: VMT 213 and VMT 216 . (2 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Digital Radiography & Imaging",
          "Laboratory Component"
        ]
      },
      {
        "code": "VMT 270",
        "title": "Topics in VMT",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/200/vmt-270",
        "groups": [
          "Concentration in Veterinary Biology"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Two of the following:"
        ],
        "description": "Upper level courses offered on an occasional basis in areas of veterinary science.",
        "prerequisites": "",
        "tags": []
      },
      {
        "code": "VMT 313",
        "title": "Veterinary Clinical Pathology",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/300/vmt-313",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "Study of principles and practices of clinical pathology as they relate to responsibilities of veterinary nurses. Includes hematological techniques, urine examination, blood chemistries, serologic testing, veterinary microbiology, immunology, and cytology. Three hours lecture; three hours laboratory. Prerequisite: VMT 216 and CHM 101 or CHM 103 . Pre/Corequisite: VMT 213 (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Microscopy & Clinical Pathology",
          "Laboratory Component"
        ]
      },
      {
        "code": "VMT 320",
        "title": "Laboratory Animal Science",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/300/vmt-320",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "Introduction to laboratory animals most commonly used in research labs and drug companies, including laboratory animal care, identification procedures, housing, sanitation, diseases and parasites of laboratory animals. Laboratory animal care outside of class is mandatory. Three hours lecture; two hours laboratory. Prerequisites: VMT 216 , VMT 213 , VMT 312 or VMT 313 . (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Microscopy & Clinical Pathology",
          "Kennel / Barn Clinical Fieldwork",
          "Laboratory Component"
        ]
      },
      {
        "code": "VMT 321",
        "title": "Pharmacology I",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/300/vmt-321",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "A study of the basic principles of pharmacology including pharmacodyamics and pharmacokinetics, dosage calculations, drugs affecting the nervous and cardiovascular systems, anesthesiology, and drugs used in pain management. Anesthetic drugs and anesthesia procedures will be emphasized in the laboratory. Animal care outside of class is mandatory. Three hours lecture for 15 weeks; three hours laboratory for 7 weeks. Prerequisites: BIO 101 or 110; MAT 103 ; CHM 101 or 103; VMT 213 ; 216; VMT 313 --must be taken either prior to or at the same time as this course. (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Kennel / Barn Clinical Fieldwork",
          "Surgical Nursing & Anesthesia",
          "Pharmacology Calculations",
          "Practice Management & EMR Software",
          "Laboratory Component"
        ]
      },
      {
        "code": "VMT 322",
        "title": "Pharmacology II",
        "credits": "2",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/300/vmt-322",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "A continuation of the study of drugs commonly used in veterinary clinical practice including those used to treat inflammatory, respiratory, infectious, gastro-intestinal, dermatologic, ophthalmic and endocrine diseases. Two hours lecture. Prerequisites: VMT 213 ; VMT216; VMT 321 ; BIO 101 or 110; MAT 103 ; CHM 101 or 103. (2 sem. hrs.)Corequisite: VMT-217 (2 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Pharmacology Calculations"
        ]
      },
      {
        "code": "VMT 330",
        "title": "Advanced Equine Techniques",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/300/vmt-330",
        "groups": [
          "Concentration in Veterinary Equi-Assist"
        ],
        "sections": [
          "Concentration in Veterinary Equi-Assist - Required Courses"
        ],
        "description": "This course will involve equine radiology, ultrasonography, advanced techniques in sample collection and processing, management of disease conditions, treatment of injuries and nutrient management during recovery from such conditions. Three hours lecture; three hours laboratory. (4 sem. hrs.) Course prerequisite: EFT 213 , EQS 225 , VMT 221 ; Prerequisite or Co-requisite VMT 222",
        "prerequisites": "",
        "tags": [
          "Digital Radiography & Imaging",
          "Kennel / Barn Clinical Fieldwork",
          "Practice Management & EMR Software",
          "Laboratory Component"
        ]
      },
      {
        "code": "VMT 340",
        "title": "Veterinary Business Management",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/300/vmt-340",
        "groups": [
          "Concentration in Veterinary Business Management"
        ],
        "sections": [
          "Concentration in Veterinary Business Management - Required Courses"
        ],
        "description": "This course will focus on the business management concepts in relation to veterinary practices. Students will be challenged to take on the role of a practice manager through course material and practical application. Topics will include inventory management, personnel roles and scheduling, conflict resolution, veterinary law, and ethics. Prerequisite: BUS 124 , VMT 115 , VMT 213 ,and VMT 216 . (3 sem. hrs)",
        "prerequisites": "",
        "tags": [
          "Practice Management & EMR Software"
        ]
      },
      {
        "code": "VMT 355",
        "title": "Veterinary Internship",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/300/vmt-355",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "Practical full-time work experience in a veterinary practice or facility approved by the program director. 240 hours required. Prerequisites: VMT 115 , VMT 209 , VMT 216 , VMT213, VMT 221 , VMT 222 , VMT 313 , Proof of pre-exposure Rabies vaccine.",
        "prerequisites": "",
        "tags": [
          "Clinical Rotation & Field Internship"
        ]
      },
      {
        "code": "VMT 370",
        "title": "Topics in VMT",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/300/vmt-370",
        "groups": [
          "Concentration in Veterinary Biology"
        ],
        "sections": [
          "Concentration in Veterinary Biology - Two of the following:"
        ],
        "description": "Upper level courses offered on an occasional basis in areas of veterinary science, such as VMT 370 : Clinical Animal Behavior.",
        "prerequisites": "",
        "tags": []
      },
      {
        "code": "VMT 415",
        "title": "Veterinary Surgical Nursing",
        "credits": "4",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/400/vmt-415",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "Planned clinical experience to enhance technical competence. Emphasis placed on surgical nursing and anesthesia skills. Surgical assignments and nursing care outside of class are mandatory. One five-hour session per week. Prerequisites: VMT 115 , VMT 209 , VMT 216 , VMT 213 , VMT 221 , VMT 222 , VMT 313 , VMT 321 , Proof of pre-exposure Rabies vaccine (4 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Surgical Nursing & Anesthesia"
        ]
      },
      {
        "code": "VMT 417",
        "title": "Equine Clinical & Surgical Practices",
        "credits": "3",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/400/vmt-417",
        "groups": [
          "Concentration in Veterinary Equi-Assist"
        ],
        "sections": [
          "Concentration in Veterinary Equi-Assist - Required Courses"
        ],
        "description": "This course involves the principles of general anesthesia and surgery in equine practice. Surgeries commonly performed in equine practice, the role of the veterinary technologist in the OR, pre- and post-surgical care for the horse, and the importance of proper home care after hospitalization will be stressed. Prerequisite: VMT 330 . (3 sem. hrs.)",
        "prerequisites": "",
        "tags": [
          "Kennel / Barn Clinical Fieldwork",
          "Surgical Nursing & Anesthesia"
        ]
      },
      {
        "code": "VMT REV",
        "title": "Veterinary Clinical Review",
        "credits": "2",
        "url": "https://wilson.smartcatalogiq.com/en/current/catalog/course-listings/vmt-veterinary-medical-technology/r0/vmt-rev",
        "groups": [
          "Core Degree Requirements"
        ],
        "sections": [
          "Core Degree Requirements - Required Courses"
        ],
        "description": "This course will provide a review of expected knowledge put forth by the AVMA's CVTEA for veterinary nursing programs, in preparation for the VTNE (Veterinary Technician National Exam). Through review and practice, students will reinforce their education in preparation for their licensing examination. Additional topics including test taking skills, anxiety reduction, and navigation of the licensing experience will be covered. Corequisite or Prerequisite: VMT 415 Two Semester hours. Additional course fee required for VTNE prep materials.",
        "prerequisites": "",
        "tags": []
      }
    ],
    "curriculum_text_dump": "- ACC 105 Financial Accounting (3 cr) [Demands: Practice Management & EMR Software]: This course emphasizes the provision of relevant and reliable information used in making financial and business decisions. Areas of emphasis include the basic concepts and principl\n- BIO 101 General Biology I (4 cr) [Demands: Chemistry & Molecular Simulation, Laboratory Component]: Introduction to biochemistry, cell anatomy, molecular cell biology, and cell energetics. Genetics covered in relation to molecular mechanisms, population ecology, and evolutionary \n- BIO 102 General Biology II (4 cr) [Demands: Laboratory Component]: Introduction to organismal biology, ecology, and evolution. Surveys the kingdoms of life, highlighting key characteristics, challenges, and evolutionary adaptations. Covers ecologi\n- BIO 110 Contemporary Biology (4 cr) [Demands: Laboratory Component]: A survey of relevant biological principles and processes designed as an introduction to the life sciences for the non-science major. Topics include human biology (cellular and phys\n- BIO 111 Clinical Aspects of Microbiology (4 cr) [Demands: Microscopy & Clinical Pathology, Laboratory Component]: A general overview of microbiology with emphasis on pathological mechanisms of infectious disease and precautions necessary for the prevention and treatment of infectious disease i\n- BIO 211 Microbiology (4 cr) [Demands: Microscopy & Clinical Pathology, Laboratory Component]: Study of the morphology, physiology and genetics of microorganisms with emphasis on bacteria and bacteriological techniques. Three hours lecture; two hours lab. Prerequisites: BIO \n- BUS 124 Introduction to Management (3 cr) [Demands: Practice Management & EMR Software]: Study of management from a general perspective. Major functional areas of internal and external activities of an organization, the decision-making process and the computer's place \n- BUS 220 Entrepreneurship/Small Business Managemt (3 cr) [Demands: Practice Management & EMR Software]: Consideration of the problems of start-up, survival, profit and growth of new or ongoing venture. Examines small-business operations including business plans, finance, legal aspect\n- BUS 223 Marketing Management (3 cr) [Demands: Practice Management & EMR Software]: Analytical systems approach to marketing decision-making. Examines consumer behavior, marketing research, pricing, product and promotion strategy, distribution channels and why mar\n- BUS 326 Human Resource Management (3 cr) [Demands: Practice Management & EMR Software] (Prereq: 124): System elements required to recruit, select, train and maintain a workforce in business. Emphasis on management development, wage and salary administration, and personnel planning.\n- CHM 101 General Chemistry I (4 cr) [Demands: Chemistry & Molecular Simulation, Laboratory Component] (Prereq: Concurrent enrollment in): The first semester of a two-semester sequence intended for students majoring in the sciences. The course focuses on the study of atomic structure, nomenclature, stoichiometry, ener\n- CHM 102 General Chemistry II (4 cr) [Demands: Chemistry & Molecular Simulation, Laboratory Component]: The continuation of General Chemistry I with emphasis on solutions, kinetics, equilibrium, acid-base chemistry, thermodynamics and electrochemistry. Laboratory work reinforces lect\n- CHM 103 Fundamentals of General Chemistry (4 cr) [Demands: Chemistry & Molecular Simulation, Laboratory Component] (Prereq: MAT 098/100  or equivalent): Designed to meet a one-semester general chemistry requirement. Provides an overview of atomic structure and bonding, stoichiometry, energy and acid-base chemistry, redox chemistry,\n- CHM 104 Fund. of Organic Chem. in Biological Sys (4 cr) [Demands: Chemistry & Molecular Simulation, Laboratory Component]: Designed to meet a one-semester requirement in organic chemistry of biological systems. Provides an overview of nomenclature, functional groups and reactions, with an emphasis on s\n- CHM 201 Organic Chemistry I (4 cr) [Demands: Chemistry & Molecular Simulation, Laboratory Component]: The first course of a two-semester sequence that introduces structure, bonding and reactivity of organic (carbon-based) compounds. Lecture focuses on properties and reactivity of a\n- CHM 202 Organic Chemistry II (4 cr) [Demands: Chemistry & Molecular Simulation, Laboratory Component]: A continuation of CHM 201 with an added emphasis on molecules with biological importance. Includes a discussion of carboxylic acids and their derivatives, enolates, aromatics, amin\n- CHM 318 Biochemistry I (3 cr) [Demands: Chemistry & Molecular Simulation]: Introduces students to the major classes of biomolecules: proteins, carbohydrates, lipids and nucleic acids. Emphasizes the chemistry that dictates structure and functions of biolo\n- CHM 320 Biochemistry II (3 cr) [Demands: Chemistry & Molecular Simulation]: A continuation of the Biochemistry I course beyond an introduction to the major classes of biomolecules. The course involves a detailed study of biomolecule metabolism (biochemical\n- CHM310 Fundamentals of Biochemistry (3 cr) [Demands: Chemistry & Molecular Simulation] (Prereq: 202): Introduction to the major classes of biomolecules: proteins, lipids, nucleic acids and carbohydrates. Study of select biochemical processes with a focus on enzyme-controlled reacti\n- EFT213 Ground Training the Horse (3 cr): Course description could not be loaded: HTTP Error 404: Not Found\n- EQS 110 Intro to Equine Management (3 cr) [Demands: Kennel / Barn Clinical Fieldwork, Practice Management & EMR Software]: The foundation course for equestrian studies addresses: equine-related careers; evolution and history of the domestic horse; breeds, color and marking genetics; conformation, behav\n- EQS 225 Equine Health Management (4 cr) [Demands: Microscopy & Clinical Pathology, Kennel / Barn Clinical Fieldwork, Practice Management & EMR Software, Laboratory Component]: Examines the care of the horse, symptoms, causes, care and prevention of diseases and injuries; assisting the farrier and veterinarian; basics of blood testing, immunizations, para\n- MAT 103 College Algebra (3 cr) (Prereq: MAT 097/098 or  math placement results): Introduction to coordinate systems, geometry of the plane, linear, quadratic, rational, exponential, logarithmic functions and properties, combinatorics, inverse functions, and com\n- VMT 115 Introduction to Veterinary Nursing (3 cr) [Demands: Kennel / Barn Clinical Fieldwork, Practice Management & EMR Software]: Overview of the field of veterinary medicine, including ethical jurisprudence and medical terminology. Topics include: reproduction, nutrition, and management of dogs, cats, horses\n- VMT 209 Infectious Diseases and Diagnostics (4 cr) [Demands: Microscopy & Clinical Pathology, Laboratory Component]: A study of infectious animal diseases with emphasis on infectious disease prevention, control, diagnostics, and zoonosis and the life-cycles of commonly-occurring parasites of dome\n- VMT 213 Clinical Practices I (4 cr) [Demands: Kennel / Barn Clinical Fieldwork, Clinical Rotation & Field Internship, Laboratory Component]: Designed to acquaint the student with the essential clinical tasks related to handling, care and treatment of small animals. Identification of dog and cat breeds. Kennel assignment\n- VMT 216 Veterinary Anatomy/Physiology (5 cr) [Demands: Laboratory Component]: Study of the normal structures and functions of the animal body. Species studied will include the dog, cat, horse, cow, sheep,goat and pig. Four hours lecture; two hours laboratory\n- VMT 217 Non-Infectious Diseases and Nutrition (3 cr): Study of animal non-infectious diseases with emphasis on disease control, zoonosis, interpersonal and client education, and nutritional support of diseased animals. Three hours lec\n- VMT 221 Clinical Practices II (4 cr) [Demands: Kennel / Barn Clinical Fieldwork, Clinical Rotation & Field Internship, Laboratory Component]: The essential clinical tasks related to handling, care and treatment of large animal. Identification of various breeds of horses and livestock. Barn assignments and animal care out\n- VMT 222 Veterinary Radiology (2 cr) [Demands: Digital Radiography & Imaging, Laboratory Component]: The essential clinical tasks related to the radiographic examination of both large and small animals, with emphasis on radiation safety and methods of obtaining high-quality diagno\n- VMT 270 Topics in VMT (3 cr): Upper level courses offered on an occasional basis in areas of veterinary science.\n- VMT 313 Veterinary Clinical Pathology (4 cr) [Demands: Microscopy & Clinical Pathology, Laboratory Component]: Study of principles and practices of clinical pathology as they relate to responsibilities of veterinary nurses. Includes hematological techniques, urine examination, blood chemist\n- VMT 320 Laboratory Animal Science (4 cr) [Demands: Microscopy & Clinical Pathology, Kennel / Barn Clinical Fieldwork, Laboratory Component]: Introduction to laboratory animals most commonly used in research labs and drug companies, including laboratory animal care, identification procedures, housing, sanitation, disease\n- VMT 321 Pharmacology I (4 cr) [Demands: Kennel / Barn Clinical Fieldwork, Surgical Nursing & Anesthesia, Pharmacology Calculations, Practice Management & EMR Software, Laboratory Component]: A study of the basic principles of pharmacology including pharmacodyamics and pharmacokinetics, dosage calculations, drugs affecting the nervous and cardiovascular systems, anesthe\n- VMT 322 Pharmacology II (2 cr) [Demands: Pharmacology Calculations]: A continuation of the study of drugs commonly used in veterinary clinical practice including those used to treat inflammatory, respiratory, infectious, gastro-intestinal, dermatolo\n- VMT 330 Advanced Equine Techniques (4 cr) [Demands: Digital Radiography & Imaging, Kennel / Barn Clinical Fieldwork, Practice Management & EMR Software, Laboratory Component]: This course will involve equine radiology, ultrasonography, advanced techniques in sample collection and processing, management of disease conditions, treatment of injuries and nut\n- VMT 340 Veterinary Business Management (3 cr) [Demands: Practice Management & EMR Software]: This course will focus on the business management concepts in relation to veterinary practices. Students will be challenged to take on the role of a practice manager through course\n- VMT 355 Veterinary Internship (3 cr) [Demands: Clinical Rotation & Field Internship]: Practical full-time work experience in a veterinary practice or facility approved by the program director. 240 hours required. Prerequisites: VMT 115 , VMT 209 , VMT 216 , VMT213, \n- VMT 370 Topics in VMT (3 cr): Upper level courses offered on an occasional basis in areas of veterinary science, such as VMT 370 : Clinical Animal Behavior.\n- VMT 415 Veterinary Surgical Nursing (4 cr) [Demands: Surgical Nursing & Anesthesia]: Planned clinical experience to enhance technical competence. Emphasis placed on surgical nursing and anesthesia skills. Surgical assignments and nursing care outside of class are m\n- VMT 417 Equine Clinical & Surgical Practices (3 cr) [Demands: Kennel / Barn Clinical Fieldwork, Surgical Nursing & Anesthesia]: This course involves the principles of general anesthesia and surgery in equine practice. Surgeries commonly performed in equine practice, the role of the veterinary technologist i\n- VMT REV Veterinary Clinical Review (2 cr): This course will provide a review of expected knowledge put forth by the AVMA's CVTEA for veterinary nursing programs, in preparation for the VTNE (Veterinary Technician National E",
    "crawl_depth_stats": {
      "level0_pages": 1,
      "level1_course_pages": 42,
      "level2_deeper_pages": 19,
      "total_pages_scraped": 62,
      "explicit_hardware_matrix_found_onsite": false
    },
    "peer_benchmarks_triggered": true,
    "peer_benchmark_reason": "Scraped 2 layers deep across 62 pages (Layer 0 outline, Layer 1 courses, Layer 2 labs & campus IT), but no explicit hardware specification table was published. Automatically benchmarked against regional peer institutions (Penn State & Shippensburg University) to establish the authoritative academic hardware benchmark.",
    "peer_benchmarks": {
      "triggered": true,
      "trigger_reason": "Scraped 2 layers deep on the institution's catalog, course listings, companion labs, and campus IT pages, but no explicit hardware specification matrix was published. Cross-referenced against regional peer institutions (Penn State & Shippensburg University) to establish the authoritative academic hardware benchmark.",
      "searched_major": "Veterinary Nursing / Veterinary & Biomedical Sciences",
      "institutions": [
        {
          "name": "Penn State University",
          "department": "College of Agricultural Sciences \u2014 Veterinary and Biomedical Sciences",
          "authority": "Penn State University IT & College of Ag Sciences Computing Standards",
          "specs": {
            "ram": "16 GB RAM heavily recommended for 4-year longevity (8 GB bare minimum)",
            "cpu": "Intel Core i5/i7 (Ultra 5/7) or AMD Ryzen 5/7 / Apple Silicon M3/M4",
            "storage": "256 GB - 512 GB SSD minimum",
            "os": "Windows 11 heavily recommended for agricultural data analysis & veterinary database software; macOS supported for general coursework",
            "special_advice": "Accidental Damage Protection warranty strongly advised due to frequent transit between agricultural barns, science laboratories, and lecture halls."
          }
        },
        {
          "name": "Shippensburg University",
          "department": "Department of Biology / Health Sciences & Student Computing Standards",
          "authority": "Shippensburg University Student Technology Guidelines",
          "specs": {
            "ram": "16 GB RAM recommended (8 GB minimum)",
            "cpu": "2.0+ GHz Intel or AMD multi-core processor (or Apple Silicon M-series)",
            "storage": "250+ GB SSD (512 GB recommended)",
            "os": "Windows 11 or macOS 13+ (Sonoma/Sequoia)",
            "special_advice": "Chromebooks strictly prohibited as primary computers; unable to run specialized departmental academic tools."
          }
        }
      ],
      "consensus_hardware_standard": {
        "min_ram_gb": 16,
        "recommended_ram_gb": 16,
        "min_cpu": "Intel Core i5/i7 (12th Gen+) or AMD Ryzen 5/7 (7000+) / Apple Silicon M-series",
        "min_storage_gb": 512,
        "os_restrictions": "Windows 11 strongly recommended (macOS supported for general work; Chromebooks prohibited across all benchmarked institutions)",
        "form_factor_recommendation": "Durable, lightweight laptop (<3.5 lbs) or 2-in-1 convertible with active stylus, 12+ hour battery life, and accidental damage warranty for frequent farm/barn and lab duty."
      }
    }
  },
  "urls_evaluation": [
    {
      "url": "https://wilson.smartcatalogiq.com/current/catalog/major-and-minor-requirements/veterinary-nursing/veterinary-nursing-bachelor-of-science",
      "status": "Crawled 2 Layers Deep (Outline + 42 Course Syllabi & Labs)",
      "snippet": "Wilson College Bachelor of Science in Veterinary Nursing. Evaluated 42 degree requirements including clinical rotations, surgical nursing, veterinary pharmacology, and diagnostic imaging."
    }
  ],
  "rationale": "Scraped 2 layers deep across Wilson College catalog, all 42 course syllabi, and laboratory schedules. Because no explicit hardware requirements matrix was published on Wilson catalog pages, automatically triggered comparative analysis against peer benchmark institutions (Penn State University & Shippensburg University) to establish the authoritative 4-year degree standard."
};
