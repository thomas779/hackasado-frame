export const BASE_URL = process.env.BASE_URL;

// generate an html page with the relevant opengraph tags
export function generateFarcasterFrame(image: string, choice: number) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${image}" />
      <meta property="fc:frame:post_url" content="${BASE_URL}/api/post" />
	  <meta property="fc:frame:image" content="${BASE_URL}/event.jpg" />
	  <meta property="fc:frame:button:1" content="Sign me up! 🙋‍♀️" />
	  <meta property="fc:frame:button:1:action" content="post_redirect" />

      ${
        choice === 1 &&
        `<meta property="fc:frame:button:1" content="Mint ✨" />`
      }
    </head>
    <body>
      
    </body>
    </html>
  `;
}
