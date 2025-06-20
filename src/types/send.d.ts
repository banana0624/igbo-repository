declare module "send" {
  import { IncomingMessage, ServerResponse } from "http";

  interface SendOptions {
    maxAge?: number;
    root?: string;
    index?: string;
    hidden?: boolean;
  }

  function send(req: IncomingMessage, path: string, options?: SendOptions): ServerResponse;

  export = send;
}
