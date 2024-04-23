const UserModel = require("../Models/User-Model");
const jwt = require("jsonwebtoken");
const viewsmodel = require("../Models/viewers-model");
const prayertimemodel = require("../Models/prayer-time-model");
const LiveModel = require("../Models/Live-model");
const EventModel = require("../Models/Event-Model");
const ContactModel = require("../Models/Contact-model");
const StudentModel = require("../Models/Students-model");
const EducatorModel = require("../Models/Educator-model");
const GuidesModel = require("../Models/Guides-model");
const NotesModel = require("../Models/Notes-model");
const DikrModel = require("../Models/Dikr-model");
const DuaModel = require("../Models/Dua-request-model");
const RepresentativeModel = require("../Models/Representative-model");
const bcrypt = require("bcryptjs");
// const added = await UserModel.create({
//     username: "username",
//     email: "email@email.com",
//     phone: 1234567890,
//     password: "password",
//     isadmin: false,
// });

// const Data = {
//     username: "qimk",
//     userid: "2465324534",
//     isadmin: false,
// };

// const token = await jwt.sign(
//     {
//         username: Data.username,
//         userid: Data.id,
//         isadmin: Data.isadmin,
//     },
//     process.env.jwtsecrettoken,
//     {
//         expiresIn: "3d",
//     }
// );
// console.log(token);
const viewscontroller = async (req, res) => {
    try {
        const viewscollectiondata = await viewsmodel.findOne();
        if (viewscollectiondata) {
            const id = viewscollectiondata._id;
            const response = await viewsmodel.updateOne(
                { _id: id },
                {
                    $inc: { views: 1 },
                }
            );
            // console.log(response);
            res.json(response);
        } else {
            const response = await viewsmodel.create({
                views: 1,
            });
            // console.log(response);
            res.json(response);
        }
    } catch (error) {
        console.log(error);
    }
};
const getprayertime = async (req, res) => {
    try {
        console.log(req.params.date);
        const response = await prayertimemodel.findOne({
            date: req.params.date,
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const signupuser = async (req, res) => {
    try {
        const emailexist = await UserModel.findOne({ email: req.body.email });
        if (emailexist) {
            res.status(404).json({ err: "Email Already Exist" });
        } else {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            console.log(req.body.password);
            const response = await UserModel.create(req.body);
            const token = await jwt.sign(
                {
                    username: response.username,
                    userid: response.id,
                    isadmin: response.isadmin,
                },
                process.env.jwtsecrettoken,
                {
                    expiresIn: "3d",
                }
            );
            res.json({ response, token });
        }
    } catch (error) {
        console.log(error);
    }
};
const getuserdata = async (req, res) => {
    let token = req.header("token");
    // console.log(token);
    if (!token) {
        res.json({ mssg: "token not found" });
    }

    try {
        const isverified = await jwt.verify(token, process.env.jwtsecrettoken);
        console.log(isverified);
        const userdetails = await UserModel.findOne({
            _id: isverified.userid,
        }).select({ password: 0 });

        res.json({ userdetails });
    } catch (error) {
        console.log(error);
    }
};
const signinuser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await UserModel.findOne({ email });

        if (!userExist) {
            return res
                .status(404)
                .json({ err: "Email not exist try to Signup" });
        }

        const user = await bcrypt.compare(password, userExist.password);
        if (user) {
            const token = await jwt.sign(
                {
                    userid: userExist._id,
                    email: userExist.email,
                    isAdmin: userExist.isadmin,
                },

                process.env.jwtsecrettoken,

                {
                    expiresIn: "90d",
                }
            );
            res.json({
                mssg: "jwt successfull",
                token: token,
                userid: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ err: "invalid email or password" });
        }
    } catch (error) {
        console.log(error);
    }
};
const getlivedata = async (req, res) => {
    try {
        const response = await LiveModel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const geteventdata = async (req, res) => {
    try {
        const response = await EventModel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const usercontact = async (req, res) => {
    try {
        const data = req.body;
        const response = await ContactModel.create(data);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const getstudentdata = async (req, res) => {
    try {
        const response = await StudentModel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const geteducatordata = async (req, res) => {
    try {
        const response = await EducatorModel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const getsubjectdata = async (req, res) => {
    const type = req.params.type;
    const studentclass = req.params.class;
    let model = null;
    if (type === "arabimalayalamnotes") {
        model = NotesModel;
    } else if (type === "madrasaguide") {
        model = GuidesModel;
    }
    try {
        const response = await model.find();
        // const response = await model.find({class:studentclass});
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const getdikrdata = async (req, res) => {
    try {
        const response = await DikrModel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const addduarequest = async (req, res) => {
    try {
        const response = await DuaModel.create(req.body);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const getrepresentativedata = async (req, res) => {
    try {
        const response = await RepresentativeModel.findOne({
            type: req.params.type,
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const addvote = async (req, res) => {
    try {
        const response = await RepresentativeModel.updateOne(
            {
                type: req.params.type,
                "Representative.name": req.params.name,
            },
            {
                $inc: { "Representative.$.vote": 1 },
            }
        );
        res.json(response)
    } catch (error) {
        console.log(error);
    }
};
// const admingetlivecontroller = async (req,res) => {
//     try {
//     } catch (error) {
//         console.log(error);
//     }
// };

module.exports = {
    viewscontroller,
    getprayertime,
    signupuser,
    getuserdata,
    signinuser,
    getlivedata,
    geteventdata,
    usercontact,
    getstudentdata,
    geteducatordata,
    getsubjectdata,
    getdikrdata,
    addduarequest,
    getrepresentativedata,
    addvote,
};
