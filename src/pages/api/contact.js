export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and message",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // Here you would typically save to database or send email
    console.log("Contact form submission:", { name, email, phone, message });

    // Simulate processing delay
    setTimeout(() => {
      res.status(200).json({
        success: true,
        message:
          "Thank you for your message! We will get back to you within 2 hours.",
        data: {
          submittedAt: new Date().toISOString(),
          referenceId: `VV${Date.now()}`,
        },
      });
    }, 1000);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({
      success: false,
      message: `Method ${req.method} not allowed`,
    });
  }
}
