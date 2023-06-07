import React from "react";
import { LangContext } from "../App";

function About() {
  const lang = React.useContext(LangContext);

  const text_EN = `Hi!, I'm Chanoknan, i'm a Full-stack developer I have been building my skills
  through coursework and personal projects I'm particularly interested in Web development Dev/Ops
  and Mobile app Development I'm committed to writing clean, maintainable
  code and staying up to date with industry trends. I'm excited to learn
  and grow, and I'm always looking for opportunities to apply my skills.`;

  const text_JP = `こんにちは！チャノックナンです。フルスタック開発者です。コースワークと個人プロジェクトを通じて実力をつけています。
  Web開発、Dev/Ops やモバイルアプリ開発に興味があります。クリーンで保守可能なコードを書くことに取り組んでおり、業界のトレンドに最新であることを心がけて、自分のスキルを活かす機会を常に探しています。`;

  const text = lang === "EN" ? text_EN : text_JP;

  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 mx-4">
      <h1 className="text-2xl md:text-4xl mb-1 md:mb-1 font-bold">
        Eakudompong Chanoknan
      </h1>
      <h2 className="text-base md:text-lg  mb-1 font-medium">
        エークドッムポン チャノックナン
      </h2>
      <h2 className="text-base md:text-xl  mb-3 font-medium">
        Software Engineer & Full-stack Web Developer
      </h2>
      <p className="text-sm max-w-xl mb-4 font-bold text-justify">{text}</p>
      <div className="flex gap-2 ">
        <p>Email: e.chanoknan96@outlook.com</p>
        <p>Osaka,Japan</p>
      </div>
    </div>
  );
}

export default About;
