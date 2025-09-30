import { destinations, packages } from "../../data/destinations";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      success: true,
      data: destinations,
      count: destinations.length,
    });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed`,
    });
  }
}
