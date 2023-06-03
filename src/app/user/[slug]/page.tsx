type Props = {
  params: {
    slug: string;
  };
};

export default function UserDetailPage({ params }: Props) {
  return <>{params.slug} 관련 페이지</>;
}
