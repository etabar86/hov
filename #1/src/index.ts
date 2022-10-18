import { AccountEvents } from '../../events';

export function calculateAccountBalance(events: typeof AccountEvents, accountId: string): number {
  let curAmount = 0
  for(let event of events) {
    if (event.aggregateId === accountId) {
      if (event.type === 'BalanceCredited') {
        if (event.body?.amount) {
          curAmount = curAmount + event.body?.amount
        }        
      } else if (event.type === 'BalanceDebited') {
        if (event.body?.amount) {
          curAmount = curAmount - event.body?.amount
        }
      }
    }
  }
  return curAmount;
}

export function getAccountInformation(events: typeof AccountEvents, accountId: string) {
  return {};
}