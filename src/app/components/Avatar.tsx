import Image from "next/image";

export default function Avatar({ image }: { image?: string | null }) {
  return (
    <div className="w-[25px] h-[25px] rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-sm font-bold hover:bg-gray-400 hover:cursor-pointer">
      <img
        alt="user profil"
        src={image ?? undefined}
        className="rounded-full border-2 p-[0.1rem]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
