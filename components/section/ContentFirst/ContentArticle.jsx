import React from "react";
import Button from "../../button/Button";
import Paragraf from "../../text/Paragraf";
import Text from "../../text/Text";

const ContentArticle = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <article className={`${addClass}`}>
      <Text className="text-black font-bold">Gotta Catch Em All!</Text>
      <Paragraf>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quos
        sed fugiat impedit repudiandae et placeat expedita veritatis quam
        explicabo?
      </Paragraf>

      <Button className="bg-black text-white px-6 py-3">
        More Information
      </Button>
    </article>
  );
};

export default ContentArticle;
