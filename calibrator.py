"""
calibrator.py - Logic-driven Calibration & Simulation Engine for Computer Matchmaker.

Runs 10 realistic, diverse user personas through the requirement-parsing,
metric-scoring, anti-overkill, release-year-decay, and peripheral-pairing algorithms.
"""

import json
import math
from dataclasses import dataclass, field
from typing import List, Dict, Any, Optional

# ==============================================================================
# 1. CATALOG DATA (Representative Computers & Peripherals across tiers & years)
# ==============================================================================

@dataclass
class Computer:
    id: str
    name: str
    brand: str
    os: str
    form_factor: str  # "Laptop", "Desktop", "Mini PC", "2-in-1"
    release_year: int
    price: float
    cpu_model: str
    cpu_tier: int       # 1 (Basic/Celeron/i3) to 5 (i9/Ryzen 9/M3/M4 Max)
    cpu_cores: int
    gpu_model: str
    gpu_tier: int       # 0 (basic iGPU), 1 (Iris/Radeon 780M), 2 (RTX 4050/3060), 3 (RTX 4060/4070/M3 Pro), 4 (RTX 4080/4090/M3 Max)
    ram_gb: int
    storage_gb: int
    battery_hours: float
    weight_lbs: float
    screen_size: float
    screen_nits: int
    screen_gamut: str   # "65% sRGB", "100% sRGB", "100% DCI-P3"
    screen_refresh_hz: int
    touchscreen: bool
    stylus_support: bool
    warranty_years: int
    purchase_url: str
    target_summary: str
    user_rating: float = 4.5
    review_count: int = 1200
    ranking_badge: str = "Top Rated"
    os_edition: str = "Windows 11 Home (64-bit)"
    official_url: str = ""
    retailer: str = "Major Retailer"
    msrp: float = 0.0
    price_notes: str = ""
    cpu_details: str = ""
    cpu_benchmark_score: str = ""
    cpu_independent_review: str = ""
    gpu_details: str = ""
    ram_details: str = ""
    ports_io: str = ""
    webcam_biometrics: str = ""
    thermals_acoustics: str = ""

