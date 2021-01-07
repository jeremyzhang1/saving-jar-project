import GroupSearch from '../components/GroupSearch';
import GroupBox from '../components/GroupBox';

function PageGroups() {
  return (
    <div>
        <h1>Find Goals</h1>
        <GroupSearch/>
        <button>+Create a Goal</button>
        <GroupBox/>
    </div>
  );
}

export default PageGroups;