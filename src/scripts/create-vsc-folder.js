const fs = require("fs");
const path = require("path");

// Ruta de la carpeta .vscode a la altura de src
const vscodeDir = path.join(__dirname, "..", "..", ".vscode");

// Función para crear la carpeta .vscode si no existe
function createVscodeFolder() {
  if (!fs.existsSync(vscodeDir)) {
    fs.mkdirSync(vscodeDir, { recursive: true });
    console.log("Carpeta .vscode creada.");
  } else {
    console.log("Carpeta .vscode ya existe.");
  }
}

// Crear y escribir en extensions.json
function createExtensionsJson() {
  const extensionsJson = {
    recommendations: ["esbenp.prettier-vscode", "dbaeumer.vscode-eslint"],
  };

  fs.writeFileSync(
    path.join(vscodeDir, "extensions.json"),
    JSON.stringify(extensionsJson, null, 2)
  );
  console.log("Archivo extensions.json creado.");
}

// Crear y escribir en launch.json
function createLaunchJson() {
  const launchJson = {
    version: "0.2.0",
    configurations: [
      {
        type: "node",
        request: "launch",
        name: "Launch Program",
        skipFiles: ["<node_internals>/**"],
        program: "${workspaceFolder}/app.js",
      },
    ],
  };

  fs.writeFileSync(
    path.join(vscodeDir, "launch.json"),
    JSON.stringify(launchJson, null, 2)
  );
  console.log("Archivo launch.json creado.");
}

// Crear y escribir en settings.json
function createSettingsJson() {
  const settingsJson = {
    "editor.wordWrap": "on",
    "editor.formatOnSave": true,
  };

  fs.writeFileSync(
    path.join(vscodeDir, "settings.json"),
    JSON.stringify(settingsJson, null, 2)
  );
  console.log("Archivo settings.json creado.");
}

// Ejecutar funciones
createVscodeFolder();
createExtensionsJson();
createLaunchJson();
createSettingsJson();

console.log("Configuración de VSCode creada exitosamente.");
