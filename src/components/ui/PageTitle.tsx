interface Props {
  title: string;
  description: string;
}

function PageTitle({ title, description }: Props) {
  return (
    <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
      <div className="text-[28px] md:text-[34px] font-normal">
        {title}
      </div>
      <div className="text-md md:text-xl">{description}</div>
    </div>
  );
}

export default PageTitle;
