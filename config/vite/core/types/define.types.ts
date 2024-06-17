import { ViteBuildDevServerOptions } from "./dev-server.types";

export interface ViteDefineBuildOptions
  extends Partial<Pick<ViteBuildDevServerOptions, "paths">> {
  isDev: boolean;
  port: number;
}
