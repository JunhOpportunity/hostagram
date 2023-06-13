import Image from "next/image";

type Props = {
  image?: string | null;
  size: "big" | "small";
  highlight: boolean;
};

export default function Avatar({
  image,
  size = "small",
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      <img
        alt="user profile"
        src={image ?? undefined}
        className={`bg-white rounded-full ${getImageSizeStyle(size)}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: string, highlight: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    : "";
  const sizeStyle = size === "small" ? `w-9 h-9` : "w-[60px] h-[60px]";
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  return size === "small"
    ? "w-[34px] h-[34px]  p-[0.1rem]"
    : "w-16 h-16  p-[0.2rem] ";
}
