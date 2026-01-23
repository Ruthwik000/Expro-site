# Troubleshooting Guide

## Error: "Cannot read properties of null (reading 'useState')" or "AuthContext" errors

This error occurs when your browser is caching old code from a previous project.

### Solution:

1. **Stop the dev server** (Ctrl+C in terminal)

2. **Clear browser cache:**
   - Chrome: Press `Ctrl+Shift+Delete`
   - Select "Cached images and files"
   - Click "Clear data"
   
   OR
   
   - Open DevTools (F12)
   - Right-click the refresh button
   - Select "Empty Cache and Hard Reload"

3. **Delete Vite cache:**
   ```bash
   # Windows
   Remove-Item -Recurse -Force node_modules/.vite

   # Or manually delete the folder:
   # node_modules/.vite
   ```

4. **Restart dev server:**
   ```bash
   npm run dev
   ```

5. **Open in incognito/private window** (to test without cache)

## WebSocket Connection Failed

This is a common Vite HMR (Hot Module Replacement) warning and usually doesn't affect functionality. If it persists:

1. Check if another process is using port 3000
2. Try a different port in `vite.config.js`:
   ```js
   server: {
     port: 3001
   }
   ```

## Still Having Issues?

1. Close all browser tabs with localhost:3000
2. Stop the dev server
3. Clear browser cache completely
4. Restart dev server
5. Open in a fresh browser tab or incognito window
