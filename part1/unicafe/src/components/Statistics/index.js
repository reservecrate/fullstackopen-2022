import './Statistics.css';
import StatisticLine from './StatisticLine';

const Statistics = ({ data }) => {
  if (!data.total)
    return (
      <div>
        <h2>statistics</h2>
        <p>no feeback given</p>
      </div>
    );
  const { good, neutral, bad, total, average, positive } = data;
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='total' value={total} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
