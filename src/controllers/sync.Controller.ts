import { RequestHandler } from "express";
import dotenv from "dotenv";
import jwtGenerater from "../utils/jwtGenerater";
import sendToKore from "../services/sendToKore";
import TemplateText from "../templates/template.Text";

dotenv.config();

declare let process: {
  env: {
    KORE_AI_BASE_URL: string;
    KORE_AI_CALLBACK_URL: string;
    KORE_AI_CLIENT_ID: string;
    KORE_AI_CLIENT_SECRET: string;
  };
};

/**
 * 호출하면 Request의 Body 받아서 Kore 쪽으로 보내기
 * userId는 방 번호로 진행하면 될듯
 */
const callback: RequestHandler = async (req, res) => {
  console.log(req.body.test);
  const url = process.env.KORE_AI_CALLBACK_URL;
  const koreMessage = {
    session: {
      new: false,
    },
    message: {
      type: "text",
      val: req.body.test,
    },
    from: {
      id: "inseon.park", // 메시지룸 번호
    },
    mergeIdentity: true,
    preferredChannelForResponse: "rtm",
  };
  const tokenKore = jwtGenerater.getKoreJwtToken();
  const data = await sendToKore.sendToKore(url, tokenKore, koreMessage);
  console.log(data.data);
  // data 가지고 Proxy에 전송하는 서비스 만들면 된다.
  callProxy(data.data.type, data.data.val);

  return res.status(200).json({
    response: data.data,
  });
};

const callProxy = (type: any, msg: any) => {
  try {
    if (type === "text") {
      let msgJson = TemplateText.getTemplateText(msg);
    }
  } catch (error) {
    console.log(error);
  }
};
export default {
  callback,
};
