# Signature Capture Fix - TODO

## Issues Identified:
- Signature pad WebSocket connection failing
- No fallback for manual signature drawing
- Canvas modal not functional for drawing

## Plan:
1. [x] Update CanvasModal.jsx to support manual drawing
2. [x] Add drawing functionality (mouse/touch events)
3. [x] Update SignatureCapture.jsx error handling
4. [x] Add fallback detection logic
5. [x] Update CSS for better drawing experience
6. [ ] Test signature capture functionality

## Files to Edit:
- `src/components/SignatureCapture/CanvasModal.jsx` ✅
- `src/components/SignatureCapture/SignatureCapture.jsx` ✅
- `src/components/SignatureCapture/CanvasModal.css` ✅

## Completed Changes:
1. **CanvasModal.jsx**: Added manual drawing functionality with mouse and touch events
2. **SignatureCapture.jsx**: Added fallback logic to detect when no signature pad is available
3. **Error Handling**: Improved error handling to gracefully fall back to manual mode
4. **UI Updates**: Updated modal to show different text and controls for manual vs pad mode

## Next Steps:
- Test the signature capture functionality in both modes
- Verify signature data is properly captured and saved
