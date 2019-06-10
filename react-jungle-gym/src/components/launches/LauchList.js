import React from 'react';
import { AutoSizer, List } from 'react-virtualized';
import LaunchRow from './LaunchRow';

const LauchList = ({ launches }) => {
  const row = ({ index, _, key, style }) => {
    return <LaunchRow style={style} key={key} launch={launches[index]} />;
  };

  return (
    <AutoSizer>
      {({ width }) => (
        <List
          height={300}
          width={width}
          rowHeight={50}
          rowCount={launches.length}
          rowRenderer={row}
        />
      )}
    </AutoSizer>
  );
};

export default LauchList;
