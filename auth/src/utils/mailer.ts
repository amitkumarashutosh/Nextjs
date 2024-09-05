import { User } from "@/models/user.model";
import nodemailer from "nodemailer";
import bcrypt from 'bcryptjs';

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        const hashedToken = await bcrypt.hash(userId.toString(), 10);

        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000
            });

        } else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, {
                forgetPasswordToken: hashedToken,
                forgetPasswordTokenExpiry: Date.now() + 3600000 
            });
        }

        var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "d14b36f7ec540e",
                pass: "8e8bc3e88c476d"
            }
        });

        const mailOption = {
            from: 'amitkumarashutos@gmail.com',
            to: email,
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser
            <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`
        };

        const info = await transporter.sendMail(mailOption);
        return info;

    } catch (error: any) {
        throw new Error(error.message);
    }
};
