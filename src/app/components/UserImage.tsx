import Image from "next/image";

export default function UserImage({ userImageUrl }: { userImageUrl: String }) {
  return (
    <div className="w-[50px] h-[50px] relative">
      <Image
        className="rounded-full border-2"
        src={`${userImageUrl}`}
        fill={true}
        style={{ objectFit: "cover" }}
        alt="User Image"
      />
    </div>
  );
}
