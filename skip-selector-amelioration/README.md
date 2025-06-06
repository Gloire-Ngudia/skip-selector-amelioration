# ♻️ Skip Selector App

A React app that allows users to select a skip based on their location and needs. This project is an improved redesign of the skip selection interface used by [WeWantWaste.co.uk](https://wewantwaste.co.uk), with a responsive and modern design.

---

## 🚀 Features

- ✅ Dynamic display of available skips via an **external REST API**
- ✅ Responsive card component (`<SkipCard />`) with visual selection effect
- ✅ Action banner fixed to the bottom of the screen on mobile after selection
- ✅ Step-by-step navigation system in a clear `Header` (Postcode, Waste Type, etc.)
- ✅ Modern UI with **TailwindCSS**, **React**, and **Lucide Icons**
- ✅ Smooth and intuitive behavior on mobile and desktop

---
##🎨 Improved Design
* In the header, the sections passed or crossed have been changed to blue instead of having only the icon colored, and a visual effect has been added when hovering over the header elements. We wanted it to be on a black background for a clean, simple, yet clear design.

* For the cards, we added a scale effect and a bit of dark gray on hover, and we set them to a black color that differs from the parent container's font to make our cards even more visible and attractive.

* We could still improve the design a lot, but due to time constraints, we're only doing this.

## 🧱 Technical Stack

- **React 18+** with Hooks
- **TypeScript** for type safety
- **TailwindCSS** for fast and responsive design
- **Lucide-react** for elegant and modular icons
- **Fetch API** to retrieve data from a dynamic URL

---

## 🧠 Approach & Structure

The project is organized around component logic:

- `ChooseSkipPage.tsx`: Main component, retrieves data and displays the grid. SkipCards.
- SkipCard.tsx : Displays the details of each skip (size, price, options).
- Header.tsx : Progress bar at the top of the page.
- Action banner **fixed to the bottom on mobile** that appears as soon as an item is selected (with a back and continue button).

---

## 📱 Responsive Design

- Adaptive text automatically hides on mobile, leaving only the icons.
- The action banner is fixed bottom-0 and only visible when a skip is selected.
- Adaptive grid: 1 column on mobile, 2 columns on tablet, 3 columns on desktop.

---

## 🛠️ Launch the project locally

```bash
git clone https://github.com/ton-user/skip-selector-app.git
cd skip-selector-app
npm install
npm run dev