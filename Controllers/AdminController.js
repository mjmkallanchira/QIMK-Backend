const prayertimemodel = require("../Models/prayer-time-model");
const viewersmodel = require("../Models/viewers-model");
const usersmodel = require("../Models/User-Model");
const LiveModel = require("../Models/Live-model");
const EventModel = require("../Models/Event-Model");
const ContactModel = require("../Models/Contact-model");
const StudentsModel = require("../Models/Students-model");
const EducatorModel = require("../Models/Educator-model");
const NotesModel = require("../Models/Notes-model");
const GuidesModel = require("../Models/Guides-model");
const DikrModel = require("../Models/Dikr-model");
const DuaModel = require("../Models/Dua-request-model");
const RepresentativeModel = require("../Models/Representative-model");
const TeamModel = require("../Models/Team-model");

const adminhomecontroller = (req, res) => {
    res.send("admin home ");
};
const adminprayercontroller = async (req, res) => {
    try {
        const prayeralreadyexist = await prayertimemodel.findOne({
            date: req.body.date,
        });
        if (prayeralreadyexist) {
            res.status(404).json({ err: "prayer already exist" });
        } else {
            const response = prayertimemodel.create(req.body);
            res.json(response);
        }
    } catch (error) {
        console.log(error);
    }
};
const adminviewscontroller = async (req, res) => {
    try {
        const response = await viewersmodel.find();
        res.json({ response });
    } catch (error) {
        console.log(error);
    }
};
const adminusercontroller = async (req, res) => {
    try {
        const response = await usersmodel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admingetprayertimecontroller = async (req, res) => {
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
const admingetallprayertimecontroller = async (req, res) => {
    try {
        const response = await prayertimemodel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admindeleteprayertimecontroller = async (req, res) => {
    try {
        const response = await prayertimemodel.deleteOne({
            _id: req.params.id,
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const adminaddlivecontroller = async (req, res) => {
    try {
        const response = await LiveModel.create(req.body);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admingetlivecontroller = async (req, res) => {
    try {
        const response = await LiveModel.find();
        return res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admindeletelivecontroller = async (req, res) => {
    try {
        const response = await LiveModel.deleteOne({ _id: req.params.id });
        return res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const adminaddeventcontroller = async (req, res) => {
    try {
        const response = await EventModel.create(req.body);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admingeteventscontroller = async (req, res) => {
    try {
        const response = await EventModel.find();
        return res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admindeleteeventscontroller = async (req, res) => {
    try {
        const response = await EventModel.deleteOne({ _id: req.params.id });
        return res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admingetcontactscontroller = async (req, res) => {
    try {
        const response = await ContactModel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admindeletecontsctacontroller = async (req, res) => {
    try {
        const response = await ContactModel.deleteOne({ _id: req.params.id });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const adminaddstudentcontroller = async (req, res) => {
    try {
        const data = req.body;
        const studentname = data.name;
        const studentclass = data.class;
        const studentgender = data.gender;

        const datamodel = {
            [studentclass]: [data],
            gender: studentgender,
        };

        const isgenderexist = await StudentsModel.findOne({
            gender: studentgender,
        });
        if (isgenderexist) {
            const studentexistdata = await StudentsModel.findOne({
                gender: studentgender,
            });
            const isstudentexist = studentexistdata[studentclass].filter(
                (obj) => {
                    // console.log(obj);
                    return obj.name === studentname;
                }
            );

            if (isstudentexist.length != 0) {
                return res.status(404).json({ err: "Student Already Exist" });
            }
            const response = await StudentsModel.updateOne(
                {
                    gender: studentgender,
                },
                {
                    $push: { [studentclass]: data },
                }
            );
            return res.json(response);
        } else {
            const response = await StudentsModel.create(datamodel);
            return res.json(response);
        }
        // console.log(isgenderexist);

        // console.log(response);
    } catch (error) {
        console.log(error);
    }
};
const admingetstudentdatacontroller = async (req, res) => {
    try {
        const response = await StudentsModel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admindeletestudentcontroller = async (req, res) => {
    try {
        const studentclass = req.body.class;
        const studentgender = req.body.gender;
        const studentname = req.body.name;
        console.log(studentclass, studentgender, studentname, "hai");
        const response = await StudentsModel.updateOne(
            {
                gender: req.body.gender,
            },
            {
                $pull: { [studentclass]: { name: studentname } },
            }
        );
        console.log(response);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const adminaddeducatorcontroller = async (req, res) => {
    try {
        const response = await EducatorModel.create(req.body);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admingeteducatordatacontroller = async (req, res) => {
    try {
        const response = await EducatorModel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admindeleteeducatorcontroller = async (req, res) => {
    try {
        const response = await EducatorModel.deleteOne({ _id: req.params.id });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const adminaddsubjectcontroller = async (req, res) => {
    // console.log(req.body);
    const type = req.params.type;
    let model = null;
    if (type === "notes") {
        model = NotesModel;
    } else if (type === "guides") {
        model = GuidesModel;
    }

    try {
        const classexist = await model.findOne({ class: req.body.class });
        // console.log(classexist);
        if (classexist) {
            const subjectexist = await classexist.subjects.findIndex((obj) => {
                return obj.subjectname === req.body.name;
            });
            console.log(subjectexist);
            if (subjectexist != -1) {
                return res.status(404).json({ err: "subject already exist" });
            } else {
                const response = await model.updateOne(
                    { class: req.body.class },
                    {
                        $push: {
                            subjects: {
                                subjectname: req.body.name,
                                chapters: [],
                            },
                        },
                    }
                );
                console.log(response);
                res.json(response);
            }
            // console.log(response);
        } else {
            const datamodel = {
                class: req.body.class,
                subjects: [
                    {
                        subjectname: req.body.name,
                        chapters: [],
                    },
                ],
            };
            const response = await model.create(datamodel);
            // console.log(response);
            res.json(response);
        }
    } catch (error) {
        console.log(error);
    }
};
const admingetsubjectdatadatacontroller = async (req, res) => {
    const type = req.params.type;
    let model = null;
    if (type === "notes") {
        model = NotesModel;
    } else if (type === "guides") {
        model = GuidesModel;
    }
    try {
        const response = await model.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admindeletesubjectcontroller = async (req, res) => {
    const type = req.params.type;
    let model = null;
    if (type === "notes") {
        model = NotesModel;
    } else if (type === "guides") {
        model = GuidesModel;
    }
    try {
        const data = req.body;
        console.log(data);
        const response = await model.updateOne(
            { class: data.class },
            {
                $pull: {
                    subjects: { subjectname: data.subject },
                },
            }
        );
        console.log(response);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const adminaddchaptercontroller = async (req, res) => {
    const type = req.params.type;
    let model = null;
    if (type === "notes") {
        model = NotesModel;
    } else if (type === "guides") {
        model = GuidesModel;
    }
    try {
        let isexist = await model.findOne({
            class: req.body.class,
        });
        console.log(isexist);
        if (isexist) {
            const subjectfiltered = isexist["subjects"].filter(
                (obj) => obj.subjectname === req.body.subject
            );

            let namefiltered = subjectfiltered[0].chapters.findIndex((obj) => {
                return obj.name === req.body.name;
            });

            if (namefiltered != -1) {
                return res.status(404).json({ err: "chapter already exist" });
            }

            const response = await model.updateOne(
                {
                    class: req.body.class,
                    "subjects.subjectname": req.body.subject,
                },
                {
                    $push: {
                        "subjects.$.chapters": req.body,
                    },
                }
            );
            res.json(response);
        } else {
            res.status(404).json({ err: "subject not exist " });
        }
    } catch (error) {
        console.log(error);
    }
};
const admingetchapterdatacontroller = async (req, res) => {
    const type = req.params.type;
    let model = null;
    if (type === "notes") {
        model = NotesModel;
    } else if (type === "guides") {
        model = GuidesModel;
    }

    try {
        const response = await model.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admindeletechaptercontroller = async (req, res) => {
    const type = req.params.type;
    let model = null;
    if (type === "notes") {
        model = NotesModel;
    } else if (type === "guides") {
        model = GuidesModel;
    }
    try {
        console.log(req.body);
        const response = await model.updateOne(
            {
                class: req.body.class,
                subjects: {
                    $elemMatch: {
                        subjectname: req.body.subject,
                    },
                },
            },
            {
                $pull: {
                    "subjects.$.chapters": {
                        name: req.body.chapter,
                    },
                },
            }
        );

        console.log(response);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const adminchangecontroller = async (req, res) => {
    try {
        let setstate = req.params.state;
        const userid = req.params.userid;
        const response = await usersmodel.updateOne(
            {
                _id: userid,
            },
            {
                $set: { isadmin: setstate },
            }
        );

        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const adminadddikrcontroller = async (req, res) => {
    try {
        const isexist = await DikrModel.findOne({ name: req.body.name });
        if (isexist) {
            return res.status(404).json({ err: "Dikr already exist" });
        }

        const response = await DikrModel.create(req.body);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admingetdikrcontroller = async (req, res) => {
    try {
        const response = await DikrModel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admindeletedikrcontroller = async (req, res) => {
    try {
        const response = await DikrModel.deleteOne({ _id: req.params.id });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admingetduacontroller = async (req, res) => {
    try {
        const response = await DuaModel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admindeleteduacontroller = async (req, res) => {
    try {
        const response = await DuaModel.deleteOne({ _id: req.params.id });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const adminaddrepresentatives = async (req, res) => {
    try {
        // console.log(req.body);
        const datamodel = {
            name: req.body.name,
            image: req.body.image,
            type: req.body.type,
            vote: 0,
        };
        const typeexist = await RepresentativeModel.findOne({
            type: req.body.type,
        });
        console.log(typeexist);
        if (typeexist) {
            const Representativeexist = await RepresentativeModel.findOne({
                type: req.body.type,
                "Representative.name": req.body.name,
            });
            if (Representativeexist) {
                return res
                    .status(404)
                    .json({ err: "Representative already exist" });
            }
            const response = await RepresentativeModel.updateOne(
                {
                    type: req.body.type,
                },
                {
                    $push: {
                        Representative: datamodel,
                    },
                }
            );
            res.json(response);
        } else {
            const response = await RepresentativeModel.create({
                type: req.body.type,
                Representative: [datamodel],
            });
            res.json(response);
        }
    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
};
const admingetrepresentatives = async (req, res) => {
    try {
        const response = await RepresentativeModel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admindeleterepresentatives = async (req, res) => {
    try {
        const response = await RepresentativeModel.updateOne(
            {
                type: req.body.type,
            },
            {
                $pull: {
                    Representative: { name: req.body.name },
                },
            }
        );
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const adminclearvote = async (req, res) => {
    try {
        // console.log(req.params);

        const response = await RepresentativeModel.updateOne(
            {
                type: req.params.type,
                "Representative.name": req.params.name,
            },
            {
                $set: {
                    "Representative.$.vote": 0,
                },
            }
        );
        res.json(response);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
const adminaddteamcontroller = async (req, res) => {
    try {
        console.log(req.body);
        const response = await TeamModel.create(req.body);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admingetteamdatacontroller = async (req, res) => {
    try {
        const response = await TeamModel.find();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const admindeleteteamcontroller = async (req, res) => {
    try {
        console.log(req.params.id);
        const response = await TeamModel.deleteOne({ _id: req.params.id });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};
const adminaddpointscontroller = async (req,res) => {
    try {
        // console.log(req.params.points);
        const response = await TeamModel.updateOne(
            {
                _id: req.params.id,
            },
            {
                $set: { point: req.params.points },
            }
        );
        res.json(response);
        
    } catch (error) {
        console.log(error);
    }
};
// const adminaddpointscontroller = async (req,res) => {
//     try {
//     } catch (error) {
//         console.log(error);
//     }
// };
module.exports = {
    adminhomecontroller,
    adminprayercontroller,
    adminviewscontroller,
    adminusercontroller,
    admingetprayertimecontroller,
    admingetallprayertimecontroller,
    admindeleteprayertimecontroller,
    adminaddlivecontroller,
    admingetlivecontroller,
    admindeletelivecontroller,
    adminaddeventcontroller,
    admingeteventscontroller,
    admindeleteeventscontroller,
    admingetcontactscontroller,
    admindeletecontsctacontroller,
    adminaddstudentcontroller,
    admingetstudentdatacontroller,
    admindeletestudentcontroller,
    adminaddeducatorcontroller,
    admingeteducatordatacontroller,
    admindeleteeducatorcontroller,
    adminaddsubjectcontroller,
    admingetsubjectdatadatacontroller,
    admindeletesubjectcontroller,
    adminaddchaptercontroller,
    admingetchapterdatacontroller,
    admindeletechaptercontroller,
    adminchangecontroller,
    adminadddikrcontroller,
    admindeletedikrcontroller,
    admingetdikrcontroller,
    admingetduacontroller,
    admindeleteduacontroller,
    adminaddrepresentatives,
    admingetrepresentatives,
    admindeleterepresentatives,
    adminclearvote,
    adminaddteamcontroller,
    admingetteamdatacontroller,
    admindeleteteamcontroller,
    adminaddpointscontroller
};
