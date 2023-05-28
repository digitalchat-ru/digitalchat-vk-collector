import type { AxiosResponse } from "axios";
import type { Logger } from "winston";

export default function debugAxiosResponse(
  logger: Logger,
  response: AxiosResponse
) {
    logger.debug(`Status: ${response.status}`)
    logger.debug(response)
}
