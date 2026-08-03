// Dummy Firebase Messaging Service Worker to handle browser update checks for cached local registrations.
// If you are not using Firebase Cloud Messaging, this prevents 404 errors in the browser console.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  // Take control immediately
});
