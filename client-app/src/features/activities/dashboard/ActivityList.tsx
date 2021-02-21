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
        // {[key: string]: Activity[] } key is the date from activites
        activityStore.groupedActivities.map(([group, activites]) => (
          <Fragment key={group}>
            <Header size='huge' sub color='teal'>{group}</Header>
            
              {activites.map((activity) => (
                  <ActivityListItem key={activity.id} activity={activity}/>
              ))}
          </Fragment>
        ))
      }
    </>
  );
})
