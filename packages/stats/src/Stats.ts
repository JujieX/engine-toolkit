import { Script, Camera } from "@galacean/engine";
import Monitor from "./Monitor";

/**
 * Display engine status data such as FPS.
 */
export class Stats extends Script {
  private monitor: Monitor;

  /**
   * @override
   * @param camera - The monitor camera
   */
  onBeginRender(camera: Camera): void {
    if (!this.monitor) {
      // @ts-ignore
      const gl = camera.engine._hardwareRenderer.gl;
      if (gl) {
        this.monitor = new Monitor(gl);
      }
    }
  }

  /**
   * @override
   * @param camera - The monitor camera
   */
  onEndRender(camera: Camera): void {
    if (this.monitor) {
      this.monitor.update();
    }
  }
}
