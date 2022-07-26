import Task from 'classes/Task';
import { CLAIM_STAGE } from 'constants/contracts';
import { truncate } from 'lodash';

/**
 * Convert hex string to json.
 */
export function hexStringToJson(hexString: string): object | null {
  if (!hexString || hexString.length === 0) {
    return null;
  }
  try {
    var hex = hexString.toString();
    if (hex.startsWith('0x')) {
      hex = hex.substring(2);
    }
    var str = decodeURIComponent(
      hex.replace(/\s+/g, '').replace(/[0-9a-f]{2}/g, '%$&'),
    );
    return JSON.parse(str);
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * Convert "0x4306D7a79265D2cb85Db0c5a55ea5F4f6F73C4B1" to "0x430...c4b1".
 */
export function addressToShortAddress(address: string): string {
  let shortAddress = address;
  if (address.length > 10) {
    shortAddress = `${address.substring(0, 6)}...${address.substring(
      address.length - 4,
    )}`;
  }
  return shortAddress?.toLowerCase();
}

/**
 * Get first name and last name of soul.
 */
export function soulToFirstLastNameString(soul: any, length = 36): string {
  let firstLastName = 'Anonymous';
  if (soul?.uriFirstName || soul?.uriLastName) {
    firstLastName = (soul.uriFirstName || '') + ' ' + (soul.uriLastName || '');
  }
  return truncate(firstLastName, { length: length });
}

/**
 * Get iamge of soul.
 */
export function soulImage(soul: any): string {
  console.log('soul', soul);
  return soul?.uriImage ? soul.uriImage : '';
}

/**
 * Convert task stage to readable string.
 */
export function taskStageToString(task: Task): string {
  for (let stageName in CLAIM_STAGE) {
    if (CLAIM_STAGE[stageName] == task.stage) return stageName;
  }
  console.warn('Unhandled Task Stage:' + task.stage, task);
  return 'Open';
}
