import React from 'react';
import EmptyDashboard from '../empty-dashb/EmptyDashboard';
import { IEmptyHandler } from './empty-handler.i';

export const EmptyHandler: React.FC<IEmptyHandler> = React.memo(
  ({ children, data }) => {
    if (data.length === 0) {
      return <EmptyDashboard />;
    }
    return <div>{children}</div>;
  },
);