COMPUTERS_CATALOG: List[Computer] = [
    # --- Ultra Budget / Basic Home & School ---
    Computer(
        id="c-chromebook-plus",
        name="Lenovo IdeaPad Slim 3i Chromebook Plus 14",
        brand="Lenovo",
        os="ChromeOS",
        form_factor="Laptop",
        release_year=2024,
        price=379.0,
        cpu_model="Intel Core i3-N305 (8C)",
        cpu_tier=1,
        cpu_cores=8,
        gpu_model="Intel UHD Graphics",
        gpu_tier=0,
        ram_gb=8,
        storage_gb=128,
        battery_hours=11.0,
        weight_lbs=3.3,
        screen_size=14.0,
        screen_nits=300,
        screen_gamut="65% sRGB",
        screen_refresh_hz=60,
        touchscreen=False,
        stylus_support=False,
        warranty_years=1,
        purchase_url="https://www.bestbuy.com/site/lenovo-ideapad-slim-3i-chromebook-plus-14-fhd-laptop-intel-core-i3-n305-8gb-memory-128gb-emmc-abyss-blue/6550736.p",
        official_url="https://www.lenovo.com/us/en/p/laptops/lenovo/chromebook-series/lenovo-ideapad-slim-3i-chromebook-gen-8-(14-inch-intel)/len101i0074",
        retailer="Best Buy",
        msrp=499.0,
        price_notes="Best Buy street deal price ($379 vs $499 standard retail).",
        target_summary="Affordable, snappy ChromeOS laptop for homework, email, and YouTube.",
        user_rating=4.5,
        review_count=2150,
        ranking_badge="#1 Best Seller in Chromebooks",
        os_edition="ChromeOS 64-bit (Google Auto-Update verified through June 2034)",
        cpu_details="Intel Core i3-N305 (8 Efficiency Cores / 8 Threads, up to 3.80 GHz Boost, 6MB Smart Cache, 15W TDP)",
        cpu_benchmark_score="PassMark: 10,150 | Geekbench 6: 4,950 Multi / 1,380 Single",
        cpu_independent_review="Grade: B- (High-Efficiency Everyday) • 8 Gracemont efficiency cores at 15W TDP. Snappy for 20+ browser tabs, Zoom, and 4K media; lacks hyperthreading for sustained 3D rendering.",
        gpu_details="Intel UHD Graphics (32 Execution Units @ 1.25 GHz, Shared System Memory)",
        ram_details="8GB LPDDR5-4800 MT/s (Soldered Onboard, Single-Channel, Non-Upgradable)",
        ports_io="2x USB-C 3.2 Gen 1 (Power Delivery & DP 1.4), 1x USB-A 3.2 Gen 1, 1x MicroSD Slot, 3.5mm Headphone Jack",
        webcam_biometrics="1080p FHD Webcam with Physical Privacy Shutter; Dual Array Mics; No Fingerprint/IR",
        thermals_acoustics="Single Active Heatpipe Blower Fan, Whisper-Quiet (<28 dBA at full load)"
    ),
    Computer(
        id="c-acer-aspire-3",
        name="Acer Aspire 3 15.6",
        brand="Acer",
        os="Windows",
        form_factor="Laptop",
        release_year=2024,
        price=499.0,
        cpu_model="AMD Ryzen 5 7520U (4C/8T)",
        cpu_tier=2,
        cpu_cores=4,
        gpu_model="AMD Radeon 610M",
        gpu_tier=0,
        ram_gb=16,
        storage_gb=512,
        battery_hours=9.0,
        weight_lbs=3.9,
        screen_size=15.6,
        screen_nits=250,
        screen_gamut="60% sRGB",
        screen_refresh_hz=60,
        touchscreen=False,
        stylus_support=False,
        warranty_years=1,
        purchase_url="https://www.amazon.com/dp/B0BS4BP8FB",
        official_url="https://www.acer.com/us-en/laptops/aspire/aspire-3-amd",
        retailer="Amazon",
        msrp=549.99,
        price_notes="Amazon street price for Ryzen 5 / 16GB RAM / 512GB SSD configuration.",
        target_summary="Dependable, high-value everyday Windows laptop with 16GB RAM for multitasking.",
        user_rating=4.4,
        review_count=3890,
        ranking_badge="#1 Budget Windows Laptop Under $500",
        os_edition="Windows 11 Home (64-bit Edition, S-Mode switchable to full standard mode)",
        cpu_details="AMD Ryzen 5 7520U (4 Cores / 8 Threads, 2.80 GHz Base / 4.30 GHz Boost, 4MB L3 Cache, 15W TDP, Zen 2)",
        cpu_benchmark_score="PassMark: 9,300 | Geekbench 6: 4,600 Multi / 1,410 Single",
        cpu_independent_review="Grade: B- (Reliable Budget Multitasker) • 4 cores / 8 threads Zen 2 at 15W. Highly stable thermal profile for everyday multitasking, office suites, and student research.",
        gpu_details="AMD Radeon 610M (2 RDNA2 CUs @ 1.9 GHz, Hardware AV1 / VP9 decode, Shared VRAM)",
        ram_details="16GB LPDDR5-5500 MT/s (Dual-Channel Soldered, Low-Power High-Bandwidth, Non-Upgradable)",
        ports_io="1x USB-C 3.2 Gen 2, 2x USB-A 3.2 Gen 1, 1x HDMI 2.1 (Up to 4K @ 60Hz), 3.5mm Headphone Jack, Barrel Power",
        webcam_biometrics="720p HD Webcam with Acer PurifiedVoice Temporal Noise Reduction; No Windows Hello",
        thermals_acoustics="Single Blower Fan with Rear Exhaust, Balanced Acoustic Profile (~32 dBA under load)"
    ),

    # --- Portable Everyday / General College & Office ---
    Computer(
        id="c-macbook-air-m2",
        name="Apple MacBook Air 13-inch (M2)",
        brand="Apple",
        os="macOS",
        form_factor="Laptop",
        release_year=2022,  # Older model example to test age weighting!
        price=899.0,
        cpu_model="Apple M2 (8-Core CPU)",
        cpu_tier=3,
        cpu_cores=8,
        gpu_model="Apple 8-Core GPU",
        gpu_tier=1,
        ram_gb=8,
        storage_gb=256,
        battery_hours=16.0,
        weight_lbs=2.7,
        screen_size=13.6,
        screen_nits=500,
        screen_gamut="100% DCI-P3",
        screen_refresh_hz=60,
        touchscreen=False,
        stylus_support=False,
        warranty_years=1,
        purchase_url="https://www.amazon.com/dp/B0B3C57XLR",
        official_url="https://www.apple.com/shop/buy-mac/macbook-air/13-inch-m2",
        retailer="Amazon / Best Buy Deals",
        msrp=999.0,
        price_notes="Street sale price $899 at Amazon & Best Buy ($100 off Apple Store $999 MSRP).",
        target_summary="Ultra-thin aluminum chassis, legendary 16hr battery, and crisp 500-nit Retina display.",
        user_rating=4.8,
        review_count=8740,
        ranking_badge="Best-Selling Ultrabook 2023-2024",
        os_edition="macOS Sequoia 15 (Factory Pre-installed with native Rosetta 2 translation)",
        cpu_details="Apple M2 (8 Cores: 4 Avalanche Performance @ 3.49 GHz + 4 Blizzard Efficiency @ 2.42 GHz, 16-Core Neural Engine)",
        cpu_benchmark_score="Geekbench 6: 9,850 Multi / 2,620 Single | PassMark: 15,400",
        cpu_independent_review="Grade: A- (Fanless Efficiency Leader) • Industry-leading single-core burst responsiveness and thermals. Operates 100% silently with zero throttling on daily productivity.",
        gpu_details="Apple 8-Core Integrated GPU (1.4 GHz, 100 GB/s Unified Memory Bandwidth, ProRes & ProRes RAW Engine)",
        ram_details="8GB Unified Memory (LPDDR5-6400, Shared CPU/GPU Unified Pool, 100GB/s Bandwidth, Soldered)",
        ports_io="2x Thunderbolt 3 / USB4 (Up to 40Gbps), 1x MagSafe 3 Charging Port, 1x 3.5mm Jack with High-Impedance Headphone Support",
        webcam_biometrics="1080p FaceTime HD Camera with Advanced Image Signal Processor; Touch ID Fingerprint Sensor on Keyboard",
        thermals_acoustics="Fanless Passive Cooling (Zero Acoustic Noise, 0.0 dBA completely silent under all workloads)"
    ),
    Computer(
        id="c-macbook-air-m3-16",
        name="Apple MacBook Air 13-inch (M3, 16GB)",
        brand="Apple",
        os="macOS",
        form_factor="Laptop",
        release_year=2024,
        price=1099.0,
        cpu_model="Apple M3 (8-Core CPU)",
        cpu_tier=3,
        cpu_cores=8,
        gpu_model="Apple 10-Core GPU",
        gpu_tier=1,
        ram_gb=16,
        storage_gb=512,
        battery_hours=17.5,
        weight_lbs=2.7,
        screen_size=13.6,
        screen_nits=500,
        screen_gamut="100% DCI-P3",
        screen_refresh_hz=60,
        touchscreen=False,
        stylus_support=False,
        warranty_years=1,
        purchase_url="https://www.amazon.com/dp/B0CX23V2ZP",
        official_url="https://www.apple.com/shop/buy-mac/macbook-air/13-inch-m3",
        retailer="Apple Store / Amazon",
        msrp=1099.0,
        price_notes="Official Apple MSRP $1,099 with 16GB unified memory standard.",
        target_summary="The gold standard for mobile students & professionals: 16GB RAM, dual external monitor support.",
        user_rating=4.9,
        review_count=4120,
        ranking_badge="#1 Overall Laptop - Wirecutter & PCMag",
        os_edition="macOS Sequoia 15 (Factory Pre-installed, Supports Dual External Displays in clamshell)",
        cpu_details="Apple M3 (8 Cores: 4 Performance @ 4.05 GHz + 4 Efficiency @ 2.75 GHz, 16-Core 3nm Neural Engine 18 TOPS)",
        cpu_benchmark_score="Geekbench 6: 11,850 Multi / 3,080 Single | PassMark: 18,900",
        cpu_independent_review="Grade: A (Gold Standard Mobile SoC) • 3nm process with hardware ray-tracing & AV1 engine. Exceptional battery-to-performance curve; single-core speed outpaces desktop chips.",
        gpu_details="Apple 10-Core Integrated GPU (Dynamic Caching, Hardware-Accelerated Ray Tracing & Mesh Shading, 100 GB/s)",
        ram_details="16GB Unified Memory (LPDDR5-6400 Unified Memory Architecture, Soldered, High-Efficiency Multi-Tasking)",
        ports_io="2x Thunderbolt / USB4 (40Gbps), 1x MagSafe 3 Fast-Charging (0 to 50% in 30 min), 3.5mm Studio Jack",
        webcam_biometrics="1080p FaceTime HD Camera with Computational Video; Touch ID Integrated Power Key",
        thermals_acoustics="Fanless Passive Thermal Architecture (100% Zero Noise, 0.0 dBA Silent Operation)"
    ),
    Computer(
        id="c-asus-zenbook-14-oled",
        name="ASUS Zenbook 14 OLED (2025)",
        brand="ASUS",
        os="Windows",
        form_factor="Laptop",
        release_year=2025,
        price=1049.0,
        cpu_model="Intel Core Ultra 7 155H (16C/22T)",
        cpu_tier=3,
        cpu_cores=16,
        gpu_model="Intel Arc Graphics (8-Xe)",
        gpu_tier=1,
        ram_gb=16,
        storage_gb=1000,
        battery_hours=14.0,
        weight_lbs=2.8,
        screen_size=14.0,
        screen_nits=500,
        screen_gamut="100% DCI-P3",
        screen_refresh_hz=120,
        touchscreen=False,
        stylus_support=False,
        warranty_years=1,
        purchase_url="https://www.bestbuy.com/site/asus-zenbook-14-oled-14-wuxga-touch-laptop-intel-core-ultra-7-16gb-memory-512gb-ssd-jasper-gray/6568761.p",
        official_url="https://www.asus.com/us/laptops/for-home/zenbook/asus-zenbook-14-ux3405/",
        retailer="Best Buy",
        msrp=1299.99,
        price_notes="Best Buy street price for Core Ultra 7 / 16GB RAM / 1TB SSD. Note: ASUS direct store lists top-spec 32GB models starting at $1,799.",
        target_summary="Gorgeous 120Hz 3K OLED screen, lightweight, quiet thermals, and all-day endurance.",
        user_rating=4.7,
        review_count=1480,
        ranking_badge="Best 14-inch OLED Laptop 2025",
        os_edition="Windows 11 Home (64-bit Edition, Intel Evo Edition Certified)",
        cpu_details="Intel Core Ultra 7 155H (16 Cores: 6P @ 4.8 GHz + 8E @ 3.8 GHz + 2 Low-Power E-cores, Intel AI Boost NPU)",
        cpu_benchmark_score="PassMark: 25,200 | Geekbench 6: 12,450 Multi / 2,380 Single | Cinebench R23: 15,200",
        cpu_independent_review="Grade: A (Modern AI & Efficiency Architecture) • Meteor Lake hybrid design with Intel AI Boost NPU. Strong 22-thread multi-tasking with low-power E-cores keeping idle drain minimal.",
        gpu_details="Intel Arc Graphics (8 Xe-cores @ 2.25 GHz, Ray Tracing, Intel XeSS AI Super-Sampling)",
        ram_details="16GB LPDDR5X-7467 MT/s (Ultra High-Speed Low-Latency Soldered, Dual-Channel)",
        ports_io="2x Thunderbolt 4 (DisplayPort / Power Delivery 40Gbps), 1x USB-A 3.2 Gen 1, 1x HDMI 2.1 TMDS, 3.5mm Combo Jack",
        webcam_biometrics="1080p FHD IR Camera with Windows Hello Facial Recognition & Ambient Light Sensor; Physical Camera Privacy Shutter",
        thermals_acoustics="ASUS IceBlade Dual Heatpipe Thermal System with Whisper Mode (<22 dBA in Whisper, 36 dBA in Performance)"
    ),

    # --- 2-in-1 / Tablet Convertibles with Stylus ---
    Computer(
        id="c-hp-envy-x360",
        name="HP Envy x360 2-in-1 14 (2025)",
        brand="HP",
        os="Windows",
        form_factor="2-in-1",
        release_year=2025,
        price=849.0,
        cpu_model="AMD Ryzen 7 8840HS (8C/16T)",
        cpu_tier=3,
        cpu_cores=8,
        gpu_model="AMD Radeon 780M",
        gpu_tier=1,
        ram_gb=16,
        storage_gb=512,
        battery_hours=13.0,
        weight_lbs=3.08,
        screen_size=14.0,
        screen_nits=400,
        screen_gamut="100% sRGB",
        screen_refresh_hz=60,
        touchscreen=True,
        stylus_support=True,
        warranty_years=1,
        purchase_url="https://www.bestbuy.com/site/hp-envy-2-in-1-14-wide-ultra-xga-touch-screen-laptop-amd-ryzen-7-8840hs-16gb-memory-512gb-ssd-glacier-silver/6571087.p",
        official_url="https://www.hp.com/us-en/shop/pdp/hp-envy-x360-2-in-1-laptop-14-fc0047nr",
        retailer="Best Buy",
        msrp=1049.99,
        price_notes="Best Buy retail price $849.99 ($200 below HP's official $1,049.99 list price).",
        target_summary="Versatile 360-degree hinge for handwriting notes, drawing, and tent-mode media.",
        user_rating=4.6,
        review_count=2640,
        ranking_badge="Top Rated 2-in-1 Touchscreen Value",
        os_edition="Windows 11 Home (64-bit Edition, Windows Ink Certified)",
        cpu_details="AMD Ryzen 7 8840HS (8 Cores / 16 Threads, 3.3 GHz Base / 5.1 GHz Max Boost, 16MB L3 Cache, AMD Ryzen AI NPU 38 TOPS)",
        cpu_benchmark_score="PassMark: 28,800 | Geekbench 6: 12,100 Multi / 2,490 Single | Cinebench R23: 16,400",
        cpu_independent_review="Grade: A (Zen 4 Powerhouse with 38 TOPS AI) • 4nm architecture with dedicated XDNA NPU. Outperforms Core Ultra 7 in sustained multi-threaded rendering while generating lower chassis heat.",
        gpu_details="AMD Radeon 780M (12 RDNA3 CUs @ 2.7 GHz, Full DirectX 12 Ultimate & Vulkan 1.3)",
        ram_details="16GB LPDDR5-6400 MT/s (High-Efficiency Dual-Channel Soldered)",
        ports_io="1x Thunderbolt 4 / USB4 40Gbps (PD, DP 2.1), 1x USB-C 10Gbps, 2x USB-A 10Gbps (HP Sleep and Charge), 1x HDMI 2.1, 3.5mm",
        webcam_biometrics="5MP Wide-Vision IR Camera with Windows Hello Face Unlock, Temporal Noise Reduction, and Manual Privacy Shutter Switch",
        thermals_acoustics="Dual Copper Heatpipes with Fluid Dynamic Bearing Fan, Intelligent Thermal Mode Switcher (~31 dBA quiet office)"
    ),
    Computer(
        id="c-surface-pro-11",
        name="Microsoft Surface Pro 11 (Copilot+ PC)",
        brand="Microsoft",
        os="Windows",
        form_factor="2-in-1",
        release_year=2024,
        price=1199.0,
        cpu_model="Snapdragon X Elite (12C)",
        cpu_tier=3,
        cpu_cores=12,
        gpu_model="Qualcomm Adreno GPU",
        gpu_tier=1,
        ram_gb=16,
        storage_gb=512,
        battery_hours=14.5,
        weight_lbs=1.97,
        screen_size=13.0,
        screen_nits=600,
        screen_gamut="100% DCI-P3",
        screen_refresh_hz=120,
        touchscreen=True,
        stylus_support=True,
        warranty_years=1,
        purchase_url="https://www.bestbuy.com/site/microsoft-surface-pro-copilot-pc-13-oled-touch-screen-snapdragon-x-elite-16gb-memory-512gb-ssd-device-only-platinum/6582827.p",
        official_url="https://www.microsoft.com/en-us/surface/devices/surface-pro-11th-edition",
        retailer="Best Buy / Microsoft Store",
        msrp=1199.0,
        price_notes="Official MSRP $1,199 for Snapdragon X Elite / 16GB RAM / 512GB OLED tablet (keyboard sold separately).",
        target_summary="Featherlight detachable 2-in-1 tablet with vibrant 600-nit OLED and precision pen.",
        user_rating=4.7,
        review_count=1820,
        ranking_badge="Best Detachable Tablet PC - PCWorld",
        os_edition="Windows 11 Home on ARM (64-bit Copilot+ PC Edition with Native Prism Emulation)",
        cpu_details="Qualcomm Snapdragon X Elite X1E-80-100 (12 Oryon Cores up to 3.4 GHz, Dual-Core Boost 4.0 GHz, 45 TOPS Hexagon NPU)",
        cpu_benchmark_score="Geekbench 6: 14,400 Multi / 2,810 Single | Cinebench 2024: 1,020 Multi",
        cpu_independent_review="Grade: A- (Breakthrough ARM Multi-Core Speed) • 12 custom Oryon cores delivering blistering 14,400+ Geekbench multi-core throughput, matched with a 45 TOPS Hexagon NPU and 14hr battery.",
        gpu_details="Qualcomm Adreno GPU (3.8 TFLOPS, DirectX 12 Feature Level 12_1, Triple 4K Display Support)",
        ram_details="16GB LPDDR5X-8448 MT/s (High-Bandwidth 135 GB/s Bus Soldered Memory)",
        ports_io="2x USB4 / USB-C (DisplayPort 1.4a & Fast Charging), 1x Surface Connect Port, 1x Surface Pro Keyboard Magnetic Port",
        webcam_biometrics="Front Quad HD 1440p Studio Camera with Windows Hello Face ID; 10.5MP Ultra HD Rear Autofocus Camera",
        thermals_acoustics="Custom Ultra-Thin Vapor Chamber with Whisper Radial Fan, Sub-25 dBA Acoustic Profile"
    ),

    # --- Business Workhorses / Data / Programming ---
    Computer(
        id="c-thinkpad-t14-gen5",
        name="Lenovo ThinkPad T14 Gen 5",
        brand="Lenovo",
        os="Windows",
        form_factor="Laptop",
        release_year=2024,
        price=1399.0,
        cpu_model="AMD Ryzen 7 PRO 8840U (8C/16T)",
        cpu_tier=4,
        cpu_cores=8,
        gpu_model="AMD Radeon 780M",
        gpu_tier=1,
        ram_gb=32,
        storage_gb=1000,
        battery_hours=13.5,
        weight_lbs=3.0,
        screen_size=14.0,
        screen_nits=400,
        screen_gamut="100% sRGB",
        screen_refresh_hz=60,
        touchscreen=False,
        stylus_support=False,
        warranty_years=3,  # 3-year commercial warranty!
        purchase_url="https://www.bestbuy.com/site/lenovo-thinkpad-t14-gen-5-14-laptop-amd-ryzen-7-pro-8840u-with-32gb-memory-1tb-ssd-black/6594382.p",
        official_url="https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadt/lenovo-thinkpad-t14-gen-5-(14-inch-amd)/len101t0105",
        retailer="Best Buy / Lenovo Deals",
        msrp=2499.0,
        price_notes="Best Buy SKU 6594382 with Ryzen 7 PRO 8840U / 32GB RAM / 1TB SSD. Lenovo.com shows an inflated 'Estimated Value' list price of ~$2,499 before standard e-coupon discounts.",
        target_summary="Unrivaled keyboard tactile feel, dual SODIMM upgradable RAM, 3-year warranty, Linux certified.",
        user_rating=4.8,
        review_count=1230,
        ranking_badge="Most Reliable Business Laptop & Best Keyboard",
        os_edition="Windows 11 Pro (64-bit Edition with BitLocker Full-Disk Encryption, Hyper-V, and Windows Sandbox)",
        cpu_details="AMD Ryzen 7 PRO 8840U (8 Cores / 16 Threads, 3.3 GHz Base / 5.1 GHz Boost, 16MB L3 Cache, Enterprise AMD PRO Security & NPU)",
        cpu_benchmark_score="PassMark: 25,600 | Geekbench 6: 11,400 Multi / 2,420 Single | Cinebench R23: 13,900",
        cpu_independent_review="Grade: A (Enterprise Reliability & Battery Champion) • Low-TDP 15W-28W Zen 4 with AMD PRO enterprise security. Cool, quiet sustained compilation performance with extraordinary all-day battery endurance.",
        gpu_details="AMD Radeon 780M (12 RDNA3 CUs @ 2.7 GHz, Dual DisplayPort 2.1 MST Hub Support)",
        ram_details="32GB DDR5-5600 MT/s (Dual SO-DIMM Slots, User-Upgradable up to 64GB DDR5, Non-Soldered)",
        ports_io="2x USB4 40Gbps (Power Delivery 3.0 & DP 2.1), 2x USB-A 3.2 Gen 1 (1 Always On), 1x HDMI 2.1 (4K@60Hz), 1x RJ-45 Gigabit Ethernet, 3.5mm",
        webcam_biometrics="5MP + IR Discrete Webcam with Windows Hello Face Login & Web Privacy Shutter; Match-on-Chip Fingerprint Reader on Power Button",
        thermals_acoustics="Dual-Intake Owl-Blade Low-Noise Cooling Fan, MIL-STD-810H Certified Chassis (<30 dBA Under Sustained Compiles)"
    ),
    Computer(
        id="c-dell-xps-16",
        name="Dell XPS 16 (2025)",
        brand="Dell",
        os="Windows",
        form_factor="Laptop",
        release_year=2025,
        price=2299.0,
        cpu_model="Intel Core Ultra 9 185H (16C)",
        cpu_tier=5,
        cpu_cores=16,
        gpu_model="NVIDIA GeForce RTX 4070 (8GB)",
        gpu_tier=3,
        ram_gb=32,
        storage_gb=1000,
        battery_hours=9.5,
        weight_lbs=4.7,
        screen_size=16.3,
        screen_nits=500,
        screen_gamut="100% DCI-P3",
        screen_refresh_hz=90,
        touchscreen=True,
        stylus_support=False,
        warranty_years=1,
        purchase_url="https://www.bestbuy.com/site/dell-xps-16-16-3-fhd-laptop-intel-core-ultra-7-155h-16gb-memory-nvidia-geforce-rtx-4060-512gb-ssd-platinum/6574768.p",
        official_url="https://www.dell.com/en-us/shop/dell-laptops/xps-16-laptop/spd/xps-16-9640-laptop",
        retailer="Best Buy / Dell Direct",
        msrp=2499.0,
        price_notes="Best Buy configuration with Core Ultra 7/9 & dedicated RTX 40-series graphics. (Base XPS 16 starts at $1,899 with integrated Arc graphics).",
        target_summary="Premium powerhouse with 4K+ OLED display, glass touchpad, and dedicated RTX acceleration.",
        user_rating=4.6,
        review_count=980,
        ranking_badge="Best Premium Windows Workstation",
        os_edition="Windows 11 Pro (64-bit Edition, Commercial Enterprise Provisioning Ready)",
        cpu_details="Intel Core Ultra 9 185H (16 Cores / 22 Threads, 6P @ 5.1 GHz + 8E @ 3.8 GHz + 2 LPE, 24MB Smart Cache, Intel AI NPU)",
        cpu_benchmark_score="PassMark: 28,400 | Geekbench 6: 13,600 Multi / 2,520 Single | Cinebench R23: 17,100",
        cpu_independent_review="Grade: A (Flagship Creator Mobile Platform) • 5.1 GHz peak clock speed with 24MB Smart Cache. Exceptional Premiere / DaVinci timeline scrubbing and real-time audio multi-tracking.",
        gpu_details="NVIDIA GeForce RTX 4070 Laptop GPU (8GB GDDR6, 60W TGP, Ada Lovelace, DLSS 3.5 Frame Generation & Ray Reconstruction)",
        ram_details="32GB LPDDR5X-7467 MT/s (Dual-Channel Low-Power Memory, Soldered Motherboard Configuration)",
        ports_io="3x Thunderbolt 4 (Type-C with Power Delivery and DisplayPort), 1x Full-Size MicroSD v6.0 Card Reader, 1x 3.5mm Headphone/Mic Combo",
        webcam_biometrics="1080p FHD IR Camera with Windows Hello Face Detection & Presence Sensing; Windows Hello Fingerprint Reader on Seamless Glass Deck",
        thermals_acoustics="Dual Opposite Outlet (DOO) Fans with GORE Thermal Insulation, Vapor Chamber Architecture (~39 dBA under full GPU load)"
    ),

    # --- Creative & High-End Pro / Audio & Video Workstation ---
    Computer(
        id="c-macbook-pro-16-m3pro",
        name="Apple MacBook Pro 16-inch (M3 Pro)",
        brand="Apple",
        os="macOS",
        form_factor="Laptop",
        release_year=2023,
        price=2499.0,
        cpu_model="Apple M3 Pro (12-Core CPU)",
        cpu_tier=4,
        cpu_cores=12,
        gpu_model="Apple 18-Core GPU",
        gpu_tier=3,
        ram_gb=36,
        storage_gb=1000,
        battery_hours=21.0,
        weight_lbs=4.7,
        screen_size=16.2,
        screen_nits=1000,  # 1600 nits peak HDR
        screen_gamut="100% DCI-P3",
        screen_refresh_hz=120,
        touchscreen=False,
        stylus_support=False,
        warranty_years=1,
        purchase_url="https://www.amazon.com/dp/B0CM59GY1Y",
        official_url="https://www.apple.com/shop/buy-mac/macbook-pro/16-inch",
        retailer="Apple Store / Amazon",
        msrp=2499.0,
        price_notes="Official Apple Store MSRP $2,499 for 12-Core CPU / 18-Core GPU / 36GB RAM / 1TB SSD.",
        target_summary="Master of creative pros: 1000-nit Liquid Retina XDR, whisper-silent fans, 21-hour battery.",
        user_rating=4.9,
        review_count=5210,
        ranking_badge="#1 Pro Creator Laptop & Best Display",
        os_edition="macOS Sequoia 15 (Factory Pre-installed, Multi-user FileVault & Secure Enclave)",
        cpu_details="Apple M3 Pro (12 Cores: 6 Performance Cores @ 4.05 GHz + 6 Efficiency Cores @ 2.75 GHz, 150 GB/s Memory Bandwidth, 16-Core NPU)",
        cpu_benchmark_score="Geekbench 6: 15,300 Multi / 3,120 Single | Cinebench R23: 15,800",
        cpu_independent_review="Grade: A+ (Pro Studio Benchmark) • 150 GB/s unified memory bandwidth. Matches plugged-in speed while on battery with virtually zero thermal throttling or fan noise.",
        gpu_details="Apple 18-Core GPU (Dynamic Caching, Hardware-Accelerated Ray Tracing, AV1 Decode Engine, Dual ProRes Encoders)",
        ram_details="36GB Unified Memory (LPDDR5-6400, Unified High-Bandwidth Architecture 150 GB/s, Shared System Pool)",
        ports_io="3x Thunderbolt 4 (40Gbps), 1x HDMI 2.1 (Up to 8K @ 60Hz or 4K @ 240Hz), 1x SDXC Card Slot, 1x MagSafe 3 Port, 1x 3.5mm Studio Jack",
        webcam_biometrics="1080p FaceTime HD Camera with Computational Video & Studio Mics (3-Mic Array with Beamforming); Touch ID Key",
        thermals_acoustics="Dual High-Efficiency Thermal Fans (Whisper-Quiet under heavy 4K video rendering, 0 dBA idle, max 32 dBA)"
    ),
    Computer(
        id="c-mac-studio-m2max",
        name="Apple Mac Studio (M2 Max)",
        brand="Apple",
        os="macOS",
        form_factor="Desktop",
        release_year=2023,
        price=1999.0,
        cpu_model="Apple M2 Max (12-Core CPU)",
        cpu_tier=4,
        cpu_cores=12,
        gpu_model="Apple 30-Core GPU",
        gpu_tier=4,
        ram_gb=32,
        storage_gb=512,
        battery_hours=0.0,
        weight_lbs=5.9,
        screen_size=0.0,
        screen_nits=0,
        screen_gamut="N/A",
        screen_refresh_hz=0,
        touchscreen=False,
        stylus_support=False,
        warranty_years=1,
        purchase_url="https://www.bestbuy.com/site/apple-mac-studio-m2-max-512gb-ssd-silver/6427503.p?skuId=6427503",
        official_url="https://www.apple.com/shop/buy-mac/mac-studio",
        retailer="Best Buy / Apple Store",
        msrp=1999.0,
        price_notes="Official Apple Store MSRP $1,999 for M2 Max 12-Core CPU / 30-Core GPU / 32GB RAM / 512GB SSD.",
        target_summary="Compact desktop studio with 4x Thunderbolt 4 ports, near-zero audio latency, and massive bandwidth.",
        user_rating=4.8,
        review_count=1650,
        ranking_badge="Best Compact Creator Studio Desktop",
        os_edition="macOS Sequoia 15 (Factory Pre-installed, Optimized for Low-Latency Audio DAW & 8K Video Timelines)",
        cpu_details="Apple M2 Max (12 Cores: 8 Performance Cores @ 3.68 GHz + 4 Efficiency Cores @ 2.42 GHz, 400 GB/s Memory Bandwidth)",
        cpu_benchmark_score="Geekbench 6: 14,900 Multi / 2,780 Single | Cinebench R23: 14,800",
        cpu_independent_review="Grade: A+ (Massive Memory Bandwidth Monster) • Colossal 400 GB/s system bus bandwidth. Unmatched for 8K ProRes video streams and ultra-low buffer latency in complex audio DAWs.",
        gpu_details="Apple 30-Core GPU (Hardware Ray Tracing, 4 ProRes Video Acceleration Engines, Quad 6K Display Support)",
        ram_details="32GB Unified Memory (LPDDR5 Unified Architecture with massive 400 GB/s System Bus Bandwidth)",
        ports_io="Rear: 4x Thunderbolt 4, 2x USB-A (5Gbps), 1x HDMI 2.1, 1x 10Gb Ethernet, 3.5mm Jack; Front: 2x USB-C (10Gbps), 1x SDXC Slot",
        webcam_biometrics="Requires External Webcam / Studio Display; Supports Apple Touch ID Wireless Magic Keyboard",
        thermals_acoustics="Dual Centrifugal Blower System with Massive Circular Aluminum Heatsink, Barely Audible (<15 dBA continuous)"
    ),

    # --- Gaming / 3D Enthusiast ---
    Computer(
        id="c-lenovo-legion-pro-5i",
        name="Lenovo Legion Pro 5i Gen 9 (2024)",
        brand="Lenovo",
        os="Windows",
        form_factor="Laptop",
        release_year=2024,
        price=1499.0,
        cpu_model="Intel Core i7-14700HX (20C/28T)",
        cpu_tier=4,
        cpu_cores=20,
        gpu_model="NVIDIA GeForce RTX 4070 (8GB 140W)",
        gpu_tier=3,
        ram_gb=32,
        storage_gb=1000,
        battery_hours=5.5,
        weight_lbs=5.5,
        screen_size=16.0,
        screen_nits=500,
        screen_gamut="100% sRGB",
        screen_refresh_hz=240,
        touchscreen=False,
        stylus_support=False,
        warranty_years=1,
        purchase_url="https://www.bestbuy.com/site/lenovo-legion-pro-5i-16-gaming-laptop-wqxga-intel-14th-gen-core-i7-with-16gb-memory-nvidia-geforce-rtx-4070-1tb-ssd-onyx-grey/6575389.p",
        official_url="https://www.lenovo.com/us/en/p/laptops/legion-laptops/legion-5-series/legion-pro-5i-gen-9-(16-inch-intel)/len101g0033",
        retailer="Best Buy",
        msrp=1799.99,
        price_notes="Best Buy street deal price $1,499 ($300 off Lenovo list MSRP of $1,799.99 for RTX 4070 model).",
        target_summary="High-TGP RTX 4070 gaming laptop with coldfront cooling and ultra-responsive 240Hz screen.",
        user_rating=4.7,
        review_count=3120,
        ranking_badge="Tom's Hardware Best Mid-Range Gaming Laptop",
        os_edition="Windows 11 Home (64-bit Edition, Pre-tuned for Xbox Game Pass & Lenovo Vantage Overclocking)",
        cpu_details="Intel Core i7-14700HX (20 Cores / 28 Threads: 8P-Cores @ 5.5 GHz Turbo + 12E-Cores @ 3.9 GHz, 33MB Smart Cache, 55W-157W TDP)",
        cpu_benchmark_score="PassMark: 38,200 | Geekbench 6: 16,400 Multi / 2,890 Single | Cinebench R23: 26,800",
        cpu_independent_review="Grade: A+ (Desktop-Class Mobile Muscle) • Massive 28-thread workstation silicon in a laptop chassis. Crushes compilation, 3D rendering, and gaming physics under dual-fan cooling.",
        gpu_details="NVIDIA GeForce RTX 4070 Laptop GPU (8GB GDDR6, 140W Maximum TGP with Dynamic Boost, MUX Switch + Advanced Optimus)",
        ram_details="32GB DDR5-5600 MT/s (2x 16GB Dual-Channel SO-DIMM, User Upgradable to 64GB DDR5)",
        ports_io="1x USB-C 3.2 Gen 2 (DP 1.4 + 140W PD), 1x USB-C 3.2 Gen 2 (DP 1.4), 4x USB-A 3.2 Gen 1 (1 Always On), 1x HDMI 2.1 (Up to 8K/60Hz), 1x RJ-45 Gigabit LAN, 3.5mm",
        webcam_biometrics="1080p FHD Camera with E-Shutter Switch; No IR or Fingerprint Sensor",
        thermals_acoustics="Legion Coldfront 5.0 Dual Fan System with 3D Blade Fans, Hybrid Heatpipes & Phase-Change Thermal Compound (Up to 48 dBA in Turbo)"
    ),
    Computer(
        id="c-desktop-beast-4090",
        name="Alienware Aurora R16 High-Performance Desktop",
        brand="Alienware",
        os="Windows",
        form_factor="Desktop",
        release_year=2024,
        price=3499.0,
        cpu_model="Intel Core i9-14900KF (24C/32T Liquid Cooled)",
        cpu_tier=5,
        cpu_cores=24,
        gpu_model="NVIDIA GeForce RTX 4090 (24GB GDDR6X)",
        gpu_tier=4,
        ram_gb=64,
        storage_gb=2000,
        battery_hours=0.0,
        weight_lbs=33.8,
        screen_size=0.0,
        screen_nits=0,
        screen_gamut="N/A",
        screen_refresh_hz=0,
        touchscreen=False,
        stylus_support=False,
        warranty_years=1,
        purchase_url="https://www.dell.com/en-us/shop/desktop-computers/alienware-aurora-r16-gaming-desktop/spd/alienware-aurora-r16-desktop",
        official_url="https://www.dell.com/en-us/shop/desktop-computers/alienware-aurora-r16-gaming-desktop/spd/alienware-aurora-r16-desktop",
        retailer="Dell Direct",
        msrp=3799.0,
        price_notes="Dell direct price for Core i9-14900KF + RTX 4090 24GB liquid-cooled config. (Base Aurora models start at $1,299 with lower specs).",
        target_summary="Extreme 3D rendering and 4K ultra gaming desktop with liquid cooling and 24GB VRAM.",
        user_rating=4.8,
        review_count=740,
        ranking_badge="PCMag Editor's Choice Extreme Desktop",
        os_edition="Windows 11 Pro (64-bit Edition, Unrestricted Workstation Provisioning)",
        cpu_details="Intel Core i9-14900KF (24 Cores / 32 Threads: 8P-Cores @ 6.0 GHz Thermal Velocity Boost + 16E-Cores @ 4.4 GHz, 36MB Smart Cache, 240mm AIO Liquid Cooler)",
        cpu_benchmark_score="PassMark: 58,900 | Geekbench 6: 21,400 Multi / 3,210 Single | Cinebench R23: 40,200",
        cpu_independent_review="Grade: S (Extreme Desktop Peak Tier) • Record-setting 6.0 GHz peak clock speed with 32 threads. Unrestricted king of real-time Unreal Engine 5 development, 4K ray tracing, and physics.",
        gpu_details="NVIDIA GeForce RTX 4090 Desktop (24GB GDDR6X, 450W TGP, Ada Lovelace, 16,384 CUDA Cores, 3rd Gen RT Cores, DLSS 3 Frame Gen)",
        ram_details="64GB DDR5-5600 MT/s Dual-Channel XMP (4x DIMM Slots, Upgradable to 128GB DDR5)",
        ports_io="Front: 1x USB-C 10Gbps, 3x USB-A 5Gbps, 3.5mm; Rear: 1x USB-C 20Gbps, 2x USB-A 10Gbps, 4x USB-A 5Gbps, 2x USB 2.0, 1x RJ-45 2.5G LAN, 7.1 Surround SPDIF, 3x DP 1.4a, 1x HDMI 2.1",
        webcam_biometrics="Requires External Webcam / Peripherals; Supports FIDO2 / Windows Hello USB Keys",
        thermals_acoustics="Alienware Legend 3 Liquid Cooling with 240mm Radiator, 1000W 80-Plus Platinum PSU, 5 High-Flow Chassis Fans (~42 dBA gaming load)"
    ),
    Computer(
        id="c-minisforum-um780",
        name="Minisforum UM780 XTX Mini PC",
        brand="Minisforum",
        os="Windows",
        form_factor="Mini PC",
        release_year=2024,
        price=569.0,
        cpu_model="AMD Ryzen 7 7840HS (8C/16T)",
        cpu_tier=3,
        cpu_cores=8,
        gpu_model="AMD Radeon 780M (Oculink supported)",
        gpu_tier=1,
        ram_gb=32,
        storage_gb=1000,
        battery_hours=0.0,
        weight_lbs=1.6,
        screen_size=0.0,
        screen_nits=0,
        screen_gamut="N/A",
        screen_refresh_hz=0,
        touchscreen=False,
        stylus_support=False,
        warranty_years=2,
        purchase_url="https://www.amazon.com/dp/B0CNPZQT96",
        official_url="https://www.minisforum.com/collections/elitemini-series/amd",
        retailer="Amazon / Minisforum Store",
        msrp=649.0,
        price_notes="Amazon / Minisforum direct price for pre-configured 32GB RAM + 1TB NVMe configuration ($439 barebones without RAM/storage).",
        target_summary="Pocket-sized desktop beast with 32GB RAM, dual 2.5G LAN, supporting up to 4x 4K displays.",
        user_rating=4.6,
        review_count=890,
        ranking_badge="#1 High-Performance Mini PC",
        os_edition="Windows 11 Pro (64-bit Edition Pre-Activated, Linux Ubuntu/Fedora Dual-Boot Certified)",
        cpu_details="AMD Ryzen 7 7840HS (8 Cores / 16 Threads, 3.8 GHz Base / 5.1 GHz Max Boost, 16MB L3 Cache, Zen 4 4nm, 54W-65W TDP mode)",
        cpu_benchmark_score="PassMark: 29,400 | Geekbench 6: 12,300 Multi / 2,480 Single | Cinebench R23: 16,800",
        cpu_independent_review="Grade: A (Mini Workstation Heavyweight) • Full-power 54W Zen 4 architecture with Radeon 780M. Outperforms ultrabook chips under sustained multi-hour compiling and rendering loads.",
        gpu_details="AMD Radeon 780M (12 RDNA3 CUs @ 2.7 GHz, Oculink PCIe 4.0 x4 Port for External Desktop GPU Docking at 64Gbps)",
        ram_details="32GB DDR5-5600 MT/s (Dual SO-DIMM Slots, Upgradable up to 96GB DDR5, Non-Soldered)",
        ports_io="1x Oculink Port (PCIe 4.0 x4 64Gbps), 2x USB4 40Gbps (Type-C), 2x HDMI 2.1, 4x USB-A 3.2 Gen 2 (10Gbps), 2x 2.5G RJ-45 Ethernet LAN, 3.5mm Audio",
        webcam_biometrics="Requires External Webcam; Supports USB Fingerprint Key",
        thermals_acoustics="Dual Active Cooling Fans (CPU Fan + Dedicated RAM/SSD Active Cooler) with Liquid Metal Thermal Interface, Whisper quiet (~30 dBA)"
    )
]

