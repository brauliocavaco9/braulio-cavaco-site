/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportação 100% estática: gera ficheiros HTML simples, que a Cloudflare Pages
  // serve directamente sem precisar de qualquer adaptador ou configuração especial.
  output: "export",
  images: {
    // A optimização de imagens do Next precisa de servidor; em modo estático
    // servimos as imagens tal como estão.
    unoptimized: true,
  },
};

export default nextConfig;
