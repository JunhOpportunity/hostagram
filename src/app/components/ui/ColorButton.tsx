type Props = {
  text: string;
  onClick: () => void;
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] text-sm font-bold hover:bg-gray-400 hover:cursor-pointer">
      <button
        onClick={onClick}
        className="rounded-md bg-white p-[2px] hover:opacity-90 transition-opacity"
      >
        {text}
      </button>
    </div>
  );
}
