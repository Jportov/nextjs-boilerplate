import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp.gmail.com
      port: Number(process.env.SMTP_PORT), // 587
      secure: false, // usa STARTTLS
      auth: {
        user: process.env.SMTP_USER, // rigservicestomelis@gmail.com
        pass: process.env.SMTP_PASS, // Tomelisa0403
      },
    });

    const mailOptions = {
      from: `"Tomelis Rig Services" <${process.env.SMTP_USER}>`,
      to: process.env.COMPANY_EMAIL, // rigservicestomelis@gmail.com
      subject: "Novo Contato via Site - Tomelis Rig Services",
      text: `Você recebeu um novo contato via formulário:

Nome: ${name}
Empresa: ${company}
Email: ${email}
Mensagem: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email enviado com sucesso!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao enviar email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
