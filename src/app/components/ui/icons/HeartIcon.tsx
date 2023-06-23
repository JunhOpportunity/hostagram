import { BsHeart } from "react-icons/bs";

type Props = {
  className?: string;
}

export default function HeartIcon({className} : Props) {
  return <BsHeart className={className || 'w-7 h-7'} />
}