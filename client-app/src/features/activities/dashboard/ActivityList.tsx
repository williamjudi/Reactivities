import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Item, Segment, Button, Label } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function ActivityList() {
  const { activityStore } = useStore();

  const [target, setTarget] = useState('');

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    activityStore.deleteActivity(id);
  }

  return (
    <Segment>
      <Item.Group divided>
        {activityStore.activitiesByDate.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => activityStore.selectActivity(activity.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  name={activity.id}
                  loading={activityStore.loading && target === activity.id}
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
})
