import CallListItem from "../components/calls/CallListItem";
import { sampleCalls } from "../utils/sampleCalls";

const CallList = () => {
  return (
    <div>
      {sampleCalls.map((call) => (
        <CallListItem key={call.id} call={call} />
      ))}
    </div>
  );
};

export default CallList;
