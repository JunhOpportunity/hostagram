"use client";
import { BiImageAdd } from 'react-icons/bi';
import { ChangeEvent, HTMLInputTypeAttribute, useRef } from "react";
import UserImage from "../components/UserImage";

export default function NewpostPage() {
  const fileInput = useRef();
  const onClickImageUpload = () => {
    fileInput.current.click();
  };
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      console.log(result);
    };
    reader.readAsDataURL(theFile);
  };

  return (
    <section className="mx-auto">
      <div className="flex p-2 gap-5 items-center text-xl font-black mx-auto"></div>
      <form className="w-[600px] flex flex-col">
        <input
          type="file"
          id="post"
          ref={fileInput}
          accept="image/png, image/jpeg"
          onChange={onFileChange}
          className="hidden"
        />
        <div
          onClick={onClickImageUpload}
          className="w-full h-[300px] flex flex-col justify-center text-center border-2 border-dashed border-blue-300 cursor-pointer mb-[10px]"
        >
          <BiImageAdd className="text-7xl mx-auto"/>
          <h1 className="text-2xl">Drag and Drop your image here or click</h1>
        </div>
        <textarea placeholder='게시물 내용을 작성해주세요...' className='outline-none border-2 h-[300px] mb-[10px]'/>
        <input
          type="submit"
          className="cursor-pointer w-full bg-blue-300 text-white"
        />
      </form>
    </section>
  );
}
