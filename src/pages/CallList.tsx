import CallListItem from "../components/calls/CallListItem";
import { sampleCalls } from "../utils/sampleCalls";
import "../styles/pages/_calls.scss";

const CallList = () => {
  return (
    <div className="calls-page">
      {sampleCalls.map((call) => (
        <CallListItem key={call.id} call={call} />
      ))}
    </div>
  );
};

export default CallList;
