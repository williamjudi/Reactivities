import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function ActivityForm() {
  const { activityStore } = useStore();

  const categories = [
    { key: 'film', value: 'film', text: 'Film' },
    { key: 'music', value: 'music', text: 'Music' },
    { key: 'travel', value: 'travel', text: 'Travel' },
    { key: 'drinks', value: 'drinks', text: 'Drinks' },
    { key: 'culture', value: 'culture', text: 'Culture' }
  ]

  const initialState = activityStore.selectedActivity ?? {
    id: '',
    title: '',
    description: '',
    category: '',
    date: '',
    city: '',
    venue: '',
  };

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    activity.id ? activityStore.updateActivity(activity) : activityStore.createActivity(activity);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        />        
        <Form.Input
          type="date"
          placeholder="Date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="City"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <Button
          loading={activityStore.loading}
          floated="right"
          positive
          type="submit"
          content="Submit"
          onChange={handleInputChange}
        />
        <Button
          onClick={activityStore.closeForm}
          floated="right"
          type="button"
          content="Cancel"
          onChange={handleInputChange}
        />
      </Form>
    </Segment>
  );
})
