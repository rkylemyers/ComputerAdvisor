# ComputeMatch — Intelligent Computer Matchmaker

A modern web application and intelligent matching engine that helps shoppers find the optimal computer based on their actual use case, software demands, budget, and mobility requirements.

## Key Features

1. **Dual Mode View (Normal vs. Detailed)**:
   - **Normal Mode**: Designed for everyday non-technical users. Highlights plain-English verdicts, battery hours, portability badges (*Ultralight*, *Battery Monster*), and straightforward value scores.
   - **Detailed (Pro) Mode**: Full technical breakdown including exact CPU tier and core count, GPU model and TGP, RAM speed, display nits/color gamut, refresh rate, release year freshness, and manufacturer warranty terms.

2. **Smart 5-Step Guided Wizard**:
   - **Step 1: Primary Purpose**: School, Work, Creative/Media, Gaming, Programming/Engineering, Everyday Home Use.
   - **Step 2: Tasks & Applications**: Ingests specific software names (e.g., *Premiere Pro*, *AutoCAD*, *Excel*) OR plain-English descriptions (*"I edit 4K drone footage"* or *"I write essays and watch Netflix"*).
   - **Deep Multi-Layer Catalog & Syllabus Scraper**: Recursively crawls complex university curriculum outlines across multiple layers (Layer 0 outline, Layer 1 individual course catalogs, Layer 2 companion lab subpages, department portals, and campus IT specifications), crawling 45-65+ pages in ~1.5s.
   - **Cross-Institutional Peer Comparison Benchmark**: If an institution's catalog does not publish an explicit, itemized hardware specification matrix for a program, the engine automatically benchmarks the curriculum against top peer institutions (e.g. Penn State University College of Agricultural Sciences / Veterinary and Biomedical Sciences, Shippensburg University Student Computing Standards) to synthesize authoritative consensus hardware standards.
   - **Step 3: Mobility**: Ultraportable commuter (<3.2 lbs, 14hr+ battery), hybrid desk-to-couch, 2-in-1 convertible with stylus, or desk-bound workstation.
   - **Step 4: Budget & OS Preference**: Interactive budget slider ($350 to $3,500+) and OS selector (Windows, macOS, ChromeOS, or Any).
   - **Step 5: Peripherals Studio**: Intelligently pairs external monitors (4K USB-C, 180Hz gaming, budget 1080p), Thunderbolt/USB-C docks, GaN travel chargers, and ergonomic mice/stylus pens.

3. **Multi-Factor Scoring & Anti-Overkill Engine**:
   - Evaluates performance fit, memory headroom, mobility alignment, display quality, release year decay (penalizing older 3-4+ year models unless delta is negligible), and budget fit.
   - **Anti-Overkill Protection**: A user needing a computer for web browsing and essays will *never* be recommended an RTX 4090 desktop or noisy 100W gaming laptop.

4. **Dynamic Side-by-Side Comparison Table**:
   - Displays contenders side-by-side in columns arranged from highest match score to lowest.
   - **Instant Filter Toggles**: Quickly check/uncheck Windows, macOS, or ChromeOS to drop or restore candidates instantly.
   - **Live Priority Sliders**: Sliders for Battery, Performance, Portability, and Screen Quality that re-weight and re-order the columns in real time.
   - Direct manufacturer and retailer purchase links.

5. **Conversational Follow-up Chat & Row Highlighting**:
   - Ask clarifying questions (*"Which one has the brightest screen?"*, *"Which laptop lasts longest on battery?"*).
   - The engine provides a conversational answer AND dynamically pulses/highlights the corresponding row in the comparison table (e.g. Screen Brightness row).
   - Provide follow-up constraints (*"I need at least 32GB RAM"* or *"Drop anything over $1,200"*), and the engine filters invalid models and re-ranks the contenders.

6. **Gemini Free Tier API Integration**:
   - Connects to Google AI Studio Gemini API (`gemini-2.5-flash`) for deep semantic understanding of course syllabi and complex follow-up questions.
   - Includes full local heuristic fallback if an API key is not entered.

## Running the Application

From `/Users/myers/ComputerAdvisor`:

```bash
# Start the local server
python3 server.py
```

Open your browser to:
**`http://localhost:8080`**

To run the automated 10-persona calibration test:
```bash
python3 calibrator.py
```
