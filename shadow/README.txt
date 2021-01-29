README

To run this tool, simply open mock3D/index.html in a browser.

/---------------------------------------------------------------------------------------------------------/

FOLDER STRUCTURE

mock3D - Html and js files
mock3D/css - CSS files
mock3D/js - Utility js files
mock3D/images/hts - Height field images
mock3D/images - Environment lights and normal maps

/---------------------------------------------------------------------------------------------------------/

FILES

Javascript:
cube.js - Contains the functionality for shader setup and initializing variables for user interface controls
sliders.js - Contains declarations for all the UI elements like sliders, color pickers etc.
dragndrop.js - Contains height field presets


index.html - Main index function that has the fragment shader and vertex shader. All the GPU computations are done here.

Functions in fragment shader (in index.html):
illumination() - Function that calculates illumination/diffuse
highlights() - Function that calculates specular highlights and forward scattering
pointIllumination() - Function that computes final color for a point light
environmentIllumination() - Function that computes final color for an environment light
main() - Main function in the shader to set the fragment color

For detailed explanations of the above functions, please refer to the inline code comments

Note: I didn't delete any of Yvonne's previous code. Her fragment shader functions have been commented out and
her index main function has been backed up in Yvonne_main_function.txt

/---------------------------------------------------------------------------------------------------------/

SCREEN CAPTURE:
To capture frames of the canvas, use 'Start' and 'Stop' buttons in the UI. Once 'Stop' is clicked, the frames will be available to download as a .tar file

/---------------------------------------------------------------------------------------------------------/

