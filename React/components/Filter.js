import React from 'react';

function Filter({hideFinishedTasks}) {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={hideFinishedTasks}> </input>
        Ukryj ukończone
      </label>
    </div>
  );
}

// export default Filter;