# ==============================================================================
# 2. PERIPHERALS CATALOG
# ==============================================================================

@dataclass
class Peripheral:
    id: str
    name: str
    category: str  # "Monitor", "Docking Station", "Power / Charger", "Input Device"
    price: float
    description: str
    purchase_url: str

PERIPHERALS_CATALOG: List[Peripheral] = [
    Peripheral(
        id="p-dell-4k-monitor",
        name="Dell UltraSharp 27 4K USB-C Hub Monitor (U2723QE)",
        category="Monitor",
        price=519.0,
        description="IPS Black 2000:1 contrast, 98% DCI-P3, 90W power delivery over single USB-C cable.",
        purchase_url="https://www.dell.com/en-us/shop/dell-ultrasharp-27-4k-usb-c-hub-monitor-u2723qe"
    ),
    Peripheral(
        id="p-budget-24-monitor",
        name="ASUS Eye Care 24-inch 1080p IPS Monitor",
        category="Monitor",
        price=119.0,
        description="Crisp 1080p, flicker-free, low blue light filter, HDMI & VGA.",
        purchase_url="https://www.amazon.com/dp/B088MLZ8GS"
    ),
    Peripheral(
        id="p-gaming-1440p-monitor",
        name="LG UltraGear 27-inch 1440p 180Hz Gaming Monitor (27GS75Q)",
        category="Monitor",
        price=249.0,
        description="1ms response time, 180Hz refresh rate, HDR10, AMD FreeSync & G-Sync compatible.",
        purchase_url="https://www.amazon.com/dp/LG-UltraGear-27"
    ),
    Peripheral(
        id="p-caldigit-ts4-dock",
        name="CalDigit TS4 Thunderbolt 4 Dock",
        category="Docking Station",
        price=399.0,
        description="18 ports, 98W host charging, 2.5GbE Ethernet, dual 6K display support for Macs & PCs.",
        purchase_url="https://www.caldigit.com/thunderbolt-station-4"
    ),
    Peripheral(
        id="p-anker-usb-c-hub",
        name="Anker 7-in-1 USB-C Hub & HDMI Adapter",
        category="Docking Station",
        price=34.99,
        description="4K HDMI, 100W Power Delivery pass-through, SD card reader, 2x USB-A ports.",
        purchase_url="https://www.amazon.com/dp/B07ZVKTP53"
    ),
    Peripheral(
        id="p-anker-gan-charger",
        name="Anker 65W GaN Compact Travel Fast Charger (Nano II)",
        category="Power / Charger",
        price=39.99,
        description="Tiny fold-plug charger capable of full-speed charging laptops, tablets, and phones.",
        purchase_url="https://www.amazon.com/dp/B08T5QN2TR"
    ),
    Peripheral(
        id="p-logitech-mx-master-3s",
        name="Logitech MX Master 3S Wireless Ergonomic Mouse",
        category="Input Device",
        price=99.99,
        description="Quiet clicks, MagSpeed electromagnetic scroll wheel, 8000 DPI sensor on any glass surface.",
        purchase_url="https://www.logitech.com/en-us/products/mice/mx-master-3s.html"
    ),
    Peripheral(
        id="p-stylus-pen",
        name="Active Precision Stylus Pen with Palm Rejection",
        category="Input Device",
        price=59.99,
        description="4096 levels of pressure sensitivity, magnetic charging, natural handwriting feel.",
        purchase_url="https://www.amazon.com/dp/stylus-pen"
    )
]

