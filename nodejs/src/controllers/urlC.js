import urlSchema from "../models/urlM.js";
import { nanoid } from "nanoid";

const shortanUrl = async (req, res) => {
  try {
    const { longUrl, customAlias } = req.body;
    const shortIdR = nanoid(10);

    const dataInsert = await urlSchema.create({
      shortId: shortIdR,
      longUrl,
      customAlias,
      clicks: 0,
    });

    console.log("dataInsert", dataInsert);

    if (dataInsert && dataInsert._id) {
      res.status(200).send({
        status: "success",
        shortUrl: `http://localhost:6000/${shortIdR}`,
        longUrl: dataInsert.longUrl,
        customAlias: dataInsert.customAlias,
        shortId: dataInsert.shortId,
      });
    } else {
      throw dataInsert;
    }
  } catch (error) {
    res.status(400).send({
      status: "error",
      err: error?.message,
    });
  }
};

const shortUrlStatus = async (req, res) => {
  try {
    console.log("params", req.params);
    const shortCode = req?.params?.shortCode;
    if (shortCode) {
      const result = await urlSchema.findOne({ shortId: shortCode });
      if (result && result._id) {
        res.status(200).send({ status: "success", data: result });
      } else {
        throw result;
      }
    }
  } catch (error) {
    res.status(400).send({
      status: "error",
      err: error?.message || "data not found",
    });
  }
};

const shortUrlRedirect = async (req, res) => {
  try {
    const shortCode = req?.params?.shortCode;

    if (shortCode) {
      const result = await urlSchema.findOneAndUpdate(
        { shortId: shortCode },
        { $inc: { clicks: 1 } },
        { new: true }
      );
      if (result && result?._id) {
        const longUrl = result?.longUrl;
        if (longUrl) {
          res.status(301).redirect(longUrl);
        }
      } else {
        throw result;
      }
    }
  } catch (error) {
    res.status(400).send({
      status: "error",
      err: error?.message || "data not found",
    });
  }
};

export { shortanUrl, shortUrlStatus, shortUrlRedirect };
