// config/modelConfig.js
export const modelConfig = {
  fans: [
    {
      id: "coffee-color-fan",
      name: "Coffee Color Fan",
      modelPath: "/Fans/coffe_color.glb",
      position: [-350, 35, -26], // Position for room view
      scale: [1, 1, 1], // Scale for room view
      detailPosition: [0, 0, 0], // Position for detail page view
      detailScale: [1, 1, 1], // Scale for detail page view
      thumbnailPosition: [0, -3, 0], // Position for thumbnail view
      thumbnailScale: [0.06, 0.06, 0.06], // Scale for thumbnail view
    },
    {
      id: "gray-color-fan",
      name: "Gray Color Fan",
      modelPath: "/Fans/gray_color.glb",
      position: [-350, 35, -26], // Position for room view
      scale: [1, 1, 1], // Scale for room view
      detailPosition: [0, 0, 0], // Position for detail page view
      detailScale: [1, 1, 1], // Scale for detail page view
      thumbnailPosition: [0, -3, 0], // Position for thumbnail view
      thumbnailScale: [0.06, 0.06, 0.06], // Scale for thumbnail view
    },
    {
      id: "white-color-fan",
      name: "White Color Fan",
      modelPath: "/Fans/white_color.glb",
      position: [-350, 35, -26], // Position for room view
      scale: [1, 1, 1], // Scale for room view
      detailPosition: [0, 0, 0], // Position for detail page view
      detailScale: [1, 1, 1], // Scale for detail page view
      thumbnailPosition: [0, -3, 0], // Position for thumbnail view
      thumbnailScale: [0.06, 0.06, 0.06], // Scale for thumbnail view
    },
  ],
  lights: [
    {
      id: "back-lit-downlight",
      name: "Back Lit Downlight",
      modelPath: "/Lights/Back_Lit_Downlight/Back_Lit_Downlight.gltf",
      position: [-115, 97, -25], // Position for room view
      scale: [250, 250, 250], // Scale for room view
      detailPosition: [0, 0, 0], // Position for detail page view
      detailScale: [1, 1, 1], // Scale for detail page view
      thumbnailPosition: [0, 0, 0], // Position for thumbnail view
      thumbnailScale: [40, 40, 40], // Scale for thumbnail view
    },
    {
      id: "back-lit-downlight-2",
      name: "Back Lit Downlight 2",
      modelPath: "/Lights/Back_Lit_Downlight_2/Back_Lit_Downlight.gltf",
      position: [-56, 97, -25], // Position for room view
      scale: [250, 250, 250], // Scale for room view
      detailPosition: [0, 0, 0], // Position for detail page view
      detailScale: [1, 1, 1], // Scale for detail page view
      thumbnailPosition: [0, 0, 0], // Position for thumbnail view
      thumbnailScale: [40, 40, 40], // Scale for thumbnail view
    },
    {
      id: "crbo",
      name: "CRBO",
      modelPath: "/Lights/CRBO/CRBO.gltf",
      position: [-115, 97, -25], // Position for room view
      scale: [250, 250, 250], // Scale for room view
      detailPosition: [0, 0, 0], // Position for detail page view
      detailScale: [1, 1, 1], // Scale for detail page view
      thumbnailPosition: [0, 0, 0], // Position for thumbnail view
      thumbnailScale: [35, 35, 35], // Scale for thumbnail view
    },
    {
      id: "crbo-2",
      name: "CRBO 2",
      modelPath: "/Lights/CRBO_2/CRBO.gltf",
      position: [-56, 97, -25], // Position for room view
      scale: [250, 250, 250], // Scale for room view
      detailPosition: [0, 0, 0], // Position for detail page view
      detailScale: [1, 1, 1], // Scale for detail page view
      thumbnailPosition: [0, 0, 0], // Position for thumbnail view
      thumbnailScale: [35, 35, 35], // Scale for thumbnail view
    },
  ],
};

export const getModelConfig = (id) => {
  const allModels = [...modelConfig.fans, ...modelConfig.lights];
  return allModels.find((model) => model.id === id);
};