# ==============================================================================
# 3. REQUIREMENTS & SCORING ALGORITHM
# ==============================================================================

@dataclass
class UserPersona:
    id: int
    title: str
    category: str
    mobility_need: str  # "high_travel", "hybrid", "desk_bound", "convertible_stylus"
    task_description: str
    target_budget: float
    os_preference: str  # "macOS", "Windows", "ChromeOS", "any"
    required_peripherals: List[str]

    # Minimum & Ideal Spec targets inferred from description
    min_cpu_tier: int
    ideal_cpu_tier: int
    min_gpu_tier: int
    ideal_gpu_tier: int
    min_ram_gb: int
    ideal_ram_gb: int
    min_battery_hrs: float
    max_weight_lbs: float
    min_nits: int
    requires_touch_stylus: bool

def score_computer(comp: Computer, persona: UserPersona, current_year: int = 2026) -> Dict[str, Any]:
    """
    Evaluates a computer against a persona using multi-factor metrics with:
    - Overkill penalty (waste of money / energy / ergonomics)
    - Underpowered penalty (fails workload demands)
    - Release year decay
    - Mobility & Ergonomics alignment
    """
    reasons = []

    # 1. OS Compatibility Check
    if persona.os_preference != "any" and comp.os.lower() != persona.os_preference.lower():
        return {"score": 0.0, "eligible": False, "reason": f"OS mismatch: requires {persona.os_preference}, has {comp.os}"}

    # 2. Form Factor / Touchscreen Hard Requirement Check
    if persona.requires_touch_stylus and not (comp.touchscreen and comp.stylus_support):
        return {"score": 0.0, "eligible": False, "reason": "Requires 2-in-1 touchscreen with active stylus support."}

    # 3. Performance Alignment (35 points max)
    # Check CPU
    if comp.cpu_tier < persona.min_cpu_tier:
        cpu_score = 5.0  # severely penalized for underpowered
        reasons.append("CPU underpowered for workload")
    elif comp.cpu_tier > persona.ideal_cpu_tier + 1:
        # OVERKILL PENALTY! (e.g. i9 for simple office/school)
        cpu_score = 12.0
        reasons.append(f"CPU ({comp.cpu_model}) is extreme overkill for this use-case")
    elif comp.cpu_tier >= persona.ideal_cpu_tier:
        cpu_score = 18.0
    else:
        cpu_score = 14.0

    # Check GPU
    if comp.gpu_tier < persona.min_gpu_tier:
        gpu_score = 0.0
        reasons.append("GPU insufficient for visual/3D requirements")
    elif comp.gpu_tier > persona.ideal_gpu_tier + 1 and persona.ideal_gpu_tier <= 1:
        # OVERKILL PENALTY: Dedicated gaming GPU on someone who just wants web browsing/office
        gpu_score = 4.0
        reasons.append("Dedicated high-power GPU is unnecessary battery drain and thermal waste for everyday tasks")
    elif comp.gpu_tier >= persona.ideal_gpu_tier:
        gpu_score = 17.0
    else:
        gpu_score = 11.0

    perf_total = cpu_score + gpu_score  # out of 35

    # 4. Memory & Storage (15 points max)
    if comp.ram_gb < persona.min_ram_gb:
        ram_score = 2.0
        reasons.append(f"RAM ({comp.ram_gb}GB) below minimum requirement ({persona.min_ram_gb}GB)")
    elif comp.ram_gb > persona.ideal_ram_gb * 2:
        # Slight overkill penalty on RAM
        ram_score = 10.0
    elif comp.ram_gb >= persona.ideal_ram_gb:
        ram_score = 15.0
    else:
        ram_score = 11.0

    # 5. Mobility, Battery & Form-Factor (20 points max)
    if persona.mobility_need == "high_travel":
        # Needs high battery and low weight
        bat_score = min(10.0, (comp.battery_hours / persona.min_battery_hrs) * 10.0) if persona.min_battery_hrs > 0 else 10.0
        weight_score = max(0.0, 10.0 - (max(0.0, comp.weight_lbs - 2.5) * 3.5))
        mobility_score = bat_score + weight_score
        if comp.form_factor == "Desktop":
            mobility_score = 0.0
            reasons.append("Cannot travel: Desktop form factor")
    elif persona.mobility_need == "convertible_stylus":
        mobility_score = 20.0 if (comp.touchscreen and comp.stylus_support) else 5.0
    elif persona.mobility_need == "desk_bound":
        # Desktops and Mini PCs score high, laptops also fine
        mobility_score = 18.0 if comp.form_factor in ["Desktop", "Mini PC"] else 15.0
    else:  # hybrid
        bat_score = min(10.0, (comp.battery_hours / 8.0) * 10.0)
        weight_score = max(0.0, 10.0 - (max(0.0, comp.weight_lbs - 3.5) * 2.0))
        mobility_score = bat_score + weight_score

    # 6. Display & Screen Fit (10 points max)
    display_score = 5.0
    if comp.screen_nits >= persona.min_nits:
        display_score += 3.0
    if "DCI-P3" in comp.screen_gamut or "100% sRGB" in comp.screen_gamut:
        display_score += 2.0

    # 7. Release Year Decay (10 points max)
    # Penalize older hardware (current_year=2026)
    age = current_year - comp.release_year
    if age <= 1:
        year_score = 10.0
    elif age == 2:
        year_score = 8.5
    elif age == 3:
        year_score = 6.5
        reasons.append(f"Model released {comp.release_year} (older generation hardware)")
    else:
        year_score = 4.0
        reasons.append(f"Model released {comp.release_year} (4+ years old)")

    # 8. Budget Fit (10 points max)
    # Severe penalty if way over budget; penalty if excessively under budget for pro workloads
    budget_diff = persona.target_budget - comp.price
    if comp.price > persona.target_budget:
        over_ratio = (comp.price - persona.target_budget) / persona.target_budget
        budget_score = max(0.0, 10.0 - (over_ratio * 20.0))
        if over_ratio > 0.35:
            reasons.append(f"Price (${comp.price:,.0f}) is significantly over budget (${persona.target_budget:,.0f})")
    else:
        # Under budget is good, unless it's so cheap it lacks quality
        budget_score = 10.0

    total_score = perf_total + ram_score + mobility_score + display_score + year_score + budget_score
    total_score = round(max(0.0, min(100.0, total_score)), 1)

    return {
        "computer": comp,
        "score": total_score,
        "eligible": total_score >= 45.0,
        "reasons": reasons,
        "sub_scores": {
            "performance": round(perf_total, 1),
            "memory": round(ram_score, 1),
            "mobility": round(mobility_score, 1),
            "display": round(display_score, 1),
            "freshness": round(year_score, 1),
            "budget_fit": round(budget_score, 1)
        }
    }

