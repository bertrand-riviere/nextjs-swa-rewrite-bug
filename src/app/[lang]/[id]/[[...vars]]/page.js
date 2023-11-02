const Test = async ({ params }) => {
  const { id, lang, vars } = params;

  return (
    <>
      <div>id: {id}</div>
      <div>lang: {lang}</div>
      <div>
        vars:{' '}
        {vars && (
          <ul>
            {vars.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Test;

export const generateStaticParams = async () => [];
