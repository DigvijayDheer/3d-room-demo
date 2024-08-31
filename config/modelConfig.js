// config/modelConfig.js
export const modelConfig = {
  fans: [
    {
      id: "coffee-color-fan",
      name: "Coffee Color Fan",
      modelPath: "/Fans/coffe_color.glb",
      detailPosition: [0, -2, 0], // Position for detail page view
      detailScale: [0.06, 0.06, 0.06], // Scale for detail page view
      thumbnailPosition: [0, -3, 0], // Position for thumbnail view
      thumbnailScale: [0.06, 0.06, 0.06], // Scale for thumbnail view
    },
    {
      id: "coffee-color-fan-2",
      name: "Coffee Color Fan 2",
      modelPath: "/Fans/coffe_color_2.glb",
      position: [-350, 35, -26], // Position for room view
      scale: [1, 1, 1], // Scale for room view
    },
    {
      id: "gray-color-fan",
      name: "Gray Color Fan",
      modelPath: "/Fans/gray_color.glb",
      detailPosition: [0, -2, 0], // Position for detail page view
      detailScale: [0.06, 0.06, 0.06], // Scale for detail page view
      thumbnailPosition: [0, -3, 0], // Position for thumbnail view
      thumbnailScale: [0.06, 0.06, 0.06], // Scale for thumbnail view
    },
    {
      id: "gray-color-fan-2",
      name: "Gray Color Fan 2",
      modelPath: "/Fans/gray_color_2.glb",
      position: [-350, 35, -26], // Position for room view
      scale: [1, 1, 1], // Scale for room view
    },
    {
      id: "white-color-fan",
      name: "White Color Fan",
      modelPath: "/Fans/white_color.glb",
      detailPosition: [0, -2, 0], // Position for detail page view
      detailScale: [0.06, 0.06, 0.06], // Scale for detail page view
      thumbnailPosition: [0, -3, 0], // Position for thumbnail view
      thumbnailScale: [0.06, 0.06, 0.06], // Scale for thumbnail view
    },
    {
      id: "white-color-fan-2",
      name: "White Color Fan 2",
      modelPath: "/Fans/white_color_2.glb",
      position: [-350, 35, -26], // Position for room view
      scale: [1, 1, 1], // Scale for room view
    },
  ],
  lights: [
    {
      id: "back-lit-downlight",
      name: "Back Lit Downlight",
      modelPath: "/Lights/Back_Lit_Downlight/Back_Lit_Downlight.gltf",
      detailPosition: [0, 0, 0], // Position for detail page view
      detailScale: [40, 40, 40], // Scale for detail page view
      thumbnailPosition: [0, 0, 0], // Position for thumbnail view
      thumbnailScale: [40, 40, 40], // Scale for thumbnail view
    },
    {
      id: "back-lit-downlight-2",
      name: "Back Lit Downlight 2",
      modelPath: "/Lights/Back_Lit_Downlight_2/Back_Lit_Downlight.gltf",
      position: [-115, 97, -25], // Position for room view
      scale: [250, 250, 250], // Scale for room view
    },
    {
      id: "back-lit-downlight-3",
      name: "Back Lit Downlight 3",
      modelPath: "/Lights/Back_Lit_Downlight_3/Back_Lit_Downlight.gltf",
      position: [-56, 97, -25], // Position for room view
      scale: [250, 250, 250], // Scale for room view
    },
    {
      id: "crbo",
      name: "CRBO",
      modelPath: "/Lights/CRBO/CRBO.gltf",
      detailPosition: [0, 0, 0], // Position for detail page view
      detailScale: [40, 40, 40], // Scale for detail page view
      thumbnailPosition: [0, 0, 0], // Position for thumbnail view
      thumbnailScale: [35, 35, 35], // Scale for thumbnail view
    },
    {
      id: "crbo-2",
      name: "CRBO 2",
      modelPath: "/Lights/CRBO_2/CRBO.gltf",
      position: [-115, 97, -25], // Position for room view
      scale: [250, 250, 250], // Scale for room view
    },
    {
      id: "crbo-3",
      name: "CRBO 3",
      modelPath: "/Lights/CRBO_3/CRBO.gltf",
      position: [-56, 97, -25], // Position for room view
      scale: [250, 250, 250], // Scale for room view
    },
  ],
};

export const getModelConfig = (id) => {
  const allModels = [...modelConfig.fans, ...modelConfig.lights];
  return allModels.find((model) => model.id === id);
};
