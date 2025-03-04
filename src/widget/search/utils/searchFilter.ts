import { ITest } from '../../../shared';

export const searchFilter = (value: string, array: ITest[]) => {
  // const listNames: string[] = array ? array.map(card => card.name) : [];
  // if (listNames.length === 0) {
  //   return;
  // }
  // console.log(listNames);
  const regex = new RegExp(value, 'i');
  const matched: ITest[] = array.filter(item => {
    if (regex.test(item.name)) {
      return true;
    } else {
      return false;
    }
  });
  return matched;
};