def match_peripherals(persona: UserPersona, selected_comp: Computer) -> List[Peripheral]:
    """Recommends logical peripherals based on persona requirements and computer form factor."""
    matches = []
    needed_cats = persona.required_peripherals

    for cat in needed_cats:
        if cat == "Monitor":
            if persona.category == "Gaming":
                matches.append(next(p for p in PERIPHERALS_CATALOG if p.id == "p-gaming-1440p-monitor"))
            elif persona.category in ["Creative", "Business"]:
                matches.append(next(p for p in PERIPHERALS_CATALOG if p.id == "p-dell-4k-monitor"))
            else:
                matches.append(next(p for p in PERIPHERALS_CATALOG if p.id == "p-budget-24-monitor"))
        elif cat == "Docking Station":
            if selected_comp.price > 1200:
                matches.append(next(p for p in PERIPHERALS_CATALOG if p.id == "p-caldigit-ts4-dock"))
            else:
                matches.append(next(p for p in PERIPHERALS_CATALOG if p.id == "p-anker-usb-c-hub"))
        elif cat == "Power / Charger":
            matches.append(next(p for p in PERIPHERALS_CATALOG if p.id == "p-anker-gan-charger"))
        elif cat == "Input Device":
            if persona.requires_touch_stylus:
                matches.append(next(p for p in PERIPHERALS_CATALOG if p.id == "p-stylus-pen"))
            else:
                matches.append(next(p for p in PERIPHERALS_CATALOG if p.id == "p-logitech-mx-master-3s"))
    return matches

