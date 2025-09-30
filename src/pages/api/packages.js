import { packages } from "../../data/destinations";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      success: true,
      data: packages,
      count: packages.length,
    });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed`,
    });
  }
}
