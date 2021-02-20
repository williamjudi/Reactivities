import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItem';

export default observer(function ActivityList() {
  const { activityStore } = useStore();

  return (
    <>
      {
        activityStore.groupedActivities.map(([groupName, activites]) => (
          <Fragment key={groupName}>
            <Header size='huge' sub color='teal'>
              {groupName}
            </Header>
              {activites.map((activity) => (
                  <ActivityListItem key={activity.id} activity={activity}/>
              ))}
          </Fragment>
        ))
      }
    </>
  );
})