# ==============================================================================
# 4. THE 10 CALIBRATION PERSONAS (Varied, Realistic, Logically Constrained)
# ==============================================================================

PERSONAS: List[UserPersona] = [
    UserPersona(
        id=1,
        title="High School / Freshmen General Studies",
        category="School",
        mobility_need="high_travel",
        task_description="Google Docs, web research with 15 tabs, Netflix, Zoom classes. No gaming or video editing.",
        target_budget=500.0,
        os_preference="any",
        required_peripherals=[],
        min_cpu_tier=1, ideal_cpu_tier=1,
        min_gpu_tier=0, ideal_gpu_tier=0,
        min_ram_gb=8, ideal_ram_gb=8,
        min_battery_hrs=9.0, max_weight_lbs=3.8, min_nits=250,
        requires_touch_stylus=False
    ),
    UserPersona(
        id=2,
        title="Computer Science & Engineering Student",
        category="School",
        mobility_need="hybrid",
        task_description="Running Docker containers, compiling C++/Rust, multiple VS Code windows, occasional local LLMs.",
        target_budget=1400.0,
        os_preference="any",
        required_peripherals=["Docking Station"],
        min_cpu_tier=3, ideal_cpu_tier=4,
        min_gpu_tier=1, ideal_gpu_tier=2,
        min_ram_gb=16, ideal_ram_gb=32,
        min_battery_hrs=10.0, max_weight_lbs=4.0, min_nits=400,
        requires_touch_stylus=False
    ),
    UserPersona(
        id=3,
        title="Professional 4K Video Editor & Drone Filmmaker",
        category="Creative",
        mobility_need="hybrid",
        task_description="DaVinci Resolve Studio color grading, Adobe Premiere 4K 10-bit drone footage, multi-track timeline, fast exports.",
        target_budget=2600.0,
        os_preference="any",
        required_peripherals=["Monitor", "Docking Station"],
        min_cpu_tier=4, ideal_cpu_tier=5,
        min_gpu_tier=3, ideal_gpu_tier=4,
        min_ram_gb=32, ideal_ram_gb=36,
        min_battery_hrs=8.0, max_weight_lbs=5.0, min_nits=500,
        requires_touch_stylus=False
    ),
    UserPersona(
        id=4,
        title="Senior Financial Analyst / Accountant",
        category="Work",
        mobility_need="desk_bound",
        task_description="Massive Excel spreadsheets (500k+ rows) with Power Query & VBA macros, ERP software, dual external displays.",
        target_budget=1200.0,
        os_preference="Windows",
        required_peripherals=["Monitor", "Input Device"],
        min_cpu_tier=3, ideal_cpu_tier=3,
        min_gpu_tier=0, ideal_gpu_tier=1,
        min_ram_gb=16, ideal_ram_gb=32,
        min_battery_hrs=0.0, max_weight_lbs=10.0, min_nits=250,
        requires_touch_stylus=False
    ),
    UserPersona(
        id=5,
        title="Medical / Nursing Student (Clinical Rotations)",
        category="School",
        mobility_need="convertible_stylus",
        task_description="Annotating anatomy slides by hand with a stylus, patient chart simulations, rounds all day in hospital wards.",
        target_budget=1000.0,
        os_preference="Windows",
        required_peripherals=["Input Device", "Power / Charger"],
        min_cpu_tier=2, ideal_cpu_tier=3,
        min_gpu_tier=0, ideal_gpu_tier=1,
        min_ram_gb=16, ideal_ram_gb=16,
        min_battery_hrs=11.0, max_weight_lbs=3.3, min_nits=400,
        requires_touch_stylus=True
    ),
    UserPersona(
        id=6,
        title="Traveling Competitive Esports & AAA Gamer",
        category="Gaming",
        mobility_need="hybrid",
        task_description="Valorant, Apex Legends at 180+ FPS, Cyberpunk 2077 with ray tracing on hotel desks, Discord streaming.",
        target_budget=1600.0,
        os_preference="Windows",
        required_peripherals=["Input Device"],
        min_cpu_tier=4, ideal_cpu_tier=4,
        min_gpu_tier=3, ideal_gpu_tier=3,
        min_ram_gb=16, ideal_ram_gb=32,
        min_battery_hrs=4.0, max_weight_lbs=6.0, min_nits=350,
        requires_touch_stylus=False
    ),
    UserPersona(
        id=7,
        title="Audio Producer & Studio Mixing Engineer",
        category="Creative",
        mobility_need="desk_bound",
        task_description="Ableton Live & Pro Tools with 80+ audio tracks, low DPC buffer latency, dozens of virtual instrument plugins, silent studio acoustics.",
        target_budget=2200.0,
        os_preference="macOS",
        required_peripherals=["Monitor", "Docking Station"],
        min_cpu_tier=4, ideal_cpu_tier=4,
        min_gpu_tier=2, ideal_gpu_tier=3,
        min_ram_gb=32, ideal_ram_gb=32,
        min_battery_hrs=0.0, max_weight_lbs=15.0, min_nits=0,
        requires_touch_stylus=False
    ),
    UserPersona(
        id=8,
        title="Remote Corporate Executive",
        category="Work",
        mobility_need="high_travel",
        task_description="Zoom / Teams calls all day, Slack, travel between airport lounges and boardrooms, crisp microphone and webcam, sleek design.",
        target_budget=1300.0,
        os_preference="any",
        required_peripherals=["Power / Charger", "Docking Station"],
        min_cpu_tier=3, ideal_cpu_tier=3,
        min_gpu_tier=0, ideal_gpu_tier=1,
        min_ram_gb=16, ideal_ram_gb=16,
        min_battery_hrs=14.0, max_weight_lbs=3.0, min_nits=450,
        requires_touch_stylus=False
    ),
    UserPersona(
        id=9,
        title="Extreme 3D Artist & Unreal Engine 5 Developer",
        category="Work",
        mobility_need="desk_bound",
        task_description="Heavy 3D rendering in Blender & Maya, real-time Unreal Engine 5 scene building, baking textures, 24GB VRAM requirement.",
        target_budget=3600.0,
        os_preference="Windows",
        required_peripherals=["Monitor"],
        min_cpu_tier=5, ideal_cpu_tier=5,
        min_gpu_tier=4, ideal_gpu_tier=4,
        min_ram_gb=64, ideal_ram_gb=64,
        min_battery_hrs=0.0, max_weight_lbs=50.0, min_nits=0,
        requires_touch_stylus=False
    ),
    UserPersona(
        id=10,
        title="Casual Retired Home User",
        category="Home",
        mobility_need="hybrid",
        task_description="Checking online banking, family photos, reading articles, YouTube, wants zero headaches, simple updates, 14-15 inch screen for readability.",
        target_budget=550.0,
        os_preference="any",
        required_peripherals=[],
        min_cpu_tier=1, ideal_cpu_tier=2,
        min_gpu_tier=0, ideal_gpu_tier=0,
        min_ram_gb=8, ideal_ram_gb=16,
        min_battery_hrs=8.0, max_weight_lbs=4.5, min_nits=250,
        requires_touch_stylus=False
    )
]

