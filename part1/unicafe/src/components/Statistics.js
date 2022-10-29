const Statistics = ({ data }) => {
  return (
    <div>
      {data.map((entry, i) => (
        <p key={i}>
          {entry[0]}: {entry[1]}
        </p>
      ))}
    </div>
  );
};

export default Statistics;
