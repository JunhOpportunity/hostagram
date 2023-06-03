type Props = {
  text: string;
  onClick: () => void;
  size: "small" | "big";
};

export default function ColorButton({ text, onClick, size = "small" }: Props) {
  return (
    <div
      className={`rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-sm font-bold hover:bg-gray-400 hover:cursor-pointer
      ${size === "big" ? "p-[0.3rem]" : "p-[0.15rem]"}`}
    >
      <button
        onClick={onClick}
        className={`rounded-md bg-white p-[2px] hover:opacity-90 transition-opacity
        ${size === "big" ? 'p-4 text-2xl': 'p-[0.3rem] text-base'}`}
      >
        {text}
      </button>
    </div>
  );
}
