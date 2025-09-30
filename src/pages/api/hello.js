// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    message: "Welcome to Valmiki Vihar API",
    version: "1.0.0",
    endpoints: {
      destinations: "/api/destinations",
      packages: "/api/packages",
      contact: "/api/contact",
    },
  });
}
