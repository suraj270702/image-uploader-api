import ImageUpload from "../models/Image-Upload.js";

export const imageUpload = async (req, res) => {
  try {
    const newData = new ImageUpload({
      name: req.body.name,
      image: req.body.url,
      userId: req.userId,
    });

    await newData.save();

    return res.status(200).json({ message: "image uploaded successfully" });
  } catch (err) {
    console.log(err);
  }
};

export const getAllImages = async (req, res) => {
  try {
    const getAllImages = await ImageUpload.find({ userId: req.userId })

    return res.status(200).json({ message: "success", getAllImages });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};
