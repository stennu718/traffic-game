# Contributing to traffic-game

Thank you for your interest in contributing to this educational traffic planning game!

## Development Setup

This is a single-file HTML game with zero dependencies. Just open `index.html` in a browser.

For development:
```bash
# Option 1: Direct open
open index.html

# Option 2: Simple HTTP server
python -m http.server 8000
# Visit http://localhost:8000
```

## How to Contribute

1. Fork the repository
2. Create a branch (`git checkout -b fix/bug-name`)
3. Make your changes
4. Test in browser
5. Commit and push
6. Open a Pull Request

## Guidelines
- Keep the single-file architecture (no build step)
- Maintain accessibility (keyboard navigation, screen reader support)
- Add new game modes to the existing structure
- Test on mobile browsers

## Code Style
- Vanilla JavaScript (ES6+)
- CSS: BEM naming convention
- Keep code readable with comments for complex logic
