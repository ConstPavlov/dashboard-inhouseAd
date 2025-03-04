import { StatusProject } from '../../../shared';

export function getColorStatus(status: StatusProject) {
  if (status === 'PAUSED') {
    return '#FF8346';
  }
  if (status === 'DRAFT') {
    return '#5C5C5C';
  }
  if (status === 'STOPPED') {
    return '#FE4848';
  }
  if (status === 'ONLINE') {
    return '#1BDA9D';
  }
  return '5C5C5C';
}
