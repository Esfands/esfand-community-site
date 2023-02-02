import NextHead from "next/head";

type HeadProps = {
  title: string;
};

const Head = ({ title }: HeadProps) => {
  return (
    <NextHead>
      <title>ECS | {title}</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
