import sendToProxy from "../services/sendToProxy";

const getTemplateText = (val: any) => {
  const textAppCard = {
    context: {
      type: "text",
      text: val,
    },
  };
  return textAppCard;
};

export default {
  getTemplateText,
};
