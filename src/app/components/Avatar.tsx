type AvatarSize = "xlarge" | "big" | "medium" | "small";
type Props = {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = "small",
  highlight = true,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      <img
        alt="user profile"
        src={image ?? undefined}
        className={`object-cover bg-white rounded-full ${getImageSizeStyle(
          size
        )}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: AvatarSize, highlight: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    : "";
  const sizeStyle = getContainerSize(size);
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getContainerSize(size: AvatarSize): string {
  switch (size) {
    case "small":
      return "w-[36px] h-[36px]";
    case "medium":
      return "w-[44px] h-[44px]";
    case "big":
      return "w-[64px] h-[64px] ";
    case "xlarge":
      return "w-[142px] h-[142px]";
    default:
      throw new Error(`Unsupported type size : ${size}`);
  }
}

function getImageSizeStyle(size: AvatarSize): string {
  switch (size) {
    case "small":
      return "w-[34px] h-[34px]  p-[0.1rem]";
    case "medium":
      return "w-[42px] h-[42px]  p-[0.2rem] ";
    case "big":
      return "w-[60px] h-[60px]  p-[0.2rem] ";
    case "xlarge":
      return "w-[138px] h-[138px] p-[0.3rem]";
    default:
      throw new Error(`Unsupported type size : ${size}`);
  }
}
