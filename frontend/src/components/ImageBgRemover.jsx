import { useState } from "react";
import Input from "./input";
import Output from "./output";

export default function ImageBgRemover() {
  const defaultImage =
    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp";
  const [urlImage, setUrlImage] = useState("");
  const [localImage, setLocalImage] = useState(null);
  const imageDisplayed = urlImage || localImage || defaultImage;
  return (
    <>
      <Input onSelect={setUrlImage || setLocalImage} />
      <Output image={imageDisplayed} />
    </>
  );
}
