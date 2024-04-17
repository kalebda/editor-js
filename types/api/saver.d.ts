import { OutputData } from "../data-formats/output-data";

/**
 * Describes Editor`s saver API
 */
export interface Saver {
  /**
   * Saves Editors data and returns promise with it
   *
   * @returns {Promise<OutputData>}
   */
  save(force?: boolean): Promise<OutputData>;
}
