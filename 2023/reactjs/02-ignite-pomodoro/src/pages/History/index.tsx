import { HistoryContainer, HistoryList, StatusFlag } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months</td>
              <td>
                <StatusFlag statusColor="green">Finished</StatusFlag>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months</td>
              <td>
                <StatusFlag statusColor="green">Finished</StatusFlag>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months</td>
              <td>
                <StatusFlag statusColor="green">Finished</StatusFlag>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months</td>
              <td>
                <StatusFlag statusColor="green">Finished</StatusFlag>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months</td>
              <td>
                <StatusFlag statusColor="green">Finished</StatusFlag>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months</td>
              <td>
                <StatusFlag statusColor="green">Finished</StatusFlag>
              </td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>About 2 months</td>
              <td>
                <StatusFlag statusColor="green">Finished</StatusFlag>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
