const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  // Se agrega para aumento del tamaño de pantalla se ve toda la interfaz de la app
  viewportHeight: 1500,
  viewportWidth: 1200,
  
  video: true,           // activa/desactiva la grabación de video
  videoCompression: 0,   // 0 = sin compresión (mejor calidad, más peso)

  e2e: {
    // colocar URL: estatic
    baseUrl: 'http://127.0.0.1:5500/Curso%20JS%20Moderno/52-Testing-Cypress',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
