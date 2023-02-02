import NextHead from "next/head";

export default function Head(tab: string) {
  return (
    <NextHead>
      <title>{`ECS | ${tab}`}</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
