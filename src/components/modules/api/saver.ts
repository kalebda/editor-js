import { Saver } from "../../../../types/api";
import { OutputData } from "../../../../types";
import * as _ from "../../utils";
import Module from "../../__module";

/**
 * @class SaverAPI
 * provides with methods to save data
 */
export default class SaverAPI extends Module {
  /**
   * Available methods
   *
   * @returns {Saver}
   */
  public get methods(): Saver {
    return {
      save: (force = false): Promise<OutputData> => this.save(force),
    };
  }

  /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */
  public save(force = false): Promise<OutputData> {
    const errorText = `Editor\'s content can not be saved in read-only mode -> ${force}`;

    if (force == false && this.Editor.ReadOnly.isEnabled) {
      _.logLabeled(errorText, "warn");

      return Promise.reject(new Error(errorText));
    }

    return this.Editor.Saver.save();
  }
}
