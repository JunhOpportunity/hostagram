"use client";
import { BiImageAdd } from "react-icons/bi";
import { ChangeEvent, DragEvent, useState } from "react";
import UserImage from "../components/UserImage";
import Image from "next/image";

export default function NewpostPage() {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDragging(false);
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };
  const handleDrag = (e: DragEvent) => {
    if (e.type === "dragenter") {
      setDragging(true);
    } else if (e.type === "dragleave") {
      setDragging(false);
    }
  };
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault;
  };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetFiles = (event.target as HTMLInputElement).files as FileList;

    // const {
    //   target: { files },
    // } = event;
    const theFile = targetFiles[0];
    const reader = new FileReader();

    reader.readAsDataURL(theFile);
  };

  return (
    <section className="mx-auto">
      <div className="flex p-2 gap-5 items-center text-xl font-black mx-auto"></div>
      <form className="w-[600px] flex flex-col">
        <input
          type="file"
          id="post"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
        <label
          htmlFor="post"
          className="w-full h-[300px] flex flex-col justify-center text-center border-2 border-dashed border-blue-300 cursor-pointer mb-[10px]"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <BiImageAdd className="text-7xl mx-auto" />
          <h1 className="text-2xl">Drag and Drop your image here or click</h1>
        </label>
        {file && (
          <div className="relative w-full aspect-square">
            <Image
              className="object-cover"
              src={URL.createObjectURL(file)}
              alt="local file"
              fill
              sizes="650px"
            />
          </div>
        )}
        <textarea
          placeholder="게시물 내용을 작성해주세요..."
          className="outline-none border-2 h-[300px] mb-[10px]"
        />
        <input
          type="submit"
          className="cursor-pointer w-full bg-blue-300 text-white"
        />
      </form>
    </section>
  );
}
