import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nguyenthien11082005@gmail.com",
      pass: "@2Ti05042021",
    },
  });

  try {
    await transporter.sendMail({
      from: "nguyenthien11082005@gmail.com",
      to: email,
      subject,
      text: message,
    });

    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Failed to send email" }, { status: 500 });
  }
}
