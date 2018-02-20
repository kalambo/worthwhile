import * as React from 'react';
import { Icon } from 'elmnt';
import { enclose } from 'mishmash';

import { colors, icons } from '../../styles';

export default enclose(({ methods }) => ({ path, ...props }) => ({
  ...props,
  ...methods({
    onMouseMove: () => props.context.setActive({ type: 'remove', path }),
    onMouseLeave: () => props.context.setActive(null),
    onClick: () => {
      props.context.query.remove(path);
      props.context.setActive(null);
    },
  }),
}))(({ relation, active, onMouseMove, onMouseLeave, onClick }) => (
  <>
    {active && (
      <Icon
        {...icons.cross}
        style={{
          fontSize: 7,
          background: colors.red,
          color: 'white',
          borderRadius: 10,
          padding: 2,
          position: 'absolute',
          left: '50%',
          marginLeft: -6,
          ...(relation ? { top: 1 } : { bottom: 1 }),
        }}
      />
    )}
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onDoubleClick={onClick}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        cursor: 'pointer',
        // background: 'rgba(255,0,255,0.1)',
      }}
    />
  </>
));
