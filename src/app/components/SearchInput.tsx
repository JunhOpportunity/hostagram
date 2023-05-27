import { ChangeEventHandler } from "react";

export default function SearchInput({
  onChange,
  value,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search for a username or name"
      className="w-[600px] h-[50px] border-2 border-gray-300 p-2 outline-none mx-auto my-[10px]"
    />
  );
}
