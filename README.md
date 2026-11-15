# DESCENDRA - Moon Landing Safety Predictor

DESCENDRA is a 3D Moon exploration and landing safety tool built for NASA Space Apps Challenge 2026.

We help future Moon missions land safely.

## What does it do?

- **3D Moon Viewer:** Explore the Moon in 3D, rotate and zoom
- **Landing Safety Predictor:** Check if a landing spot is safe or risky
- **Chandrayaan-3 Comparison:** Compare our landing site with Chandrayaan-3's landing site
- **Rover Path Planner:** Plan a safe path for the Rover on Moon surface
- **Shadow Simulator:** See shadows on Moon to find sunlight and dark areas
- **Earth-Moon Communication Tool:** Check communication delay between Earth and Moon

## Why did we build it?

Landing on Moon is very risky. One wrong rock or slope can destroy the lander.
DESCENDRA predicts danger before landing, so future missions can choose the safest spot.

## Tech Used

- React + Vite
- Three.js for 3D Moon
- JavaScript / HTML / CSS
- NASA Moon Data

## Our Data Model

DESCENDRA is built on real data analysis, not just a concept.

We first analyzed the complete Chandrayaan-3 Mission to understand how a real lunar landing works.

**Our Reference Project:**
[Chandrayaan-3 Data Analysis Project](https://github.com/kyatharthsingh/CHANDRAYAN-3-PROJECT)

**What We Analyzed in That Project:**
- Lander Data - lander_data.xls - Mass, Power, Landing Parameters
- Rover Data - rover_data.xls - Pragyan Rover Movement & Performance
- Propulsion Module - Propulsion & Fuel Analysis
- Seismic & Temperature Data - Moon's Surface Conditions

**How it helps DESCENDRA:**
The learnings from Chandrayaan-3's successful landing at Shiv Shakti Point helped us build our Safety Score Model. We now check Slope, Craters & Hazards to predict the safest landing spot for future missions.
## How to Run

1. Download this project
2. Open terminal
3. Run `npm install`
4. Run `npm run dev`

## Team DESCENDRA

- Yatharth Singh - Project Lead, Developer, Presenter & Demo Lead
- Aditya Pratap Singh - Developer and 3D Engineer
- Nurboluly Dias - Research & Documentation Lead
- Aditya Raj Singh - Data Analyst
- Lakshya Lahari Singh - UI Designer & Creative Lead
- Yuvraj Singh - Software Engineer 
- Team Members - NASA Space Apps Challenge 2026

Built for NASA Space Apps Challenge 2026 - The Next Frontier
