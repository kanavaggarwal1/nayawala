const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const cors = require("cors");
//app.use(cors());
app.use(cors({ origin: '*' }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://kanav:kanav9876@cluster0.j5xlrfh.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to mongoDB")
}).catch((err) => {
    console.log("error connecting to mongo db", err)
});

app.listen(port, () => {
    console.log("Server is running on port 3000");
});

const User = require("./models/user");
const Post = require("./models/post");

//endpoint to register the user in backend

app.post("/register", async (req, res) => {
    try {
        const { name, email, password, address } = req.body;

        //check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("Email already registered");
            return res.status(400).json({ message: "Email already registered" })
        }

        //create a new user 
        const newUser = newUser({
            name,
            email,
            password,
            address,
        });

        //generate of verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        //save the user to database
        await newUser.save();

        //sending the verification email
        sendVerificationEmail(newUser.email, newUser.verificationToken);

        res.status(202).json({ message: "Registration Successful !! Please check your mail for verification" })

    } catch (error) {
        console.log("error registering user", error);
        res.status(500).json({ message: "registration Failed" })
    }
});


const sendVerificationEmail = async (email, verificationToken) => {
    const transpoter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "kanavaggarwal2230@gmail.com",
            pass: "ppnx zxes vocm lced"
        },
    });

    const mailOptions = {
        from: "Ecommerce@gmail.com",
        to: email,
        subject: "Email Verification",
        text: `please click the following link to verify your email : http://localhost:3000/verify/${verificationToken}`
    };

    //send mail
    try {
        await transporter.sendMail(mailOptions);
        console.log("Verification email sent successfully")
    } catch (error) {
        console.log("Error sending the verification email")
    }
};

//endpoint to verify the email

app.get("/verify/:token",async(req,res) => {
    try {
        const token = req.params.token;

        const user = await User.findOne({verificationToken: token});

        if(!user)
        {
            return res.status(404).json({message: "Invalid verification token"})
        }

        //marking the user as verified
        user.verified = true;
        user.verificationToken = undefined;

        await user.save();

        res.status(200).json({message:"email verified successfully"})
    } catch (error) {
        res.status(500).json({message: "Email verification failed"})
    }
});

