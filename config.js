// === Configure these two values ===
window.CONFIG = {
  DATA_API: "https://script.google.com/macros/s/AKfycbyCSB-T6IMrk0JrXHAxjC7bwg-39X8NWrRgkAq6lWaK7j8MHC_2_jT0CxO-U_c29UcLAg/exec",  // ✅ fixed: removed extra 'h'
  API_KEY:  "a1b2c3d4e5f6-7g8h9i0j-1k2l3m4n5o6p7q8r9s0t", 
  USE_BACKEND: true,
};

// Optional — expose simple global variables for compatibility
window.DATA_API = window.CONFIG.DATA_API;
window.API_KEY  = window.CONFIG.API_KEY;
