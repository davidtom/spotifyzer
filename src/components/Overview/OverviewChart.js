import React from 'react';
import {Table} from 'semantic-ui-react'

const OverviewChart = ({data}) => {
  console.log(data)
  return (
    <Table celled padded collapsing inverted selectable>

      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Count</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Tracks</Table.Cell>
          <Table.Cell>{data.tracks}</Table.Cell>
          </Table.Row>
        <Table.Row>
          <Table.Cell>Artists</Table.Cell>
          <Table.Cell>{data.artists}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Genres</Table.Cell>
          <Table.Cell>{data.genres}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default OverviewChart;