# ==============================================================================
# 5. SIMULATION & CALIBRATION RUNNER
# ==============================================================================

def run_calibration():
    print("=" * 80)
    print("RUNNING 10 LOGICAL CALIBRATION RUNS - COMPUTER ADVISOR MATCHMAKER")
    print("=" * 80)

    for persona in PERSONAS:
        print(f"\n[RUN #{persona.id}] Persona: {persona.title} ({persona.category})")
        print(f"  • Tasks: {persona.task_description}")
        print(f"  • Budget: ${persona.target_budget:,.0f} | Mobility: {persona.mobility_need} | OS Pref: {persona.os_preference}")
        print(f"  • Inferred Targets: CPU Tier {persona.ideal_cpu_tier}, GPU Tier {persona.ideal_gpu_tier}, RAM {persona.ideal_ram_gb}GB")

        results = []
        for comp in COMPUTERS_CATALOG:
            res = score_computer(comp, persona)
            if res["eligible"]:
                results.append(res)

        # Sort descending by match score
        results.sort(key=lambda x: x["score"], reverse=True)

        # Top 3 recommendations
        top_matches = results[:3]

        if not top_matches:
            print("  ⚠️ NO MATCHING MACHINES FOUND!")
            continue

        best = top_matches[0]["computer"]
        best_score = top_matches[0]["score"]
        peripherals = match_peripherals(persona, best)

        print(f"\n  🎯 TOP MATCH (Score: {best_score}/100):")
        print(f"     -> {best.name} [${best.price:,.0f}] ({best.os}, {best.release_year})")
        print(f"     -> Specs: {best.cpu_model} | {best.ram_gb}GB RAM | {best.gpu_model} | {best.battery_hours}h battery | {best.weight_lbs} lbs")

        # Anti-Overkill & Sanity Verification Check
        if persona.category in ["School", "Home"] and persona.target_budget < 600:
            assert best.gpu_tier <= 1, f"FAIL: Budget/casual user matched with high-power GPU {best.gpu_model}"
            assert best.price <= persona.target_budget * 1.15, "FAIL: Over budget by too much"
            print("     ✓ Sanity Check Passed: No overkill hardware or excessive budget paired.")

        if persona.requires_touch_stylus:
            assert best.touchscreen and best.stylus_support, f"FAIL: Stylus required but matched {best.name}"
            print("     ✓ Sanity Check Passed: Touchscreen + stylus guaranteed.")

        if persona.title == "Extreme 3D Artist & Unreal Engine 5 Developer":
            assert best.gpu_tier >= 4, "FAIL: 3D Artist not given top GPU tier"
            print("     ✓ Sanity Check Passed: Workstation with massive VRAM matched.")

        print(f"\n  📋 RUNNERS UP:")
        for idx, runner in enumerate(top_matches[1:3], start=2):
            c = runner["computer"]
            print(f"     #{idx}: {c.name} (${c.price:,.0f}) - Score: {runner['score']}")

        if peripherals:
            print(f"\n  🔌 RECOMMENDED PERIPHERAL BUNDLE:")
            bundle_cost = sum(p.price for p in peripherals)
            for p in peripherals:
                print(f"     + [{p.category}] {p.name} (${p.price:,.2f}) - {p.description}")
            print(f"     Total Hardware + Peripherals: ${best.price + bundle_cost:,.2f}")

        print("-" * 80)

if __name__ == "__main__":
    run_calibration()
