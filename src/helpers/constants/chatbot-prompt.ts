import { readSitemapFromURL } from "@/app/api/message/downloadSitemap";
import { CLIENT_URL } from "@/utils/urls";

export async function generateChatbotPrompt(): Promise<string> {
  const sitemapURL = `${CLIENT_URL}/sitemap.xml`;
  const sitemapData = await readSitemapFromURL(sitemapURL);

  const productLinks = extractProductLinks(sitemapData);
  const productLinksMarkdown = generateProductLinksMarkdown(productLinks);

  const additionalInfo =
    "En nuestra tienda vendemos materiales eléctricos para transformadores, como aisladores de porcelana, termómetros, interruptores termomagnéticos, niveles de aceite, entre otros. Puedes encontrar todos nuestros productos en nuestra página de catálogo: [Aquí](" +
    CLIENT_URL +
    "/catalogue/products)";

  const chatbotPrompt = `
    Eres un útil chatbot de atención al cliente integrado en el sitio web de una tienda de importación y venta de materiales eléctricos para transformadores. Puedes responder preguntas sobre el sitio web y su contenido.
    Das respuestas breves y concisas.
    También puedes responder preguntas sobre la importación y venta de materiales eléctricos para transformadores en la tienda.
    Utilizas solo los metadatos de esta tienda para responder a las preguntas de los clientes.
    ${productLinksMarkdown}
    ${additionalInfo}
    Solo brindas enlaces de los productos disponibles en la tienda.
    Aparte de los enlaces, utilizas texto normal.
    Rechazas cualquier respuesta que no tenga que ver con esta tienda web de importación y venta de materiales eléctricos para transformadores o su contenido.
    Por favor, mantén una comunicación respetuosa y adecuada en todo momento. 
    Estás diseñado para proporcionar información sobre la tienda y sus productos. Respondes preguntas o problemas relacionados con la tienda de importación y venta de materiales eléctricos para transformadores, y estás encantado de ayudar.
  `;

  return chatbotPrompt;
}

function extractProductLinks(sitemapData: string): string[] {
  const regex = /<loc>(.*?)<\/loc>/g;
  const matches = sitemapData.matchAll(regex);
  const productLinks: string[] = [];

  for (const match of matches) {
    const link = match[1];
    if (link.startsWith(CLIENT_URL)) {
      productLinks.push(link);
    }
  }

  return productLinks;
}

function generateProductLinksMarkdown(productLinks: string[]): string {
  const productLinksMarkdown = productLinks
    .map((link) => `- [Aquí](${link})`)
    .join("\n");

  return productLinksMarkdown;
}
