# Certificate Images

This folder contains certificate images for the portfolio.

## How to Add Your Certificate Images:

1. **Save your certificate images** in this folder with the following names:
   - `cloud-computing-certificate.jpg`
   - `ai-ml-certificate.jpg`
   - `mern-stack-certificate.jpg`
   - `project-management-certificate.jpg`
   - `100xdevs-certificate.jpg`

2. **Image Requirements:**
   - Format: JPG, PNG, or WebP
   - Recommended size: 800x600 pixels or larger
   - File size: Under 2MB for optimal loading
   - High quality: Clear and readable text

3. **Fallback:**
   - If an image is missing, a placeholder will be shown
   - The modal will still work with the fallback design

## Example Certificate Images:
You can use placeholder images or your actual certificates. The modal will display them beautifully with:
- Full-screen overlay
- Responsive design
- Close button
- Skills tags
- Link to online certificate

## Customization:
To add more certificates, update the `certifications` array in `src/components/Certifications.jsx` with:
- `certificateImage: "/certificates/your-certificate-name.jpg"`
- Add the corresponding image file to this folder
