function PageHead(props) {
  const { title, metaDes } = props;
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={metaDes} />
      <link rel="icon" href="/logoSmall.svg" />
    </head>
  );
}

export default PageHead;
