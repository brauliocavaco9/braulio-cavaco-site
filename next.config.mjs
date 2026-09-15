/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // As capas placeholder são SVG; o Next bloqueia SVG por omissão por segurança.
    // Quando substituíres por capas reais em .jpg/.png podes remover isto se preferires.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
