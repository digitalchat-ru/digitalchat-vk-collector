import {Logger} from "winston";

export class AbstractService<_T> {
    constructor(props: _T) {}

}

export interface BaseServiceProps {
    logger: Logger;
}

export default class BaseService extends AbstractService<BaseServiceProps> {
    logger: Logger;

    constructor(props) {
        super(props)
        this.logger = props.logger
    }
}