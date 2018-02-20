import * as React from 'react';
import Helmet from 'react-helmet';

import Explorer from '../core/explorer';

window.onbeforeunload = () => 'Changes that you made may not be saved.';

export default () => (
  <>
    <Helmet title="Dashboard | Worthwhile" />
    <div style={{ padding: '30px', height: '100%' }}>
      <Explorer
        types={{
          befrienders: 'Befrienders',
          refugees: 'Refugees',
          ww_people: 'People',
          ww_equalopps: 'Equal opps',
        }}
        // query={[
        //   {
        //     name: 'befrienders',
        //     fields: ['firstname', 'lastname', 'address'],
        //   },
        // ]}
      />
    </div>
  </>
);
