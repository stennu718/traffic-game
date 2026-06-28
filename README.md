# Traffic Game

Learn Estonian traffic rules through an interactive game.
Test your knowledge with quizzes, practice parking, and train your reaction time.

**For**: Anyone studying for their Estonian driver's license — or drivers who want to refresh their knowledge.

## Play now
Just open [index.html](https://stennu718.github.io/traffic-game/) in your browser. No install needed.

## Game modes
- **Quiz** — Answer traffic rule questions. Get points for correct answers.
- **Parking** — Practice parking in a simulated lot. Click the correct spot.
- **Text tasks** — Type the answer to traffic scenarios.
- **Reaction test** — React quickly when the light changes.

## Screenshot
![Gameplay](docs/screenshot.png)

## Technical Highlights

- **Zero dependencies**: Single HTML file, no build step, no npm
- **Offline-first**: Service worker caches everything — works without internet
- **Accessibility**: Keyboard navigation, ARIA labels, high contrast mode, reduced motion support
- **Responsive**: Works on mobile, tablet, and desktop
- **Testing**: 33 unit tests for game logic (node:test)
- **PWA**: Installable as app on mobile devices

## Architecture

```
index.html        # Complete game (HTML + CSS + JS)
sw.js             # Service worker for offline caching
manifest.json     # PWA manifest
tests/            # Unit tests for game logic
```

## License
MIT
